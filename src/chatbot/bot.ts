import { intents, fallback, type Intent } from './intents'

export interface BotReply {
  text: string
  followUps: string[]
}

const NUMBER_WORDS: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, twenty: 20,
}

// Lowercase, turn punctuation into spaces and collapse whitespace
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9#\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// Number of single-letter edits to turn a into b
function editDistance(a: string, b: string): number {
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0]
    prev[0] = i
    for (let j = 1; j <= b.length; j++) {
      const temp = prev[j]
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1))
      diag = temp
    }
  }
  return prev[b.length]
}

// Exact whole-word match, or one typo for longer words ("pricng" → "pricing")
function hasWord(words: string[], keyword: string): boolean {
  if (words.includes(keyword)) return true
  if (keyword.length < 6) return false
  return words.some(w => Math.abs(w.length - keyword.length) <= 1 && editDistance(w, keyword) <= 1)
}

function score(message: string, words: string[], intent: Intent): number {
  let total = 0
  for (const keyword of intent.keywords) {
    if (keyword.includes(' ')) {
      if (` ${message} `.includes(` ${keyword} `)) total += 2
    } else if (hasWord(words, keyword)) {
      total += 1
    }
  }
  return total * (intent.weight ?? 1)
}

// "how much for 8 pages" / "a five page website" → exact multi-page price
function pagePrice(message: string): BotReply | null {
  const match = message.match(/\b(\d+|[a-z]+)\s+(?:page|pages)\b/)
  if (!match) return null
  const pages = /^\d+$/.test(match[1]) ? parseInt(match[1], 10) : NUMBER_WORDS[match[1]]
  if (!pages || pages > 100) return null

  if (pages === 1) {
    return {
      text: 'A one-page site is a Single Page App: $250 flat, including custom design, mobile responsiveness and a contact section.',
      followUps: ['How do I get started?'],
    }
  }
  const total = 250 + 50 * (pages - 1)
  return {
    text: `${pages} pages would be $${total.toLocaleString()} ($250 base, then $50 for each page after the first). That includes navigation, SEO-optimised pages and brand-consistent design.`,
    followUps: ['How do I get started?', 'Can I see examples?'],
  }
}

export function getReply(text: string): BotReply {
  const message = normalize(text)
  const words = message.split(' ')

  const priced = pagePrice(message)
  if (priced) return priced

  let best: Intent | null = null
  let bestScore = 0
  for (const intent of intents) {
    const s = score(message, words, intent)
    if (s > bestScore) {
      best = intent
      bestScore = s
    }
  }

  if (!best) return { text: fallback.answer, followUps: fallback.followUps }
  return { text: best.answer, followUps: best.followUps ?? [] }
}
