// How the bot reads casual messages. Edit these lists to teach it new ways of saying things.
//
// SHORTHAND: rewritten before anything else, so "ya pls u" is read as "yes please you".
//            Keys and values are whole words (lowercase, no punctuation).
// SIGNALS:   ways of saying yes, no, or "I need help". A message matches if it CONTAINS one of these
//            anywhere ("yeah can you help me" has both yes and help). Multi-word phrases are checked
//            first, so "no thanks" counts as no, and "i am ok" (from "I'm ok") doesn't also count as yes.

export const SHORTHAND: Record<string, string> = {
  // yes
  ya: 'yes', yah: 'yes', yea: 'yes', yeah: 'yes', yep: 'yes', yup: 'yes', ye: 'yes', yas: 'yes', ys: 'yes', yse: 'yes', yess: 'yes',
  sur: 'sure', shure: 'sure',
  okay: 'ok', okey: 'ok', okie: 'ok', okk: 'ok', k: 'ok', kk: 'ok',
  // no
  nah: 'no', nope: 'no', naw: 'no', nop: 'no', noo: 'no', nahh: 'no',
  // please / thanks
  pls: 'please', plz: 'please', pleas: 'please', plss: 'please',
  thx: 'thanks', thnx: 'thanks', ty: 'thanks', tysm: 'thanks', thank: 'thanks',
  // help
  hlep: 'help', hepl: 'help', halp: 'help', hep: 'help', helpp: 'help',
  // texting shorthand and contractions (apostrophes are already removed: "I'm" → "im")
  u: 'you', ur: 'your', r: 'are', wat: 'what', wut: 'what', whats: 'what is', abt: 'about',
  im: 'i am', ive: 'i have', dont: 'do not', cant: 'can not', wont: 'will not', isnt: 'is not',
  wanna: 'want to', gonna: 'going to', gotta: 'got to', idk: 'i do not know', rn: 'right now',
  // common misspellings of short words (longer words are already allowed one typo)
  pirce: 'price', prcie: 'price', prise: 'price', cots: 'cost', websit: 'website',
  purchse: 'purchase', perchase: 'purchase', purches: 'purchase', buyin: 'buying', fb: 'facebook',
}

export const SIGNALS = {
  yes: [
    'yes please', 'of course', 'sounds good', 'lets do it', 'go ahead', 'why not', 'for sure', 'sure thing',
    'that would be great', 'i would like that', 'i would love that', 'lets go', 'i am in',
    'yes', 'sure', 'ok', 'please', 'absolutely', 'definitely', 'certainly', 'alright', 'bet', 'yessir',
  ],
  no: [
    'no thanks', 'not really', 'not now', 'not right now', 'not yet', 'maybe later', 'no need', 'never mind',
    'i am good', 'i am fine', 'i am ok', 'all good', 'that is all', 'thats all', 'just browsing', 'just looking',
    'no', 'nothing', 'nevermind', 'pass',
  ],
  help: [
    'can you help', 'need some', 'need something', 'have a question', 'got a question', 'quick question',
    'help', 'assist', 'assistance', 'question',
  ],
}

// "I have X" vs "I need X". A message counts as already having something when "I/we" (or the start of
// the message) is followed by one of HAVE_VERBS and, within the next few words, one of these things.
// WEBSITE things lead to the website questions, SOCIAL things to the social page questions, and
// UNCLEAR things ("a page") ask which one they mean.
export const HAVE_VERBS = ['have', 'got', 'own', 'run', 'built', 'made', 'already have', 'currently have', 'do have']

export const HAVE_THINGS = {
  website: ['website', 'site', 'webpage', 'web site', 'online store', 'store', 'shop'],
  social: ['facebook', 'instagram', 'insta', 'ig', 'tiktok', 'tik tok', 'yelp', 'google business', 'google page', 'google listing', 'social media', 'socials', 'profile', 'listing'],
  unclear: ['page', 'pages'],
}

// Everyday words that are too common to pick a topic on their own. As keywords they only count when the
// same topic also matched something more specific ("what ABOUT buying" must not open the bio).
export const COMMON_WORDS = [
  'about', 'who', 'why', 'when', 'where', 'what', 'how', 'see', 'work', 'past', 'previous', 'built', 'start',
  'talk', 'call', 'book', 'email', 'meet', 'live', 'later', 'play', 'game', 'offer', 'options', 'fast', 'days',
  'week', 'hour', 'rate', 'pay', 'support', 'local', 'state', 'country', 'fun', 'social',
  'profile', 'tools', 'next', 'auto', 'pet', 'band', 'coach', 'artist', 'years', 'data', 'system', 'made',
]

// Words that flip the meaning of what follows, up to the end of the clause: "I DON'T need a payment method".
// ("don't" is already expanded to "do not".) Phrases that contain one of these, like "not sure", are left alone.
export const NEGATORS = ['not', 'no', 'without', 'never', 'none', 'nor']

// Platforms the visitor might name, and how to refer to them, so answers mention only what they asked about
export const PLATFORMS: Record<string, string> = {
  'google business profile': 'Google Business Profile', 'google business': 'Google Business Profile', 'google my business': 'Google Business Profile',
  google: 'Google Business Profile', facebook: 'Facebook page', instagram: 'Instagram', insta: 'Instagram', ig: 'Instagram',
  tiktok: 'TikTok', 'tik tok': 'TikTok', yelp: 'Yelp page', linkedin: 'LinkedIn page',
}
