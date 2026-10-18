// Builds auto-replies to emails using the website chatbot's understanding and answers (src/chatbot),
// so prices and services only live in one place. Everything here is plain logic with no Gmail calls,
// so it can be tested with `npm test`; email-agent/gmail.js does the Gmail side.

import { getReply, type BotContext, type BotReply } from '../../src/chatbot/bot'

export interface Email {
  from: string // "Jane Smith <jane@example.com>"
  subject: string
  body: string // plain text
}

export interface Settings {
  GREETING: string // {name} = sender's first name, or "there"
  INTRO: string
  OUTRO: string
  SIGNATURE: string
  FALLBACK: string // when nothing in the email matches a topic
  BUY_NEXT_STEPS: string // added after "Great, let's get your website going!"
  FRUSTRATED: string // when the email is a complaint
  SITE_URL: string
  MAX_TOPICS_PER_REPLY: number
}

export interface Composed {
  reply: string
  topics: string[] // reply kinds used, e.g. ['buy', 'mpa']; empty = fallback
  hotLead: boolean // ready to buy, or asking about prices: worth starring
}

// ── Reading the email ──

// Drop earlier messages quoted below a reply ("> …" lines and everything after "On … wrote:")
export function stripQuoted(body: string): string {
  const lines: string[] = []
  for (const line of body.split('\n')) {
    const t = line.trim()
    if (/^On .+wrote:$/.test(t) || /^-{2,}\s*Original Message/i.test(t) || /^From: /.test(t)) break
    if (/^(--|__)\s*$/.test(t) || /^Sent from my /i.test(t)) break // signature
    if (!t.startsWith('>')) lines.push(line)
  }
  return lines.join('\n')
}

export function emailAddress(from: string): string {
  const match = String(from).match(/<([^>]+)>/)
  return (match ? match[1] : String(from)).trim().toLowerCase()
}

