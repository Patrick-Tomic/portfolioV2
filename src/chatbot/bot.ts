import {
  intents, narrows, clarify, fallback, replies, buyIntent, frustratedIntent,
  type Intent, type Action, type Branch,
} from './intents'
import { SHORTHAND, SIGNALS, HAVE_VERBS, HAVE_THINGS, COMMON_WORDS, NEGATORS, PLATFORMS } from './signals'

export interface BotReply {
  text: string
  followUps: string[]
  actions: Action[]
  startLead?: boolean // the chat should now collect the visitor's details
  kind?: string // which answer was chosen (an intent id, or e.g. 'yes', 'no', 'help', 'clarify'); handy for tests
}

// A question the bot just asked, so the next message is read as the answer to it
export type Pending =
  | { kind: 'quote' } // "Want an exact quote?"
  | { kind: 'more' } // "Anything else I can help with?"
  | { kind: 'offer'; intent: string } // "Want to know what it costs?" / "Want to see examples?"
  | { kind: 'narrow'; id: string; thing?: string } // a narrowing question from `narrows`

// What the bot remembers between messages in one conversation
export interface BotContext {
  lastService?: string
  misses?: number // unanswered messages in a row
  pages?: number // last page count priced, passed along with a quote request
  interest?: number // answers about services or prices so far
  quoteOffered?: boolean
  pending?: Pending
  sent?: string[] // answers already given, so they aren't pasted again
}

export const QUOTE_CHIP = 'Get a free quote'

// Small talk that a yes/no should override: "no thanks" is a no, not a thank-you
const SOCIAL = new Set(['thanks', 'greeting'])

// Topics that show someone is weighing up hiring Patrick
const BUYING = new Set(['pricing', 'recommend', 'industry', 'value', 'compare', 'costs', 'deposit', 'difference', 'ai-choice', 'timeline'])

// How to refer to the service they were discussing when they say "I want to buy"
const SERVICE_NAMES: Record<string, string> = {
  spa: 'landing page (Single Page App)', mpa: 'multi-page website', website: 'website', fullstack: 'web app',
  ecommerce: 'online store', ai: 'AI agent', marketing: 'social media & listings management',
}

const NUMBER_WORDS: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, twenty: 20,
}

// Words that point back to the previous topic: "how much is IT?"
const REFERENCES = new Set(['it', 'that', 'this', 'those', 'them', 'one'])

// ── Reading the message ──

// Lowercase, drop punctuation, squash stretched words ("yesss" → "yes") and expand shorthand ("ya pls" → "yes please")
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9#\s]/g, ' ')
    .replace(/([a-z])\1{2,}/g, '$1')
    .split(/\s+/)
    .filter(Boolean)
    .map(word => SHORTHAND[word] ?? word)
    .join(' ')
}

// Strip common endings so "updates", "updating" and "updated" all become "updat"
function stem(word: string): string {
  if (word.length <= 4) return word
  if (word.endsWith('sses')) return word.slice(0, -2)
  if (word.endsWith('ies')) return word.slice(0, -3) + 'y'
  if (word.endsWith('ing')) return word.slice(0, -3)
  if (word.endsWith('ed')) return word.slice(0, -2)
  if (word.endsWith('es') && /(ch|sh|x)es$/.test(word)) return word.slice(0, -2)
  if (word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1)
  return word
}

// Number of single-letter edits to turn a into b; swapping two neighbouring letters counts as one ("webiste")
function editDistance(a: string, b: string): number {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)])
  for (let j = 1; j <= b.length; j++) d[0][j] = j
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost)
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1)
    }
  }
  return d[a.length][b.length]
}

interface Parsed {
  text: string
  words: string[]
  stems: string[]
  stemText: string
}

function parseWords(words: string[]): Parsed {
  const stems = words.map(stem)
  return { text: words.join(' '), words, stems, stemText: ` ${stems.join(' ')} ` }
}

const parse = (text: string) => parseWords(normalize(text).split(' ').filter(Boolean))

// ── Keyword matching ──

interface Terms {
  phrases: string[]
  words: [string, string][] // [stem, original word]; the original is used for typo matching
}

