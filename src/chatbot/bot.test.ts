// Run with: npm test
//
// Each case is a realistic visitor message and the kind of answer it should get. `kind` is the intent
// id (e.g. 'website', 'pricing'), a narrowing question ('marketing-ask', 'have-website-ask', …) or
// branch ('marketing-ads', 'have-traffic', …), or one of: 'yes', 'no', 'help', 'quote-yes', 'quote-no',
// 'offer-no', 'goodbye', 'clarify', 'pages'. `before` lists earlier messages in the same conversation.
// `noPrice` checks the answer doesn't quote a price; `mentions` / `avoids` check words that must / must not
// appear in the answer; `links` checks buttons it offers ('chat:lead' = message Patrick, '#contact' = form).

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { getReply, type BotContext } from './bot'

interface Case {
  say: string
  kind: string
  before?: string[]
  lead?: boolean // should start the in-chat quote request
  noPrice?: boolean
  mentions?: string[]
  avoids?: string[]
  links?: string[]
}

// The real conversation that went wrong, step by step
const convo = ['yes I need help', 'my business needs marketing', 'I have a page', "it's a facebook page", 'keep it active']

// The second real conversation (its failing messages, in order)
const convo2 = [
  'I need a landing page',
  'what about buying something right now',
  'like I want to buy something right now',
  'google and facebook. I need a website too',
  'I dont need a paymeny method',
  'what business do you work with',
  'do you have a specific field',
  'this bot is useless',
]