export function firstName(from: string): string {
  const name = String(from).replace(/<[^>]*>/, '').replace(/["']/g, '').trim()
  const first = name.split(/\s+/)[0]
  return first && !first.includes('@') ? first.charAt(0).toUpperCase() + first.slice(1).toLowerCase() : 'there'
}

export const cleanSubject = (subject: string) => subject.replace(/^((re|fwd?|fw)\s*:\s*)+/i, '').trim()

// Each sentence of the body, in order
export function sentences(body: string): string[] {
  return stripQuoted(body).slice(0, 3000).split(/(?<=[.!?])\s+|\n+/).map(s => s.trim()).filter(s => s.length > 1).slice(0, 30)
}

// "How much would that cost and how long does it take?" → each part on its own
const clauses = (sentence: string) => sentence.split(/[,;]|\b(?:and|also|plus)\b/i).map(s => s.trim()).filter(s => s.length > 1)

// ── Turning chat answers into email ──

// Chat replies that don't belong in an email: small talk, "I didn't follow", repeats, quote-button prompts
const SKIP_KINDS = /^(clarify|fallback|help|yes|no|goodbye|thanks|greeting|quote-yes|quote-no|offer-no|socials|bot)$|-again$/
// In chat, a loose guess is fine because the visitor can correct it; an email should only answer what was asked
const isGuess = (reply: BotReply) => reply.text.startsWith("Sounds like you're asking about")
const usable = (reply: BotReply) => !SKIP_KINDS.test(reply.kind ?? '') && !isGuess(reply)
// Once a specific page price is given, the general website price lists would just repeat it
const COVERED_BY_PAGE_PRICE = /^(pricing|website|mpa|spa)$/

// Chat-only wording → email wording
const CHAT_TO_EMAIL: [RegExp, string][] = [
  [/\n\nWant an exact quote\? I can send your details to Patrick in about 30 seconds\./, ''],
  [/Want to know what it costs\?/, "If you'd like pricing details, just reply and ask."],
  [/Want to see some examples of his work\?|Want to see examples\?/, 'You can see examples of his work in the Projects section of the website.'],
  [/ ?Pick one below or just describe it in your own words\./, ''],
  [/Tell me and I'll work out the price\./, 'Reply with the number and Patrick will confirm the price.'],
  [/ ?Just confirm below that's what you'd like\.| ?What would you like to get\?/, ''],
]

const toEmailText = (text: string) => CHAT_TO_EMAIL.reduce((t, [from, to]) => t.replace(from, to), text).trim()

// In-chat links become full addresses; links back to the chat or contact form are dropped (they're already emailing)
function linksFor(replies: BotReply[], site: string): string[] {
  const names: Record<string, string> = { '#pricing': 'Pricing', '#work': 'Projects', '#about': 'About Patrick' }
  const lines: string[] = []
  for (const action of replies.flatMap(r => r.actions)) {
    const href = action.href
    if (href === '#contact' || href.startsWith('chat:')) continue
    const line = href.startsWith('#')
      ? `${names[href] ?? action.label}: ${site.replace(/\/$/, '')}/${href}`
      : `${action.label}: ${href.startsWith('/') ? site.replace(/\/$/, '') + href : href}`
    if (!lines.includes(line)) lines.push(line)
  }
  return lines.slice(0, 4)
}

const firstSentence = (text: string) => text.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? text
const family = (kind: string) => kind.split(/[-+]/)[0]
const HOT = /^(buy|pages|pricing|quote-yes)$|^(spa|mpa|website|fullstack|ecommerce|ai|marketing)\b/

export function composeReply(email: Email, settings: Settings): Composed {
  // Read the email one sentence at a time, like a conversation, so every question gets an answer
  // and context carries over ("I need a website. About 5 pages." → the 5-page price)
  const context: BotContext = {}
  const parts: BotReply[] = []
  const add = (reply: BotReply) => {
    if (usable(reply) && !parts.some(p => p.kind === reply.kind)) parts.push(reply)
  }

  // The subject sets the scene ("Website for my bakery") but is only answered if the body asks nothing
  const subjectReply = getReply(cleanSubject(email.subject), context)
  context.sent = [] // the subject's answer wasn't sent, so the body may give it
  for (const sentence of sentences(email.body)) {
    const reply = getReply(sentence, context)
    // Several topics in one sentence: answer each part separately, so each gets its own section
    if ((reply.kind ?? '').includes('+')) clauses(sentence).forEach(c => add(getReply(c, context)))
    else add(reply)
  }
  if (!parts.length) add(subjectReply)
  if (parts.some(p => p.kind === 'pages')) {
    for (let i = parts.length - 1; i >= 0; i--) if (COVERED_BY_PAGE_PRICE.test(parts[i].kind ?? '')) parts.splice(i, 1)
  }

  const kinds = parts.map(p => p.kind ?? '')
  const greeting = settings.GREETING.replace('{name}', firstName(email.from))
  const finish = (lines: string[], topics: string[], hotLead: boolean): Composed => ({
    reply: [greeting, '', ...lines, '', settings.SIGNATURE].join('\n'),
    topics,
    hotLead,
  })

  // A complaint: no sales pitch, just an apology and a personal follow-up
  if (kinds.includes('frustrated')) return finish([settings.FRUSTRATED], ['frustrated'], false)

  // A narrowing question that a later sentence already answered isn't needed ("We need marketing. Mainly Facebook.")
  const answered = parts.filter(p => {
    const kind = p.kind ?? ''
    return !kind.endsWith('-ask') || !parts.some(o => o !== p && family(o.kind ?? '') === family(kind) && !(o.kind ?? '').endsWith('-ask'))
  })

  // Ready to buy goes first, with what happens next
  const ordered = [...answered.filter(p => p.kind === 'buy'), ...answered.filter(p => p.kind !== 'buy')]
    .slice(0, settings.MAX_TOPICS_PER_REPLY)
  if (!ordered.length) return finish([settings.FALLBACK], [], false)

  const sections = ordered.map(p =>
    p.kind === 'buy' ? `${firstSentence(p.text)} ${settings.BUY_NEXT_STEPS}` : toEmailText(p.text),
  )
  const links = linksFor(ordered, settings.SITE_URL)
  const lines = [
    settings.INTRO,
    '',
    ...sections.flatMap(s => [s, '']),
    ...(links.length ? ['Helpful links:', ...links.map(l => `• ${l}`), ''] : []),
    settings.OUTRO,
  ]
  const topics = ordered.map(p => p.kind ?? '')
  return finish(lines, topics, topics.some(t => HOT.test(t)))
}

// ── Which emails to leave alone ──

export interface Incoming {
  sender: string // email address, lowercase
  subject: string
  headers: Record<string, string> // List-Unsubscribe, List-Id, Precedence, Auto-Submitted
  me: string[] // your own addresses
  threadSenders: string[] // everyone who has sent a message in this thread
  repliedRecently: boolean
}

export interface SkipRules {
  SKIP_SENDERS: string[]
  SKIP_SUBJECTS: string[]
  REPLY_ONCE_PER_HOURS: number
}

// Why this email shouldn't get an auto-reply, or '' if it should
export function skipReason(mail: Incoming, rules: SkipRules): string {
  const { sender, headers, me } = mail
  if (!sender || me.includes(sender)) return 'sent by you'
  if (mail.threadSenders.some(s => me.includes(s))) return 'you are already in this conversation'
  if (rules.SKIP_SENDERS.some(s => sender.includes(s))) return 'automated sender'
  const subject = mail.subject.toLowerCase()
  if (rules.SKIP_SUBJECTS.some(s => subject.includes(s))) return 'automated subject'
  // Mailing lists and other auto-replies (replying to those can cause endless loops)
  if (headers['List-Unsubscribe'] || headers['List-Id']) return 'mailing list'
  if (/^(bulk|list|junk)$/i.test(headers['Precedence'] ?? '')) return 'bulk mail'
  const autoSubmitted = headers['Auto-Submitted'] ?? ''
  if (autoSubmitted && autoSubmitted.toLowerCase() !== 'no') return 'automatic email'
  if (mail.repliedRecently) return `already auto-replied in the last ${rules.REPLY_ONCE_PER_HOURS}h`
  return ''
}
