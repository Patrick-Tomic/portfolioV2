// Run with: npm test
//
// Realistic emails and what the auto-reply should contain. `topics` are the chatbot answer kinds used
// (in order); `mentions` / `avoids` are words that must / must not appear in the reply.

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { composeReply, skipReason, stripQuoted, firstName, type Settings, type Incoming } from './src/agent'

const settings: Settings = {
  GREETING: 'Hi {name},',
  INTRO: 'INTRO',
  OUTRO: 'OUTRO',
  SIGNATURE: 'SIGNATURE',
  FALLBACK: 'FALLBACK',
  BUY_NEXT_STEPS: 'BUY_NEXT_STEPS',
  FRUSTRATED: 'FRUSTRATED',
  SITE_URL: 'https://atomicconsulting.org',
  MAX_TOPICS_PER_REPLY: 3,
}

interface Case {
  name: string
  from?: string
  subject: string
  body: string
  topics: string[]
  hotLead?: boolean
  mentions?: string[]
  avoids?: string[]
}

const cases: Case[] = [
  {
    name: 'bakery asking price and timeline',
    from: 'Jane Smith <jane@example.com>',
    subject: 'Website for my bakery',
    body: 'Hi, I own a small bakery and need a website with about 4 pages. How much would that cost and how long does it take? Thanks!',
    topics: ['pages', 'timeline'],
    hotLead: true,
    mentions: ['Hi Jane,', '4 pages would be $300', 'single page site is the quickest', 'INTRO', 'OUTRO', 'SIGNATURE'],
    avoids: ['Want an exact quote', 'below', 'Pricing is transparent'], // no general price list after the exact price
  },
  {
    name: 'ready to buy comes first, with next steps',
    subject: 'Landing page',
    body: "I'd like a landing page for my cleaning business. I'm ready to get started, how do I pay?",
    topics: ['buy', 'spa'],
    hotLead: true,
    mentions: ["let's get your landing page (Single Page App) going!", 'BUY_NEXT_STEPS'],
    avoids: ['Nothing is charged here in the chat', 'confirm below'],
  },
  {
    name: 'marketing with named platforms: only those platforms',
    subject: 'Marketing help',
    body: 'We need more customers. Can you handle our Google and Facebook? I also need a website.',
    topics: ['marketing-social', 'website'],
    hotLead: true,
    mentions: ['Google Business Profile and Facebook page', 'For websites there are two options'],
    avoids: ['Yelp', 'Instagram', 'TikTok', 'are you looking for more customers through'],
  },
  {
    name: 'marketing without detail: one narrowing question',
    subject: 'Question',
    body: 'My business needs marketing.',
    topics: ['marketing-ask'],
    mentions: ['social media, Google, ads, or something else'],
  },
  {
    name: 'already has an old website',
    subject: 'Our website',
    body: "Hello! We already have a website but it's really old and slow.",
    topics: ['have-redesign'],
    mentions: ['rebuild', 'free scoping call'],
    avoids: ['$150'],
  },
  {
    name: 'does not want payments',
    subject: 'Simple site',
    body: "I need a simple landing page. I don't need a payment system or anything like that.",
    topics: ['spa', 'no-payments'],
    mentions: ['$150', 'Stripe checkout only comes in for online stores'],
  },
  {
    name: 'complaint: apology, no sales pitch',
    subject: 'Re: your reply',
    body: "This is useless, I asked a simple question and got nonsense.",
    topics: ['frustrated'],
    mentions: ['FRUSTRATED'],
    avoids: ['INTRO', '$'],
  },
  {
    name: 'nothing to answer: fallback',
    subject: 'Hello',
    body: 'Just wanted to say hi and that I loved meeting you at the event last week!',
    topics: [],
    mentions: ['FALLBACK'],
    avoids: ['INTRO'],
  },
  {
    name: 'mobile app: honest no',
    subject: 'App',
    body: 'Can you build an iPhone app for my gym?',
    topics: ['mobile'],
    mentions: ["doesn't build native mobile apps"],
  },
  {
    name: 'quoted earlier messages and signature are ignored',
    subject: 'Re: Website quote',
    body: 'Sounds good, what does the deposit cover?\n\nOn Mon, Oct 6, 2026 at 9:00 AM Patrick wrote:\n> We build AI agents and online stores\n> with Stripe payments.',
    topics: ['deposit'], // not the AI agents / online stores from the quoted message
    avoids: ['Stripe'],
  },
  {
    name: 'industries question links to projects',
    subject: 'Quick question',
    body: 'What kind of businesses do you usually work with?',
    topics: ['industries'],
    mentions: ['home services', 'Projects section'],
  },
  {
    name: 'links are written out in full',
    subject: 'Examples?',
    body: 'Can I see some of your past work?',
    topics: ['projects'],
    mentions: ['Helpful links:', 'https://landmarkenterprises.net/', 'Projects: https://atomicconsulting.org/#work'],
    avoids: ['chat:lead'],
  },
  {
    name: 'repeated questions are answered once',
    subject: 'Pricing',
    body: 'How much do you charge? What are your prices?',
    topics: ['pricing'],
    avoids: ['just above'],
  },
]