// Stem keywords once and drop duplicates ("project"/"projects")
function prepareTerms(keywords: string[] = []): Terms {
  const phrases = new Set<string>()
  const words = new Map<string, string>()
  for (const keyword of keywords) {
    const k = normalize(keyword)
    if (k.includes(' ')) phrases.add(k.split(' ').map(stem).join(' '))
    else if (!words.has(stem(k))) words.set(stem(k), k)
  }
  return { phrases: [...phrases], words: [...words] }
}

const COMMON = new Set(COMMON_WORDS.map(stem))

// One typo allowed in longer words ("pricng" → "pricing", "paymeny" → "payment")
function fuzzy(words: string[], keyword: string): boolean {
  if (keyword.length < 6) return false
  return words.some(w => Math.abs(w.length - keyword.length) <= 1 && editDistance(w, keyword) <= 1)
}

// Phrases count 2, words count 1. Common words ("about", "work") only count alongside a more specific match.
function matchTerms(msg: Parsed, terms: Terms): number {
  let specific = 0
  let common = 0
  for (const phrase of terms.phrases) {
    if (msg.stemText.includes(` ${phrase} `)) specific += 2
  }
  for (const [wordStem, word] of terms.words) {
    if (!msg.stems.includes(wordStem) && !fuzzy(msg.words, word)) continue
    if (COMMON.has(wordStem)) common += 1
    else specific += 1
  }
  return specific > 0 ? specific + common : 0
}

const prepared = intents.map(intent => ({
  intent,
  keywords: prepareTerms(intent.keywords),
  related: prepareTerms(intent.related),
}))

const byId = (id: string) => intents.find(i => i.id === id)
const isBroad = (intent: Intent) => (intent.weight ?? 1) < 1
const pricingTerms = prepared.find(p => p.intent.id === 'pricing')!.keywords
const buyTerms = prepareTerms(buyIntent.keywords)
const frustratedTerms = prepareTerms(frustratedIntent.keywords)

// ── Negation: "I DON'T need a payment method" ──

const NEGATOR_WORDS = new Set(NEGATORS)
const SCOPE_ENDS = new Set(['but', 'and', 'or', 'so', 'because', 'though', 'although', 'however', 'instead', 'just'])
// "no, I need an AI agent": "no" followed by these is an answer, not a negation of what follows
const AFTER_NO = new Set(['i', 'we', 'you', 'it', 'thanks', 'problem', 'worries', 'way', 'idea'])

// Known phrases that contain a negator ("not sure", "do not like") keep their normal meaning
const PROTECTED = [
  ...intents.flatMap(i => [...i.keywords, ...(i.related ?? [])]),
  ...buyIntent.keywords, ...frustratedIntent.keywords,
  ...Object.values(SIGNALS).flat(),
  ...Object.values(narrows).flatMap(n => n.branches.flatMap(b => b.keywords)),
].map(normalize).filter(p => p.includes(' ') && p.split(' ').some(w => NEGATOR_WORDS.has(w)))

// Splits a message into what they want (positive) and what they said they don't want (negated)
function splitNegation(msg: Parsed): { positive: Parsed; negated: Parsed } {
  const w = msg.words
  const isProtected = new Array(w.length).fill(false)
  for (const phrase of PROTECTED) {
    const pw = phrase.split(' ')
    for (let i = 0; i + pw.length <= w.length; i++) {
      if (pw.every((p, k) => w[i + k] === p)) pw.forEach((_, k) => (isProtected[i + k] = true))
    }
  }
  const negated = new Array(w.length).fill(false)
  for (let i = 0; i < w.length; i++) {
    if (!NEGATOR_WORDS.has(w[i]) || isProtected[i]) continue
    if (w[i] === 'no' && AFTER_NO.has(w[i + 1] ?? '')) continue
    for (let j = i + 1; j < w.length && !SCOPE_ENDS.has(w[j]); j++) negated[j] = true
  }
  return {
    positive: parseWords(w.filter((_, i) => !negated[i])),
    negated: parseWords(w.filter((_, i) => negated[i])),
  }
}

const positiveOf = (text: string) => splitNegation(parse(text)).positive

// ── Picking a topic ──