const cases: Case[] = [
  // ── Asking for help, however it's phrased ──
  { say: 'yes I need help', kind: 'help' },
  { say: 'help', kind: 'help' },
  { say: 'HELP!!!', kind: 'help' },
  { say: 'i need some help with something', kind: 'help' },
  { say: 'yeah can u help me', kind: 'help' },
  { say: 'can you help me???', kind: 'help' },
  { say: 'hlep', kind: 'help' },
  { say: 'I have a quick question', kind: 'help' },

  // ── Yes / no with nothing else to go on ──
  { say: 'ya pls', kind: 'yes' },
  { say: 'YES', kind: 'yes' },
  { say: 'yesss', kind: 'yes' },
  { say: '   ok   ', kind: 'yes' },
  { say: 'no', kind: 'no' },
  { say: 'nah im good', kind: 'no' },
  { say: 'nope.', kind: 'no' },

  // ── A real topic beats a plain yes/no ("more than one signal") ──
  { say: 'yes I need a website', kind: 'website' },
  { say: 'no, I need an AI agent', kind: 'ai' },
  { say: 'yes i need help with my website', kind: 'website' },
  { say: 'yeah how much does it cost', kind: 'pricing' },

  // ── Typos, shorthand and punctuation ──
  { say: 'how much is a webiste?', kind: 'website' },
  { say: 'wat r ur prices??', kind: 'pricing' },
  { say: 'can u build me an online store', kind: 'ecommerce' },
  { say: 'do u do social media???', kind: 'marketing-social', noPrice: true },
  { say: 'thx!!', kind: 'thanks' },
  { say: "what if I don't like the design", kind: 'process' }, // "don't" must not read as "I do" (yes)

  // ── Answers to the bot's "Want an exact quote?" (offered after two pricing questions) ──
  { before: ['I need a website', '6'], say: 'yes', kind: 'quote-yes', lead: true },
  { before: ['I need a website', '6'], say: 'yeah please', kind: 'quote-yes', lead: true },
  { before: ['I need a website', '6'], say: 'sure thing!', kind: 'quote-yes', lead: true },
  { before: ['I need a website', '6'], say: 'yes I need help', kind: 'quote-yes', lead: true },
  { before: ['I need a website', '6'], say: 'no thanks', kind: 'quote-no' },
  { before: ['I need a website', '6'], say: 'maybe later', kind: 'quote-no' },
  { before: ['I need a website', '6'], say: 'what about 8 pages', kind: 'pages' },

  // ── Answers to "Anything else I can help with?" ──
  { before: ['thanks'], say: 'no', kind: 'goodbye' },
  { before: ['thanks'], say: 'nah thats all', kind: 'goodbye' },
  { before: ['thanks'], say: 'yes', kind: 'yes' },
  { before: ['thanks'], say: 'actually yes, how much for 5 pages', kind: 'pages' },
  { before: ['I need a website', '6', 'no thanks'], say: 'no', kind: 'goodbye' },

  // ── The real conversation: marketing narrows first, "I have a page" isn't a page quote ──
  { before: convo.slice(0, 1), say: convo[1], kind: 'marketing-ask', noPrice: true },
  { before: convo.slice(0, 2), say: convo[2], kind: 'have-unclear-ask', noPrice: true },
  { before: convo.slice(0, 3), say: convo[3], kind: 'have-social-ask', noPrice: true },
  { before: convo.slice(0, 4), say: convo[4], kind: 'marketing-social', noPrice: true },
  { before: convo, say: 'yes', kind: 'marketing' }, // they asked, so now show the price

  // ── Marketing: one question, then an honest recommendation ──
  { say: 'we need more customers', kind: 'marketing-ask', noPrice: true },
  { say: 'help with social media', kind: 'marketing-social', noPrice: true },
  { say: 'can you manage my google business profile', kind: 'marketing-google', noPrice: true },
  { say: 'i want to advertise my business', kind: 'marketing-ads', noPrice: true },
  { before: ['my business needs marketing'], say: 'Paid ads', kind: 'marketing-ads', noPrice: true },
  { before: ['my business needs marketing'], say: 'google and yelp', kind: 'marketing-google', noPrice: true },
  { before: ['my business needs marketing'], say: 'instagram mostly', kind: 'marketing-social', noPrice: true },
  { before: ['my business needs marketing'], say: 'something else', kind: 'marketing-other', noPrice: true },
  { before: ['my business needs marketing'], say: 'hmm', kind: 'marketing-ask', noPrice: true }, // asks again
  { before: ['help with social media'], say: 'how much is it?', kind: 'marketing' },
  { before: ['help with social media'], say: 'no', kind: 'offer-no' },
  { say: 'how much is social media management', kind: 'marketing' }, // asked for the price directly

  // ── "I have X" is not "I need X" ──
  { say: 'I already have a website but nobody visits it', kind: 'have-traffic', noPrice: true },
  { say: 'got a facebook page', kind: 'have-social-ask', noPrice: true },
  { say: "I have a site but it's old", kind: 'have-redesign', noPrice: true },
  { say: 'I already have a website', kind: 'have-website-ask', noPrice: true },
  { say: 'I have a site', kind: 'have-website-ask', noPrice: true },
  { say: 'we have an instagram', kind: 'have-social-ask', noPrice: true },
  { say: 'I have a Facebook page and want more customers from it', kind: 'marketing-social', noPrice: true },
  { before: ['I already have a website'], say: 'Get more visitors', kind: 'have-traffic', noPrice: true },
  { before: ['I already have a website'], say: 'Answer customers automatically', kind: 'have-ai', noPrice: true },
  { before: ['I have a page'], say: "It's a website", kind: 'have-website-ask', noPrice: true },
  { say: 'do you have a facebook page?', kind: 'socials' }, // asking about Patrick's page, not theirs
  { say: 'I have a question', kind: 'help' },
  { say: 'I own a bakery', kind: 'industry', noPrice: true },
  { say: 'I need a website', kind: 'website' }, // asked for it, so prices are fine

  // ── The second real conversation ──
  { before: convo2.slice(0, 1), say: convo2[1], kind: 'buy', lead: true, mentions: ['landing page'], avoids: ['Marines'] },
  { before: convo2.slice(0, 2), say: convo2[2], kind: 'buy-again', lead: true }, // same intent, not the same text
  { before: convo2.slice(0, 3), say: convo2[3], kind: 'marketing-social+website', mentions: ['Google', 'Facebook', 'website'], avoids: ['Yelp', 'Instagram', 'TikTok'] },
  { before: convo2.slice(0, 4), say: convo2[4], kind: 'no-payments', mentions: ['landing page', 'Stripe', 'online stores'], avoids: ['$400', 'deposit'] },
  { before: convo2.slice(0, 5), say: convo2[5], kind: 'industries', mentions: ['small businesses', 'home services', 'fitness', 'job platform'] },
  { before: convo2.slice(0, 6), say: convo2[6], kind: 'industries-again' },
  { before: convo2.slice(0, 7), say: convo2[7], kind: 'frustrated', links: ['chat:lead', '#contact'] },

  // ── Buying intent outranks everything ──
  { say: 'i want to buy', kind: 'buy', lead: true },
  { say: 'how do i get started', kind: 'buy', lead: true },
  { say: 'ready to purchase', kind: 'buy', lead: true },
  { say: 'can i pay now', kind: 'buy', lead: true, mentions: ['Nothing is charged'] },
  { say: 'sign me up', kind: 'buy', lead: true },
  { say: "let's do it", kind: 'buy', lead: true },
  { say: 'I want to hire you', kind: 'buy', lead: true },
  { say: 'i wanna place an order', kind: 'buy', lead: true },
  { before: ['help with social media'], say: 'ok how do i pay', kind: 'buy', lead: true, mentions: ['social media'] },
  { before: ['my business needs marketing'], say: 'i want to purchase', kind: 'buy', lead: true }, // beats the open question
  { say: "i dont want to buy anything yet", kind: 'buy-not-yet' },
  { say: 'why should I hire you', kind: 'value' }, // a question, not a purchase
  { say: 'I need a place for members to sign up', kind: 'fullstack' }, // a feature, not a purchase

  // ── Common words can't pick a topic alone ──
  { say: 'what about the price', kind: 'pricing' },
  { say: 'tell me about yourself', kind: 'about' },
  { say: 'can I see your work', kind: 'projects' },

  // ── Answer everything named, nothing else ──
  { say: 'facebook and instagram', kind: 'marketing-social', mentions: ['Facebook', 'Instagram'], avoids: ['Yelp', 'TikTok', 'Google'] },
  { say: 'can you do my google and yelp', kind: 'marketing-google', mentions: ['Google', 'Yelp'], avoids: ['Facebook', 'Instagram'] },
  { say: 'I need an AI chatbot and a website', kind: 'ai+website' },

  // ── Negations ──
  { say: 'i dont want payments on my site', kind: 'no-payments', mentions: ['Stripe'] },
  { say: 'we do not need a payment system', kind: 'no-payments' },
  { say: 'no, I need an AI agent', kind: 'ai' }, // "no," answering, not negating

  // ── Industries ──
  { say: 'what industries do you work with', kind: 'industries' },
  { say: 'do you specialize in anything', kind: 'industries' },
  { say: 'who are your clients', kind: 'industries' },
  { before: ['what industries do you work with'], say: 'yes', kind: 'projects' }, // "Want to see examples?" → yes

  // ── Frustration ──
  { say: 'this bot is useless', kind: 'frustrated', links: ['chat:lead', '#contact'] },
  { say: 'you are not understanding me', kind: 'frustrated' },
  { say: 'ugh this is pointless', kind: 'frustrated' },
  { before: ['asdfgh'], say: 'qwerty zxcv', kind: 'fallback', links: ['chat:lead', '#contact'] }, // second miss in a row

  // ── Don't repeat ──
  { before: ['what are your prices'], say: 'what are your prices', kind: 'pricing-again', avoids: ['$150 flat'] },

  // ── Still unsure: ask, don't fail ──
  { say: 'asdfgh', kind: 'clarify' },
  { say: 'yes no', kind: 'clarify' },
]

for (const c of cases) {
  const label = [...(c.before ?? []).map(b => `"${b}"`), `"${c.say}"`].join(' → ')
  test(`${label} ⇒ ${c.kind}`, () => {
    const context: BotContext = {}
    for (const earlier of c.before ?? []) getReply(earlier, context)
    const reply = getReply(c.say, context)
    assert.equal(reply.kind, c.kind, `got "${reply.kind}": ${reply.text.slice(0, 80)}`)
    if (c.noPrice) assert.doesNotMatch(reply.text, /\$\d/, 'should not quote a price yet')
    for (const word of c.mentions ?? []) assert.ok(reply.text.includes(word), `should mention "${word}": ${reply.text}`)
    for (const word of c.avoids ?? []) assert.ok(!reply.text.includes(word), `should not mention "${word}": ${reply.text}`)
    for (const href of c.links ?? []) assert.ok(reply.actions.some(a => a.href === href), `should link to ${href}`)
    if (c.lead !== undefined) assert.equal(Boolean(reply.startLead), c.lead, 'should start the quote request')
  })
}