for (const c of cases) {
  test(`email: ${c.name}`, () => {
    const result = composeReply({ from: c.from ?? 'Sam <sam@example.com>', subject: c.subject, body: c.body }, settings)
    assert.deepEqual(result.topics, c.topics, result.reply)
    if (c.hotLead !== undefined) assert.equal(result.hotLead, c.hotLead, 'hot lead')
    for (const word of c.mentions ?? []) assert.ok(result.reply.includes(word), `should mention "${word}":\n${result.reply}`)
    for (const word of c.avoids ?? []) assert.ok(!result.reply.includes(word), `should not mention "${word}":\n${result.reply}`)
  })
}

// ── Helpers ──

test('first names', () => {
  assert.equal(firstName('"bob lee" <bob@x.com>'), 'Bob')
  assert.equal(firstName('JANE DOE <j@x.com>'), 'Jane')
  assert.equal(firstName('carla@x.com'), 'there')
})

test('quoted text and signatures are stripped', () => {
  assert.equal(stripQuoted('Hi\n> old\nThanks').trim(), 'Hi\nThanks')
  assert.equal(stripQuoted('Hi\n--\nJane Smith\n555-0100').trim(), 'Hi')
  assert.equal(stripQuoted('Hi\nSent from my iPhone').trim(), 'Hi')
})

const mail = (over: Partial<Incoming>): Incoming => ({
  sender: 'jane@example.com', subject: 'Hello', headers: {}, me: ['patrick@x.com'], threadSenders: ['jane@example.com'],
  repliedRecently: false, ...over,
})
const rules = { SKIP_SENDERS: ['noreply', 'newsletter'], SKIP_SUBJECTS: ['out of office'], REPLY_ONCE_PER_HOURS: 24 }

test('who gets skipped', () => {
  assert.equal(skipReason(mail({}), rules), '')
  assert.equal(skipReason(mail({ sender: 'patrick@x.com' }), rules), 'sent by you')
  assert.equal(skipReason(mail({ threadSenders: ['jane@example.com', 'patrick@x.com'] }), rules), 'you are already in this conversation')
  assert.equal(skipReason(mail({ sender: 'noreply@shop.com' }), rules), 'automated sender')
  assert.equal(skipReason(mail({ subject: 'Out of Office: back Monday' }), rules), 'automated subject')
  assert.equal(skipReason(mail({ headers: { 'List-Unsubscribe': '<mailto:x>' } }), rules), 'mailing list')
  assert.equal(skipReason(mail({ headers: { Precedence: 'bulk' } }), rules), 'bulk mail')
  assert.equal(skipReason(mail({ headers: { 'Auto-Submitted': 'auto-replied' } }), rules), 'automatic email')
  assert.equal(skipReason(mail({ repliedRecently: true }), rules), 'already auto-replied in the last 24h')
})