interface Match {
  intent: Intent
  score: number
  guessed: boolean // matched on related words only
}

function rank(msg: Parsed): Match[] {
  return prepared
    .map(p => {
      const strong = matchTerms(msg, p.keywords)
      const loose = matchTerms(msg, p.related) * 0.5
      return { intent: p.intent, score: (strong + loose) * (p.intent.weight ?? 1), guessed: strong === 0 }
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score) // stable: earlier intents win ties
}

// Best intent for a message. preferSpecific skips broad intents when a specific one matched at all.
function pick(msg: Parsed, preferSpecific = false): Match | null {
  const ranked = rank(msg)
  if (!ranked.length) return null
  // "my business needs marketing" → marketing, not the general small-business answer
  if (ranked[0].intent.yields) {
    const specific = ranked.find(r => r !== ranked[0] && !r.guessed && !isBroad(r.intent))
    if (specific) return specific
  }
  if (preferSpecific) {
    const specific = ranked.find(r => !isBroad(r.intent))
    if (specific) return specific
  }
  // "How much is a full stack app?" → the full stack answer (it has the price), not the general price list
  if (ranked[0].intent.id === 'pricing') {
    const service = ranked.find(r => r.intent.service && !r.guessed)
    if (service) return service
  }
  return ranked[0]
}

// ── Yes / no / help ──

interface Signals { yes: boolean; no: boolean; help: boolean }

const SIGNAL_TERMS = Object.fromEntries(
  Object.entries(SIGNALS).map(([name, terms]) => [name, terms.map(t => normalize(t)).sort((a, b) => b.split(' ').length - a.split(' ').length)]),
) as Record<keyof Signals, string[]>

// Phrases are found first and blanked out, so "no thanks" or "i am ok" can't also count as a single-word yes
function readSignals(msg: Parsed): Signals {
  let text = ` ${msg.text} `
  const found: Signals = { yes: false, no: false, help: false }
  const order: (keyof Signals)[] = ['no', 'yes', 'help']
  for (const multiWord of [true, false]) {
    for (const name of order) {
      for (const term of SIGNAL_TERMS[name]) {
        if (term.includes(' ') !== multiWord) continue
        // Single words also match their plural or -ing forms ("questions", "helping")
        const hit = multiWord
          ? text.includes(` ${term} `)
          : text.split(' ').some(w => w && stem(w) === stem(term))
        if (!hit) continue
        found[name] = true
        if (multiWord) text = text.replace(` ${term} `, ' ')
      }
    }
  }
  return found
}

const toReply = (r: { answer: string; followUps?: string[]; actions?: Action[] }, kind: string, extra: Partial<BotReply> = {}): BotReply =>
  ({ text: r.answer, followUps: r.followUps ?? [], actions: r.actions ?? [], kind, ...extra })

// Answer a message that's mostly "yes", "no" or "help", using the question the bot just asked
function answerSignals(signals: Signals, pending: Pending | undefined, context: BotContext): BotReply | null {
  const { yes, no, help } = signals
  if (!yes && !no && !help) return null

  if (pending?.kind === 'quote') {
    if (yes && !no) return toReply(replies.quoteYes, 'quote-yes', { startLead: true })
    if (no && !yes) {
      context.pending = { kind: 'more' }
      return toReply(replies.quoteNo, 'quote-no')
    }
  }
  if (pending?.kind === 'offer') {
    const intent = byId(pending.intent)
    if (intent && yes && !no) return toReply(intent, intent.id)
    if (no && !yes) return toReply(replies.offerNo, 'offer-no')
  }
  if (pending?.kind === 'more' && no && !yes && !help) return toReply(replies.goodbye, 'goodbye')

  if (help) return toReply(replies.help, 'help')
  if (yes && no) return null // "yes no", "ok nah": unclear, so ask instead of guessing
  if (yes) return toReply(replies.yes, 'yes')
  return toReply(replies.no, 'no')
}

// Once a visitor has asked about services or prices twice, offer a quote (once), then keep the button handy
function nudge(reply: BotReply, context: BotContext): BotReply {
  context.interest = (context.interest ?? 0) + 1
  if (context.pending) return reply // already asking the visitor something
  const chips = reply.followUps.filter(f => f !== QUOTE_CHIP)
  if (!context.quoteOffered && context.interest >= 2) {
    context.quoteOffered = true
    context.pending = { kind: 'quote' }
    return {
      ...reply,
      text: `${reply.text}\n\nWant an exact quote? I can send your details to Patrick in about 30 seconds.`,
      followUps: [QUOTE_CHIP, ...chips].slice(0, 3),
    }
  }
  if (context.quoteOffered) return { ...reply, followUps: [...chips.slice(0, 2), QUOTE_CHIP] }
  return reply
}

// ── Buying ──

function buyReply(context: BotContext): BotReply {
  const service = SERVICE_NAMES[context.lastService ?? '']
  const opener = service ? `Great, let's get your ${service} going!` : "Great, let's get you started!"
  const ask = service ? "Just confirm below that's what you'd like." : 'What would you like to get?'
  return {
    kind: 'buy',
    text: `${opener} The next step is quick: I'll send your details to Patrick, and he'll confirm everything, including payment, within 24 hours. Nothing is charged here in the chat. ${ask}`,
    followUps: [],
    actions: [{ label: 'Go to contact form', href: '#contact' }],
    startLead: true,
  }
}

// ── Platforms the visitor named ("google and facebook") ──

const PLATFORM_TERMS = Object.entries(PLATFORMS)
  .map(([term, label]) => [normalize(term), label] as const)
  .sort((a, b) => b[0].split(' ').length - a[0].split(' ').length)

function namedPlatforms(msg: Parsed): string[] {
  let text = ` ${msg.text} `
  const found: string[] = []
  for (const [term, label] of PLATFORM_TERMS) {
    if (!text.includes(` ${term} `)) continue
    text = text.replace(` ${term} `, ' ')
    if (!found.includes(label)) found.push(label)
  }
  return found
}

const listOf = (items: string[]) => (items.length < 2 ? items[0] : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`)

// Mentions only the platforms they named
const tailoredMarketing = (platforms: string[]) =>
  `For your ${listOf(platforms)}: Patrick's social media & listings management keeps ${platforms.length > 1 ? 'them' : 'it'} active, accurate and up to date, so customers find a business that looks current and trustworthy.`

const isListingsOnly = (platforms: string[]) => platforms.every(p => p === 'Google Business Profile' || p === 'Yelp page')

// ── Narrowing questions ──

const preparedBranches = new Map<Branch, Terms>()
const branchTerms = (b: Branch) => {
  if (!preparedBranches.has(b)) preparedBranches.set(b, prepareTerms(b.keywords))
  return preparedBranches.get(b)!
}

// The branch of a narrowing question that the message points to, if any
function matchBranch(id: string, msg: Parsed): Branch | null {
  let best: Branch | null = null
  let bestScore = 0
  for (const branch of narrows[id].branches) {
    const score = matchTerms(msg, branchTerms(branch))
    if (score > bestScore) [best, bestScore] = [branch, score]
  }
  return best
}

function askNarrow(id: string, context: BotContext, thing?: string, prefix = ''): BotReply {
  const n = narrows[id]
  context.pending = { kind: 'narrow', id, thing }
  return { kind: `${id}-ask`, text: prefix + n.question.replace('{thing}', thing ?? 'page'), followUps: n.chips, actions: [] }
}

function branchReply(b: Branch, context: BotContext, thing?: string, platforms: string[] = []): BotReply {
  if (b.then) return askNarrow(b.then, context, thing ?? 'social media page')
  if (b.remember) context.lastService = b.remember
  const tailor = b.tailor && platforms.length > 0
  const text = tailor ? tailoredMarketing(platforms) : b.answer ?? ''
  const kind = tailor ? (isListingsOnly(platforms) ? 'marketing-google' : 'marketing-social') : b.kind
  const reply: BotReply = { kind, text, followUps: b.followUps ?? [], actions: b.actions ?? [] }
  // Recommend first; only show the price if they want it
  if (b.offer) {
    context.pending = { kind: 'offer', intent: b.offer }
    reply.text += '\n\nWant to know what it costs?'
    reply.followUps = ['Yes, how much is it?', ...reply.followUps].slice(0, 3)
  }
  return reply
}

// Answer straight away if the message already picks a branch; otherwise ask the narrowing question
function narrowOrAnswer(id: string, msg: Parsed, context: BotContext): BotReply {
  const platforms = namedPlatforms(msg)
  const branch = matchBranch(id, msg)
  if (branch) return branchReply(branch, context, undefined, platforms)
  // Named platforms answer the marketing question by themselves: "facebook and instagram"
  if (id === 'marketing' && platforms.length) {
    const kind = isListingsOnly(platforms) ? 'marketing-google' : 'marketing-social'
    return branchReply(narrows.marketing.branches.find(b => b.kind === kind)!, context, undefined, platforms)
  }
  return askNarrow(id, context)
}

// ── "I have X" (vs "I need X") ──

interface Have {
  narrow: 'have-website' | 'have-social' | 'have-unclear'
  thing: string // how to refer to it: "Facebook page"
  rest: Parsed // what they said after it ("…but nobody visits it")
}

const HAVE_VERB_WORDS = HAVE_VERBS.map(v => normalize(v).split(' '))
const ARTICLES = new Set(['a', 'an', 'the', 'my', 'our', 'one', 'some', 'its', 'their'])

function findThing(words: string[]): { kind: keyof typeof HAVE_THINGS; term: string } | null {
  const text = ` ${words.join(' ')} `
  for (const kind of ['social', 'website', 'unclear'] as const) {
    for (const term of HAVE_THINGS[kind]) {
      const t = normalize(term)
      const hit = t.includes(' ') ? text.includes(` ${t} `) : words.some(w => stem(w) === stem(t))
      if (hit) return { kind, term: t }
    }
  }
  return null
}

// "I already have a website…", "got a facebook page", "we have an instagram" (but not "do YOU have a facebook page?")
function detectHave(msg: Parsed): Have | null {
  const w = msg.words
  for (let i = 0; i < w.length; i++) {
    for (const verb of HAVE_VERB_WORDS) {
      if (!verb.every((v, k) => w[i + k] === v)) continue
      if (i > 0 && !['i', 'we'].includes(w[i - 1])) continue
      const start = i + verb.length
      const window = w.slice(start, start + 4)
      const found = findThing(window.filter(x => !ARTICLES.has(x)).slice(0, 3))
      if (!found) continue
      const end = start + window.findIndex(x => stem(x) === stem(found.term.split(' ').pop()!)) + 1
      const rest = parse(w.slice(end).join(' '))
      const narrow = found.kind === 'website' ? 'have-website' : found.kind === 'social' ? 'have-social' : 'have-unclear'
      const thing = namedPlatforms(parse(found.term))[0] ?? 'social media page'
      return { narrow, thing, rest }
    }
  }
  return null
}

// ── Page prices ──

// "how much for 8 pages" / "a five page website" / just "6" after talking about websites
function pagePrice(msg: Parsed, context: BotContext): BotReply | null {
  const toNumber = (w: string) => (/^\d+$/.test(w) ? parseInt(w, 10) : NUMBER_WORDS[w])

  let pages: number | undefined
  const match = msg.text.match(/\b(\d+|[a-z]+)\s+(?:page|pages)\b/)
  if (match) pages = toNumber(match[1])
  else if (context.lastService && ['website', 'mpa', 'spa'].includes(context.lastService)) {
    const bare = msg.text.match(/^(?:about |around |maybe |probably |like )?(\d+|[a-z]+)(?: pages?)?$/)
    if (bare) pages = toNumber(bare[1])
  }
  if (!pages || pages > 100) return null
  context.pages = pages

  if (pages === 1) {
    context.lastService = 'spa'
    return {
      kind: 'pages',
      text: 'A one-page site is a Single Page App: $150 flat, including custom design, mobile responsiveness and a contact section.',
      followUps: ['How does the process work?'],
      actions: [{ label: 'Go to contact form', href: '#contact' }],
    }
  }
  context.lastService = 'mpa'
  const total = 150 + 50 * (pages - 1)
  return {
    kind: 'pages',
    text: `${pages} pages would be $${total.toLocaleString()} ($150 base, then $50 for each page after the first). That includes navigation, SEO-optimised pages and brand-consistent design.`,
    followUps: ['How does the process work?', 'Can I see examples?'],
    actions: [{ label: 'Go to contact form', href: '#contact' }],
  }
}

// ── Not repeating ourselves ──

const unique = <T>(items: T[], key: (item: T) => string = String) =>
  items.filter((item, i) => items.findIndex(other => key(other) === key(item)) === i)

const sentKey = (text: string) => text.slice(0, 160)

// The same answer again gets a short follow-up instead of the whole text
function again(reply: BotReply): BotReply {
  const base = (reply.kind ?? '').split('+')[0]
  const alt = replies.again[base]
  if (alt) return { ...reply, kind: `${base}-again`, text: alt.answer, followUps: alt.followUps ?? reply.followUps }
  const topic = byId(base)?.topic
  return {
    ...reply,
    kind: `${base}-again`,
    text: topic
      ? `I covered ${topic} just above, so I won't repeat it all. Is there something specific about it I can clear up, or would you like an exact quote?`
      : 'I think I answered that just above. Is there something specific I can clear up, or would you like to ask Patrick directly?',
    followUps: unique([QUOTE_CHIP, ...reply.followUps]).slice(0, 3),
  }
}

function rememberSent(reply: BotReply, context: BotContext): BotReply {
  const sent = (context.sent ??= [])
  // Questions and "didn't catch that" replies are fine to repeat
  const repeatable = /(-ask|clarify|fallback)$/.test(reply.kind ?? '')
  const out = !repeatable && sent.includes(sentKey(reply.text)) ? again(reply) : reply
  sent.push(sentKey(out.text))
  if (sent.length > 40) sent.shift()
  return out
}

// ── Main ──

export function getReply(text: string, context: BotContext = {}): BotReply {
  return rememberSent(answer(text, context), context)
}

// For the chat panel's quote request: "yes" / "I want to buy" while choosing a service means "the one we discussed"
export const isBuying = (text: string) => matchTerms(positiveOf(text), buyTerms) > 0
export const saysYes = (text: string) => {
  const s = readSignals(parse(text))
  return s.yes && !s.no
}

function answer(text: string, context: BotContext): BotReply {
  const msg = parse(text)
  const { positive, negated } = splitNegation(msg)
  // The question the bot asked last applies to this message only
  const pending = context.pending
  context.pending = undefined
  const done = (reply: BotReply) => {
    context.misses = 0
    return reply
  }

  // 1. Frustration: apologise and hand over to Patrick
  if (matchTerms(msg, frustratedTerms) > 0) return done(toReply(frustratedIntent, 'frustrated'))

  // 2. Buying intent outranks everything else
  if (matchTerms(positive, buyTerms) > 0) return done(buyReply(context))
  if (matchTerms(negated, buyTerms) > 0) return done(toReply(buyIntent.negated!, buyIntent.negated!.kind))

  // 3. An answer to a narrowing question ("Social media", "It's a website", "Improve it")
  if (pending?.kind === 'narrow') {
    const branch = matchBranch(pending.id, positive)
    if (branch) return done(branchReply(branch, context, pending.thing, namedPlatforms(positive)))
  }

  // 4. "I have a page", "I already have a website but nobody visits it": ask about it, don't sell a new one
  const have = detectHave(msg)
  if (have) {
    const branch = matchBranch(have.narrow, have.rest)
    return done(branch ? branchReply(branch, context, have.thing, namedPlatforms(have.rest)) : askNarrow(have.narrow, context, have.thing))
  }

  // 5. Page counts: "how much for 8 pages", or just "6" after talking about websites
  const priced = pagePrice(msg, context)
  if (priced) return done(nudge(priced, context))

  // 6. Topics. Every part of the message gets an answer: "google and facebook. I need a website too"
  let matches: Match[] = []
  const clauses = text.split(/[,;?!.]|\b(?:and|also|plus)\b/i).map(positiveOf).filter(c => c.words.length)
  if (clauses.length > 1) {
    for (const clause of clauses) {
      const match = pick(clause, true)
      if (match && !match.guessed && !matches.some(m => m.intent === match.intent)) matches.push(match)
    }
  }
  if (matches.length < 2) {
    const match = pick(positive)
    matches = match ? [match] : []
  }

  // Short follow-ups about the previous topic: "how much is it?", "price?"
  const previous = context.lastService ? byId(context.lastService) : undefined
  const refersBack = msg.words.some(w => REFERENCES.has(w)) || msg.words.length <= 2
  let askedPrice = matchTerms(positive, pricingTerms) > 0
  if (previous && refersBack && matches.length === 1 && matches[0].intent.id === 'pricing') {
    matches = [{ intent: previous, score: 1, guessed: false }]
    askedPrice = true
  }

  // A clear topic wins over yes/no ("yes I need a website" → websites). Otherwise, if the message is
  // mostly yes/no/help, answer that, reading it as a reply to the bot's last question.
  const clearTopic = matches.some(m => !m.guessed && !SOCIAL.has(m.intent.id))
  if (!clearTopic) {
    // Something they said they DON'T want: "I don't need a payment method"
    const unwanted = rank(negated).find(r => !r.guessed && r.intent.negated)
    if (unwanted) return done(toReply(unwanted.intent.negated!, unwanted.intent.negated!.kind))

    const answered = answerSignals(readSignals(msg), pending, context)
    if (answered) return done(answered)
  }

  // Still unsure while a narrowing question is open: ask it again instead of a generic "not sure"
  if (!matches.length && pending?.kind === 'narrow') {
    return askNarrow(pending.id, context, pending.thing, "Sorry, I didn't quite catch that. ")
  }

  // Not understood: ask what they meant first; the second miss in a row hands over to Patrick
  if (!matches.length) {
    context.misses = (context.misses ?? 0) + 1
    const first = context.misses === 1
    return toReply(first ? clarify : fallback, first ? 'clarify' : 'fallback')
  }
  context.misses = 0

  matches = matches.slice(0, 3)
  const platforms = namedPlatforms(msg)

  // One topic that narrows first (marketing), unless they asked the price
  if (matches.length === 1 && matches[0].intent.narrow && !askedPrice) {
    context.lastService = matches[0].intent.id
    return narrowOrAnswer(matches[0].intent.narrow, positive, context)
  }

  const remembered = matches.map(m => m.intent.remember ?? (m.intent.service ? m.intent.id : undefined)).find(Boolean)
  if (remembered) context.lastService = remembered

  // Several topics at once: marketing answers only for the platforms they named
  const tailored = (m: Match) => matches.length > 1 && m.intent.id === 'marketing' && platforms.length > 0
  const answers = matches.map(m => {
    if (tailored(m)) return tailoredMarketing(platforms)
    // Say what we think they mean when the match came from loose word associations alone
    return m.guessed && m.intent.topic ? `Sounds like you're asking about ${m.intent.topic}. ${m.intent.answer}` : m.intent.answer
  })
  const kinds = matches.map(m => (tailored(m) ? (isListingsOnly(platforms) ? 'marketing-google' : 'marketing-social') : m.intent.id))

  const asks = matches.find(m => m.intent.asks)?.intent.asks
  if (asks) context.pending = { kind: asks }

  const reply: BotReply = {
    kind: kinds.join('+'),
    text: answers.join('\n\n'),
    followUps: unique(matches.flatMap(m => m.intent.followUps ?? [])).slice(0, 3),
    actions: unique(matches.flatMap(m => m.intent.actions ?? []), a => a.href).slice(0, 3),
    startLead: matches.length === 1 && matches[0].intent.startsLead,
  }

  // "Want to see some examples?" after a single answer that offers more
  const offer = matches.length === 1 ? matches[0].intent.offer : undefined
  if (offer) {
    context.pending = { kind: 'offer', intent: offer.intent }
    reply.text += `\n\n${offer.ask}`
    reply.followUps = ['Yes, show me', ...reply.followUps].slice(0, 3)
  }

  const buying = matches.some(m => m.intent.service || BUYING.has(m.intent.id))
  return buying && !reply.startLead ? nudge(reply, context) : reply
}
