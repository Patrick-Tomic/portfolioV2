// Everything the bot knows. Keep in sync with the content in App.vue.
//
// keywords:  strong matches. Single words match whole words, ignoring endings ("update" also matches
//            "updates", "updating"); phrases ("full stack") match anywhere and count double.
// related:   loose word associations, worth half as much ("missed calls" → AI agents). When an answer
//            is picked from these alone, the bot says what it thinks you're asking about.
// topic:     how the bot names this topic when it's guessing ("Sounds like you're asking about …").
// weight:    multiplier for broad intents, so a specific topic beats them on a tie.
// service:   a service topic. The bot remembers the last one, so "how much is it?" knows what "it" is.
// remember:  service to remember instead (e.g. talking about your bakery → websites).
// followUps: suggested questions shown as buttons after the answer.
// actions:   links shown under the answer: "#section" scrolls the page, "chat:lead" starts the in-chat
//            quote request, anything else opens the URL.
// startsLead: after this answer, the chat asks for the visitor's details and emails them to Patrick.
// asks:      the answer ends with a yes/no question ('more' = "anything else?"), so the next "yes"
//            or "no thanks" is read as the reply to it.
// narrow:    instead of answering straight away, ask one narrowing question (see `narrows` below).
//            The answer is skipped when the visitor asks about price, or already said which branch they mean.
// yields:    a background detail ("my business…") that gives way to any specific topic in the same message.
// negated:   the answer when the visitor says they DON'T want this ("I don't need payments"), with a
//            `kind` name so topics that share an answer report the same kind.
// offer:     end with a yes/no offer; "yes" shows another intent's answer (e.g. examples after industries).

export interface Action {
  label: string
  href: string
}

export interface Intent {
  id: string
  keywords: string[]
  related?: string[]
  topic?: string
  answer: string
  weight?: number
  service?: boolean
  remember?: string
  followUps?: string[]
  actions?: Action[]
  startsLead?: boolean
  asks?: 'quote' | 'more'
  narrow?: string
  yields?: boolean
  negated?: { kind: string; answer: string }
  offer?: { ask: string; intent: string }
}

// One possible answer to a narrowing question
export interface Branch {
  kind: string // reported as the reply kind, e.g. 'marketing-ads'
  keywords: string[]
  answer?: string
  then?: string // ask this narrowing question next instead of answering
  offer?: string // end with "Want to know what it costs?"; yes shows this intent's (priced) answer
  remember?: string // service to remember, so "how much is it?" works afterwards
  tailor?: boolean // when the visitor named platforms ("google and facebook"), mention only those
  followUps?: string[]
  actions?: Action[]
}

// A short question that narrows down what the visitor means. {thing} is filled in when known.
export interface Narrow {
  question: string
  chips: string[]
  branches: Branch[]
}

const CONTACT: Action = { label: 'Go to contact form', href: '#contact' }
const PRICING: Action = { label: 'See pricing', href: '#pricing' }
const LEAD: Action = { label: 'Message Patrick here', href: 'chat:lead' }

const NO_PAYMENTS = {
  kind: 'no-payments',
  answer:
    "Got it, no payments needed. A landing page or business website doesn't need payment processing at all: it shows what you offer and how to reach you. Stripe checkout only comes in for online stores.",
}

// ── Checked before every other topic (see bot.ts) ──

// Ready to buy: the reply is built in bot.ts so it can confirm the service they were discussing
export const buyIntent: Intent = {
  id: 'buy',
  keywords: [
    // "hire", "sign up" and "pay" alone are too broad ("why should I hire you", "members can sign up",
    // "can I pay in installments"), so only these specific forms count
    'buy', 'buying', 'purchase', 'purchasing', 'order', 'ordering', 'get started', 'getting started',
    'want to hire', 'ready to hire', 'like to hire', 'can i hire', 'how do i hire', 'hire you now',
    'sign me up', 'where do i sign up', 'how do i sign up', 'ready to go', 'ready to start', 'ready to buy',
    'ready to purchase', 'ready to order', 'i am ready', 'lets do it', 'lets do this', 'how do i pay', 'how can i pay',
    'where do i pay', 'pay now', 'pay you', 'make a payment', 'checkout', 'place an order', 'start a project',
    'start now', 'move forward', 'go ahead with',
    'book it', 'i will take it', 'want to start', 'how do i start', 'how do we start', 'next step', 'next steps',
    'kick off', 'get going',
  ],
  answer: '',
  negated: { kind: 'buy-not-yet', answer: "No rush at all! Take your time looking around, and I'm here whenever you have questions." },
}

export const frustratedIntent: Intent = {
  id: 'frustrated',
  keywords: [
    'useless', 'pointless', 'unhelpful', 'not helpful', 'not helping', 'you are not helping', 'not understanding',
    'do not understand', 'dont get it', 'not listening', 'are you even listening', 'waste of time', 'wtf',
    'already told you', 'i just said', 'i said that', 'you suck', 'this sucks', 'stupid bot', 'dumb bot',
    'you are stupid', 'you are dumb', 'you are useless', 'idiot', 'frustrating', 'frustrated', 'annoying',
    'garbage', 'trash', 'makes no sense', 'not what i asked', 'wrong answer', 'this bot',
  ],
  answer:
    "Sorry about that, I'm clearly not getting it. Let me connect you with Patrick directly: he can answer anything, and he replies within 24 hours.",
  actions: [LEAD, CONTACT],
}

export const intents: Intent[] = [
  // ── Services ──
  {
    id: 'spa',
    service: true,
    topic: 'single page sites',
    keywords: ['single page', 'one page', 'spa', 'landing page', 'landing', 'portfolio site', 'showcase'],
    related: ['simple', 'basic', 'small site', 'personal', 'resume', 'event', 'wedding', 'one product', 'scroll'],
    answer:
      'A Single Page App is $150 flat. You get a fully custom design and layout, mobile responsiveness, fast load times and a contact/call-to-action section. Great for portfolios, landing pages and product showcases.',
    followUps: ['What is the difference between single page and multi-page?', 'Can I see examples?'],
    actions: [PRICING],
  },
  {
    id: 'mpa',
    service: true,
    topic: 'multi-page websites',
    keywords: ['multi page', 'multipage', 'multiple pages', 'pages', 'mpa', 'business website'],
    related: ['navigation', 'menu', 'about page', 'services page', 'contact page', 'several', 'company', 'brand', 'blog'],
    answer:
      "A Multi-Page Website is $150 + $50 per page. For example, a 5-page site (Home, About, Services, Portfolio, Contact) is $350. It includes full navigation, SEO-optimised pages and brand-consistent design, and it's easy to add pages later.",
    followUps: ['How much for 8 pages?', 'Can I see examples?'],
    actions: [PRICING],
  },
  {
    id: 'website',
    service: true,
    topic: 'websites',
    keywords: ['website', 'site', 'web site', 'webpage', 'web page', 'web design', 'web designer'],
    related: ['online presence', 'web presence', 'presence', 'homepage', 'home page', 'online', 'internet', 'found online', 'new site'],
    answer:
      "For websites there are two options:\n• Single Page App: $150 flat\n• Multi-Page Website: $150 + $50 per page (a 5-page site is $350)\nHow many pages are you thinking? Tell me and I'll work out the price.",
    weight: 0.75,
    followUps: ['5 pages', 'What is the difference between single page and multi-page?'],
    actions: [PRICING],
  },
  {
    id: 'fullstack',
    service: true,
    topic: 'full stack apps',
    keywords: ['full stack', 'fullstack', 'web app', 'web application', 'backend', 'database', 'login', 'dashboard', 'api', 'platform', 'user account'],
    related: ['members', 'membership', 'accounts', 'sign up', 'signup', 'users', 'portal', 'booking system', 'inventory', 'admin', 'data', 'saas', 'software', 'custom software', 'system'],
    answer:
      'Full Stack Apps are quoted after a free scoping call: $30/hr with a $400 deposit to start, and the deposit goes toward the total. That covers frontend, backend, database and API: user accounts, dashboards and real business logic.',
    followUps: ['How does the deposit work?', 'How does the process work?'],
    actions: [CONTACT],
  },
  {
    id: 'mobile',
    service: true,
    topic: 'mobile apps',
    keywords: ['mobile app', 'mobile', 'ios', 'android', 'iphone', 'phone app', 'app store', 'cross platform'],
    related: ['tablet', 'ipad', 'download', 'native'],
    answer:
      "Patrick doesn't build native mobile apps. Every website and web app he builds is fully mobile responsive, though, so it works great on phones. If you need app-like features such as accounts and dashboards, a Full Stack App may be the right fit.",
    followUps: ['Tell me about full stack apps', 'What services do you offer?'],
  },
  {
    id: 'ai',
    service: true,
    topic: 'AI agents',
    keywords: ['ai', 'agent', 'chatbot', 'chat bot', 'automation', 'automate', 'voice', 'email agent', 'call handler', 'lead', 'artificial intelligence', 'receptionist', 'after hours'],
    related: ['phone', 'calls', 'missed calls', 'answer calls', 'voicemail', 'emails', 'inbox', 'reply', 'respond', 'overnight', 'weekend', '24 7', 'appointments', 'booking', 'schedule', 'calendar', 'crm', 'faq', 'questions', 'assistant', 'chatgpt', 'gpt', 'smart', 'busy', 'overwhelmed'],
    answer:
      'Custom AI voice, email and chat agents handle calls, emails and chats automatically, so you stop losing leads after hours. Each is a one-time build, plus $500/month maintenance:\n• Starter, $350: a single-purpose agent such as an FAQ chatbot, auto-reply email agent or basic call handler.\n• Standard, $750 (most popular): custom-branded, with CRM/calendar integration, appointment booking and lead qualification.\n• Premium, $1,500+: multi-channel agents trained on your data, with memory and live escalation.',
    followUps: ['Which AI package is right for me?', 'How does the process work?'],
    actions: [PRICING],
  },
  {
    id: 'marketing',
    service: true,
    topic: 'social media & listings management',
    narrow: 'marketing',
    keywords: ['marketing', 'social media', 'google', 'tiktok', 'tik tok', 'facebook', 'instagram', 'insta', 'ig', 'google business', 'google business profile', 'google my business', 'google listing', 'yelp', 'listing', 'social profiles', 'more customers', 'more clients', 'get customers', 'find customers', 'more business', 'grow my business', 'advertise', 'advertising', 'ads', 'promote my business', 'get the word out', 'exposure'],
    related: ['followers', 'posts', 'posting', 'content', 'visibility', 'visible', 'promote', 'promotion', 'brand awareness', 'local listings', 'online reviews', 'stay active'],
    answer:
      'Social media & listings management starts at $50 per week for complete maintenance of your pages, including Facebook, Instagram, TikTok, Google Business Profile, Yelp and more. The exact rate depends on what your business needs, and it is always agreed with you up front.',
    followUps: ['Is there a monthly fee?', 'How do I get started?'],
    actions: [PRICING],
  },
  {
    id: 'ai-choice',
    keywords: ['ai package', 'difference between the ai', 'which ai', 'which agent', 'agent package', 'which tier', 'starter or standard', 'standard or premium', 'ai tier'],
    answer:
      "Rule of thumb: Starter if you need one simple job automated (like answering FAQs), Standard if it should book appointments or connect to your CRM, Premium if you want voice + email together or an agent trained on your own data. If you're between two, the free scoping call will settle it.",
    followUps: ['Is there a monthly fee?', 'How does the process work?'],
  },

  // ── Choosing & value ──
  {
    id: 'difference',
    keywords: ['difference between', 'vs', 'versus', 'single or multi', 'single page or multi', 'single page vs multi', 'compare'],
    weight: 1.5, // outranks the single-page and multi-page answers when both are named
    answer:
      'A Single Page App puts everything on one scrollable page, ideal for portfolios and landing pages ($150 flat). A Multi-Page Website has separate pages with navigation, best for service businesses and brands ($150 + $50 per page).',
    followUps: ['Which one should I choose?', 'How much for 5 pages?'],
  },
  {
    id: 'recommend',
    keywords: ['recommend', 'suggest', 'what do i need', 'which should i', 'which one should', 'what should i get', 'best option', 'best for me', 'right for me', 'not sure', 'help me choose', 'choose', 'which one', 'where do i start'],
    answer:
      "Quick guide:\n• Want a simple online presence or landing page → Single Page App\n• Have several services or pages (About, Services, Contact…) → Multi-Page Website\n• Need customer accounts, dashboards or a database → Full Stack App\n• Missing calls, emails or leads → an AI agent\n• Want your social media and Google/Yelp listings kept up to date → Marketing\nTell me a bit about your business and I'll point you in the right direction.",
    followUps: ['I own a small business', 'I need a landing page', 'I keep missing calls'],
  },
  {
    id: 'industry',
    remember: 'website',
    yields: true,
    topic: 'your business',
    keywords: ['small business', 'my business', 'own a', 'startup', 'start up', 'restaurant', 'bakery', 'cafe', 'coffee', 'food truck', 'salon', 'barber', 'nail', 'gym', 'fitness', 'trainer', 'plumber', 'plumbing', 'contractor', 'construction', 'roofing', 'hvac', 'electrician', 'landscaping', 'lawn', 'cleaning', 'real estate', 'realtor', 'lawyer', 'attorney', 'law firm', 'dentist', 'doctor', 'clinic', 'church', 'nonprofit', 'non profit', 'boutique', 'photographer', 'photography', 'coach', 'consultant', 'mechanic', 'auto', 'insurance', 'accounting', 'tutor', 'daycare', 'pet', 'groomer', 'band', 'artist', 'musician'],
    related: ['business', 'company', 'clients', 'customers', 'local'],
    answer:
      "Patrick works with small businesses and startups of every kind, in Tampa and nationwide. For most local businesses, a Multi-Page Website (Home, About, Services, Contact…) is a popular starting point, and an AI agent can answer calls and messages after hours so you don't lose leads. Want a price? Tell me how many pages you'd need.",
    followUps: ['5 pages', 'Tell me about the AI agents', 'Can I see examples?'],
  },
  {
    id: 'industries',
    topic: 'the kinds of businesses Patrick works with',
    keywords: [
      'what business', 'what businesses', 'what kind of business', 'what kinds of business', 'what type of business',
      'what types of business', 'which business', 'which businesses', 'what industries', 'industries', 'industry',
      'specific field', 'field', 'specialize', 'specialise', 'specialty', 'speciality', 'niche', 'sector',
      'who do you work with', 'who do you serve', 'what clients', 'kind of clients', 'type of clients', 'who are your clients',
    ],
    answer:
      'Patrick works with small businesses and startups of all kinds, in Tampa and nationwide. Past clients include a pressure washing company, a home services company, a fitness and nutrition brand, and a job platform.',
    offer: { ask: 'Want to see some examples of his work?', intent: 'projects' },
  },
  {
    id: 'value',
    topic: 'why to work with Patrick',
    keywords: ['worth it', 'is it worth', 'why you', 'why should i', 'why hire', 'why choose', 'what makes you different', 'stand out', 'trust', 'legit', 'reliable', 'value', 'benefit', 'good deal', 'quality'],
    related: ['worth', 'better', 'convince'],
    answer:
      "Here's what you get:\n• Flat, upfront pricing: websites from $150, AI agents from $350 (plus $500/month maintenance)\n• A fully custom design, not a template\n• Consistent communication, with regular drafts and revisions along the way\n• Hosting set up and your project launched for you\n• A free, no-obligation scoping call before you commit to anything\nHave a look at his past work to see the quality for yourself.",
    followUps: ['Can I see examples?', 'Why not just use Wix or Squarespace?'],
    actions: [{ label: 'See past work', href: '#work' }],
  },
  {
    id: 'compare',
    keywords: ['wix', 'squarespace', 'godaddy', 'wordpress', 'template', 'diy', 'do it myself', 'website builder', 'builder', 'agency', 'freelancer', 'fiverr', 'upwork', 'myself'],
    answer:
      "Website builders like Wix and Squarespace work if you want to do it yourself, but you're starting from a template and doing all the work. With Patrick you get a fully custom design built around your business, he handles the build, hosting setup and launch, and you can request revisions along the way. At $150 for a single page site, it's priced for small businesses.",
    followUps: ['Is it worth it?', 'Can I see examples?'],
  },
  {
    id: 'ecommerce',
    service: true,
    remember: 'fullstack',
    topic: 'online stores',
    keywords: ['ecommerce', 'e commerce', 'online store', 'store', 'sell online', 'shop', 'checkout', 'payments', 'payment processing', 'stripe', 'products', 'cart'],
    negated: NO_PAYMENTS,
    related: ['sell', 'selling', 'merch', 'inventory', 'orders'],
    answer:
      "Yes, Patrick has built e-commerce before: Xtreme Body Nutrition is a full stack store with Stripe payment authorization and a separate owner dashboard to add products, update pricing and run sales. Online stores are built as Full Stack Apps: $30/hr with a $400 deposit, quoted after a free scoping call.",
    followUps: ['How does the deposit work?', 'Can I see examples?'],
    actions: [{ label: 'See Xtreme Body Nutrition', href: 'https://xbn-front-end-pearl.vercel.app/' }],
  },
  {
    id: 'other',
    keywords: ['shopify', 'logo', 'branding', 'graphic design', 'redesign', 'revamp', 'existing website', 'existing site', 'current website', 'current site', 'fix my', 'rebuild'],
    answer:
      "That isn't one of the listed packages, but it's still worth asking. Describe what you need through the contact form or in the free scoping call, and Patrick will tell you straight whether he can help and what it would cost.",
    followUps: ['What services do you offer?'],
    actions: [LEAD, CONTACT],
  },

  // ── Money ──
  {
    id: 'deposit',
    topic: 'deposits and payment',
    keywords: ['deposit', 'payment', 'pay', 'hourly', 'per hour', 'hour', 'rate', 'invoice', 'billing'],
    negated: NO_PAYMENTS,
    related: ['upfront', 'up front', 'down payment', 'installments', 'money'],
    answer:
      'Website packages are fixed-price with no deposit required. Full stack projects are billed at $30/hr and start with a $400 deposit, which is applied to your total and secures your spot in the schedule. AI agents have a fixed build price plus $500/month maintenance, with no hidden fees.',
    followUps: ['Can I get a refund?', 'Is there a monthly fee?'],
  },
  {
    id: 'refund',
    keywords: ['refund', 'refundable', 'money back', 'cancel', 'cancellation', 'guarantee'],
    answer:
      "The $400 deposit for full stack projects is non-refundable. It's applied to your total and secures your spot in the schedule. Website packages are fixed-price with no deposit. For anything else about cancellations, it's best to ask Patrick directly.",
    followUps: ['How does the process work?'],
  },
  {
    id: 'costs',
    keywords: ['monthly', 'subscription', 'recurring', 'ongoing', 'hidden fee', 'hidden cost', 'extra cost', 'per month', 'yearly', 'annual', 'renewal'],
    answer:
      'Websites are a flat price with no subscriptions, and updates after launch are billed separately. There are two recurring costs: AI agents have a $500/month maintenance fee, and social media & listings management starts at $50/week if you choose it. If you have questions about ongoing hosting costs, Patrick will go over them on the free scoping call.',
    followUps: ['Do you handle hosting?', 'What about updates after launch?'],
  },
  {
    id: 'consultation',
    keywords: ['free consultation', 'free call', 'is it free', 'consultation free', 'cost anything', 'obligation'],
    answer:
      "Yes, the scoping consultation is free and there's no obligation. It's where Patrick learns what you need and gives you an accurate quote before you commit to anything.",
    followUps: ['How does the process work?'],
    actions: [LEAD, CONTACT],
  },

  // ── How it works ──
  {
    id: 'timeline',
    topic: 'timelines',
    keywords: ['how long', 'timeline', 'turnaround', 'deadline', 'when', 'fast', 'quickly', 'week', 'days', 'rush'],
    related: ['soon', 'asap', 'urgent', 'time', 'ready', 'launch date', 'wait'],
    answer:
      "It depends on the scope. A single page site is the quickest, a multi-page site takes a little longer, and full stack apps are scoped first so you get a realistic timeline before any work starts. You'll see progress the whole way, since Patrick sends drafts consistently. If you have a deadline, bring it up on the scoping call.",
    followUps: ['How does the process work?', 'Is the consultation free?'],
  },
  {
    id: 'process',
    topic: 'how the process works',
    keywords: ['process', 'steps', 'how does it work', 'how it works', 'what happens', 'after the call', 'draft', 'revision', 'changes', 'feedback', 'work together', 'how does the process work'],
    related: ['first step', 'communication', 'progress', 'check in', 'involved', 'approve', 'dont like', 'not happy'],
    answer:
      "Here's how it works:\n1. Free scoping call: talk through your goals, budget and timeline.\n2. Drafts & revisions: Patrick sends drafts consistently, and you can request revisions along the way.\n3. Launch & hosting: he sets up the hosting and launches your project.\n4. Updates after launch: available for an additional fee.",
    followUps: ['Do you handle hosting?', 'How long does it take?'],
  },
  {
    id: 'hosting',
    topic: 'hosting',
    keywords: ['hosting', 'host', 'launch', 'deploy', 'live', 'server', 'domain'],
    related: ['go live', 'up and running', 'url', 'web address', 'publish'],
    answer: "Yes, Patrick sets up the hosting and launches your project, so you don't have to deal with the technical side.",
    followUps: ['What about updates after launch?', 'Is there a monthly fee?'],
  },
  {
    id: 'updates',
    topic: 'updates after launch',
    keywords: ['update', 'maintenance', 'maintain', 'after launch', 'support'],
    related: ['later', 'edit', 'tweak', 'add a page', 'change later', 'fix', 'bug', 'broken'],
    answer: 'After launch, updates and changes are available for an additional fee. When you need something, just reach out and Patrick will take care of it.',
    followUps: ['Is there a monthly fee?'],
  },
  {
    id: 'seo',
    keywords: ['seo', 'search engine', 'rank', 'ranking', 'show up', 'search results', 'found on google', 'rank on google', 'google search'],
    answer:
      'Multi-page websites come with SEO-optimised pages, and every site is built for fast load times and mobile responsiveness, which search engines like Google reward.',
    followUps: ['How much is a multi-page site?'],
  },

  // ── Patrick & his work ──
  {
    id: 'availability',
    keywords: ['available', 'availability', 'taking clients', 'new clients', 'accepting', 'booked', 'capacity', 'open for'],
    answer:
      "The best way to check Patrick's current availability is the contact form. He replies within 24 hours.",
    actions: [LEAD, CONTACT],
  },
  {
    id: 'projects',
    topic: "Patrick's past work",
    keywords: ['project', 'portfolio', 'work', 'example', 'clients', 'previous', 'past', 'built', 'see', 'your work', 'past work', 'previous work', 'see your work', 'done before'],
    related: ['proof', 'sample', 'showcase', 'done before', 'made', 'references', 'reviews', 'testimonials'],
    answer:
      "Some of Patrick's work:\n• Landmark: a React single page app for a pressure washing company, with local SEO through Google\n• Prestigious Home Services: a Vue multi-page site where the owner can add projects themselves, plus an AI chatbot and email auto-replier\n• Xtreme Body Nutrition: a MERN e-commerce store with Stripe payments and a full owner dashboard\n• Growwr: a LinkedIn-style job platform built with Ruby on Rails, React, Express and MongoDB\nYou can also play his BattleShip game.",
    followUps: ['What technologies do you use?', 'How much is a website?'],
    actions: [
      { label: 'Landmark', href: 'https://landmarkenterprises.net/' },
      { label: 'Xtreme Body Nutrition', href: 'https://xbn-front-end-pearl.vercel.app/' },
      { label: 'All projects', href: '#work' },
    ],
  },
  {
    id: 'battleship',
    keywords: ['battleship', 'game', 'play'],
    answer:
      'BattleShip is a fully playable browser game: place your ships, take on the computer and sink the fleet before yours goes down.',
    actions: [{ label: 'Play BattleShip', href: '/battleship/' }],
  },
  {
    id: 'tech',
    topic: 'the tech stack',
    keywords: ['tech', 'stack', 'technologies', 'technology', 'language', 'framework', 'tools', 'react', 'vue', 'next', 'node', 'python', 'java', 'javascript', 'typescript', 'sql', 'mongo', 'postgres', 'aws', 's3', 'cloud', 'c#', 'html', 'css', 'express', 'jest', 'mongodb', 'postgresql', 'nextjs', 'nodejs', 'ruby', 'rails', 'mern', 'stripe'],
    related: ['coding', 'code', 'programming', 'built with', 'developer'],
    answer:
      'Patrick works with JavaScript, HTML, CSS, Vue, React, Next.js, Node.js, Express, Ruby on Rails, MongoDB, PostgreSQL, SQL, Python, Java, C#, Jest, AWS S3 and Stripe for payments.',
    followUps: ['Can I see examples?'],
  },
  {
    id: 'bot',
    keywords: ['who are you', 'what are you', 'are you a bot', 'are you real', 'real person', 'are you human', 'human', 'are you ai', 'robot', 'who am i talking to', 'talk to a person', 'talk to patrick', 'speak to patrick', 'talk to a human'],
    answer:
      "I'm an automated assistant, not Patrick Tomic himself, and I only know what's on this site. I can pass a message to Patrick for you, though, and he replies within 24 hours.",
    followUps: ['Tell me about the AI agents'],
    actions: [LEAD, CONTACT],
  },
  {
    id: 'hobbies',
    keywords: ['hobbies', 'hobby', 'play music', 'instrument', 'music', 'piano', 'guitar', 'poetry', 'poem', 'fun', 'free time', 'outside of'],
    answer: 'Outside of code, Patrick plays piano and guitar and writes poetry.',
    followUps: ['What services do you offer?'],
  },
  {
    id: 'socials',
    keywords: ['linkedin', 'github', 'socials', 'social', 'resume', 'profile', 'code samples', 'your facebook', 'facebook page', 'follow you'],
    answer: 'You can find Atomic Consulting & Solutions on Facebook, and Patrick on LinkedIn and GitHub.',
    followUps: ['Can I see examples?'],
    actions: [
      { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61595151606074' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/patrick-tomic-446502183/' },
      { label: 'GitHub', href: 'https://github.com/Patrick-Tomic' },
    ],
  },
  {
    id: 'about',
    topic: 'Patrick',
    keywords: ['who', 'about', 'patrick', 'yourself', 'background', 'experience', 'education', 'degree', 'school', 'usf', 'college', 'atomic', 'story', 'marines', 'why', 'years'],
    related: ['founder', 'owner', 'behind', 'qualifications', 'qualified', 'credentials'],
    answer:
      "Patrick Tomic is an independent software engineer in Tampa, FL. He was planning to join the Marines when he discovered programming, and he's been coding ever since, for eight years now. He graduated from the University of South Florida in 2024 with a B.S. in Information Science, is pursuing a Master's in Computer Science, and has a background in web development, marketing and customer service. He started Atomic Consulting & Solutions because helping small businesses is the work he finds most fulfilling.",
    followUps: ['What services do you offer?', 'Can I see examples?'],
    actions: [{ label: 'Read more', href: '#about' }],
  },
  {
    id: 'location',
    topic: 'location',
    keywords: ['where', 'located', 'location', 'based', 'tampa', 'florida', 'remote', 'local', 'country', 'nationwide', 'state', 'where are you'],
    related: ['near me', 'nearby', 'in person', 'zoom', 'usa', 'america', 'anywhere', 'out of state'],
    answer: 'Patrick is based in Tampa, Florida, and works with clients locally and nationwide. All project work can be done fully remotely.',
    followUps: ['How does the process work?'],
  },

  // ── Broad ──
  {
    id: 'services',
    keywords: ['services', 'offer', 'options', 'packages'],
    related: ['do you do', 'what can you', 'help with'],
    answer:
      'Patrick offers:\n• Single Page Apps: $150 flat\n• Multi-Page Websites: $150 + $50/page\n• Full Stack Apps: $30/hr, quoted after scoping\n• AI voice, email & chat agents: from $350, plus $500/month maintenance\n• Social media & listings management: starting at $50/week\nWhat are you looking to build?',
    weight: 0.75,
    followUps: ['Which one should I choose?', 'Tell me about the AI agents'],
    actions: [PRICING],
  },
  {
    id: 'pricing',
    topic: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'how much', 'expensive', 'cheap', 'budget', 'quote', 'charge', 'fee', 'afford'],
    related: ['spend', 'investment', 'dollars', 'rates', 'affordable', 'payment plan'],
    answer:
      'Pricing is transparent with no hidden fees:\n• Single Page App: $150 flat\n• Multi-Page Website: $150 + $50/page (5 pages = $350)\n• Full Stack App: $30/hr, $400 deposit, quoted after a free scoping call\n• AI agents: $350 / $750 / $1,500+ build, plus $500/month maintenance\n• Social media & listings management: starting at $50/week',
    weight: 0.5,
    followUps: ['Is it worth it?', 'Which one should I choose?'],
    actions: [PRICING],
  },
  {
    id: 'contact',
    keywords: ['contact', 'reach', 'email', 'call', 'book', 'consultation', 'scoping', 'talk', 'meet', 'interested', 'get a quote', 'free quote', 'request a quote', 'message patrick'],
    related: ['ready', 'go ahead', 'proceed'],
    answer:
      "Happy to help you get started! I can send your details straight to Patrick right here; it takes about 30 seconds. What would you like help with?\n\nPrefer to reach him directly? Email pat12tomic@gmail.com or call (727) 359-3054. He replies within 24 hours.",
    weight: 0.5,
    startsLead: true,
    actions: [CONTACT],
  },
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'yo', 'sup', 'howdy', 'good morning', 'good afternoon', 'good evening'],
    answer: "Hi there! I can tell you about Patrick's services, pricing and projects. What are you working on?",
    weight: 0.5,
    asks: 'more',
    followUps: ['What services do you offer?', 'Which one should I choose?'],
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank', 'thx', 'appreciate', 'awesome', 'great', 'cool', 'perfect', 'bye'],
    answer: "You're welcome! Anything else I can help with?",
    weight: 0.5,
    asks: 'more',
    followUps: ['Can I see examples?', 'How do I get started?'],
  },
]

// Replies to yes / no / help (see signals.ts for the words that trigger them)
const HELP_CHIPS = ['I need a website', 'Tell me about the AI agents', 'Social media management', 'What are your prices?']

export const replies = {
  help: {
    answer: "Of course, I'm happy to help! What do you need help with? Pick one below or just describe it in your own words.",
    followUps: [...HELP_CHIPS, 'Get a free quote'],
  },
  yes: {
    answer: 'Great! What can I help you with?',
    followUps: HELP_CHIPS,
  },
  no: {
    answer: "No problem! If anything comes up, I'm right here. You can ask me about websites, AI agents, marketing or pricing anytime.",
    followUps: ['What services do you offer?', 'Can I see examples?'],
  },
  // Answers to "Want an exact quote?"
  quoteYes: {
    answer: "Great! I'll pass your details straight to Patrick; it only takes a moment. What would you like help with?",
    actions: [CONTACT],
  },
  quoteNo: {
    answer: "No problem! Take your time looking around. Is there anything else you'd like to know?",
    followUps: ['How does the process work?', 'Can I see examples?'],
  },
  // Already said: shorter follow-ups instead of repeating the same text (see `again` in bot.ts)
  again: {
    help: { answer: "Sure! Just tell me what you're working on, or tap one of the options below." },
    yes: { answer: 'Happy to! Which of these can I help you with?' },
    no: { answer: "No worries. I'm here if anything comes up." },
    buy: { answer: "Absolutely, let's make it happen! Pick what you'd like below and I'll get your details to Patrick." },
    frustrated: { answer: "Sorry again. The fastest way to sort this out is to message Patrick directly; he'll reply within 24 hours." },
    industries: { answer: 'In short: small businesses and startups of any kind, from home services to fitness and nutrition to job platforms. Want to see examples?' },
  } as Record<string, { answer: string; followUps?: string[] }>,
  // "Want to know what it costs?" → "no"
  offerNo: {
    answer: "No problem! Is there anything else you'd like to know?",
    followUps: ['How does the process work?', 'Can I see examples?'],
  },
  // Answer to "Anything else I can help with?" → "no"
  goodbye: {
    answer: "Sounds good! Thanks for stopping by. If you think of anything later, I'm right here.",
    followUps: ['Get a free quote'],
  },
}

// ── Narrowing questions ──
// Branches are checked in order; the best keyword match wins (ties go to the earlier branch).

const SOCIAL_RECOMMENDATION =
  "Social media & listings management is the right fit. Patrick handles complete maintenance of your pages on Facebook, Instagram, TikTok and more, keeping them active, accurate and up to date, so customers find a business that looks current and trustworthy."

const REDESIGN: Branch = {
  kind: 'have-redesign',
  keywords: ['improve', 'redesign', 'update', 'old', 'outdated', 'refresh', 'modernize', 'ugly', 'slow', 'rebuild', 'revamp', 'new look', 'looks bad', 'broken', 'fresh'],
  answer:
    "Patrick can rebuild an outdated site as a fresh, custom one that's fast, mobile friendly and SEO-optimised. Every existing site is different, so the best first step is a free scoping call: he looks at yours and gives you an honest quote.",
  followUps: ['Get a free quote', 'Can I see examples?'],
}

const TRAFFIC: Branch = {
  kind: 'have-traffic',
  keywords: ['traffic', 'visitors', 'visit', 'nobody', 'no one', 'more people', 'more customers', 'find me', 'found', 'google', 'seo', 'search', 'show up', 'get more', 'reach', 'exposure'],
  answer:
    "To get more people to it, two things help most: keeping your Google Business Profile and social media pages active and up to date (Patrick's social media & listings management), and a site built with SEO-optimised pages so you show up in search. If your current site wasn't built for search, a rebuild may be worth a look too.",
  remember: 'marketing',
  followUps: ['Social media & listings management', 'Do you do SEO?', 'Get a free quote'],
}

const AUTOMATE: Branch = {
  kind: 'have-ai',
  keywords: ['answer', 'respond', 'reply', 'calls', 'leads', 'automate', 'automatically', 'chatbot', 'after hours', 'missed', 'questions'],
  answer:
    'An AI agent can work alongside what you already have, answering customer questions, calls and chats automatically so you stop missing leads after hours.',
  remember: 'ai',
  followUps: ['Tell me about the AI agents', 'Get a free quote'],
}

// Picked from the marketing question: only channel words, so "more customers" still gets asked which channel
const SOCIAL_CHANNEL: Branch = {
  kind: 'marketing-social',
  tailor: true,
  keywords: ['social media', 'social', 'facebook', 'instagram', 'insta', 'ig', 'tiktok', 'tik tok', 'posts', 'posting', 'followers', 'content', 'engagement'],
  answer: SOCIAL_RECOMMENDATION,
  offer: 'marketing',
  remember: 'marketing',
}

// Picked when they already have a social page and want to grow it
const GROW_SOCIAL: Branch = {
  ...SOCIAL_CHANNEL,
  keywords: [...SOCIAL_CHANNEL.keywords, 'active', 'grow', 'growing', 'manage', 'maintain', 'keep it', 'customers', 'more people'],
}

const NOT_SURE: Branch = {
  kind: 'marketing-other',
  keywords: ['something else', 'else', 'other', 'not sure', 'unsure', 'email', 'newsletter', 'flyers', 'print', 'word of mouth', 'everything', 'all of it'],
  answer:
    "Here's what Patrick offers on the marketing side:\n• Social media & listings management: complete maintenance of your Facebook, Instagram, TikTok, Google Business Profile and Yelp pages\n• SEO-optimised websites that help you show up on Google\n• AI agents that answer calls, emails and chats so you don't lose leads\nFor anything outside these, like print or email campaigns, ask Patrick directly and he'll tell you honestly whether he can help.",
  followUps: ['Social media & listings management', 'Tell me about the AI agents'],
  actions: [LEAD],
}

export const narrows: Record<string, Narrow> = {
  // "my business needs marketing", "we need more customers"
  marketing: {
    question: 'Happy to help with marketing! To point you the right way: are you looking for more customers through social media, Google, ads, or something else?',
    chips: ['Social media', 'Google & Yelp', 'Paid ads', 'Something else'],
    branches: [
      {
        kind: 'marketing-ads',
        keywords: ['ads', 'ad', 'paid', 'advertising', 'advertise', 'facebook ads', 'google ads', 'ppc', 'campaign', 'boost', 'sponsored', 'commercial'],
        answer:
          "To be upfront: Patrick doesn't run paid ad campaigns. The closest fit is social media & listings management, which keeps your Facebook, Instagram, TikTok, Google and Yelp pages active, so the customers you reach find you looking your best. An AI agent can also make sure every lead gets an answer, even after hours.",
        followUps: ['Social media & listings management', 'Tell me about the AI agents'],
      },
      {
        kind: 'marketing-google',
        keywords: ['google', 'yelp', 'listing', 'google business', 'google maps', 'maps', 'reviews', 'search', 'seo', 'found online', 'show up', 'local'],
        tailor: true,
        answer:
          "For Google and Yelp, Patrick's social media & listings management covers your Google Business Profile and Yelp page, keeping hours, photos and details accurate so you show up when locals search.",
        offer: 'marketing',
        remember: 'marketing',
      },
      SOCIAL_CHANNEL,
      NOT_SURE,
    ],
  },

  // "I have a page": website or social? improve it or get more people to it?
  'have-unclear': {
    question: 'Nice! Is it a website or a social media page? And are you looking to improve it or get more people to it?',
    chips: ["It's a website", "It's a social media page", 'Improve it', 'Get more traffic'],
    branches: [
      REDESIGN,
      TRAFFIC,
      AUTOMATE,
      { kind: 'have-social-ask', keywords: ['social media', 'social', 'facebook', 'instagram', 'tiktok', 'yelp', 'google business', 'profile'], then: 'have-social' },
      { kind: 'have-website-ask', keywords: ['website', 'site', 'web', 'web page', 'webpage'], then: 'have-website' },
    ],
  },

  // "I already have a website", "I have a site"
  'have-website': {
    question: 'Nice, you already have a website! What would you like to do with it?',
    chips: ['Give it a fresh redesign', 'Get more visitors', 'Answer customers automatically', 'Just exploring'],
    branches: [
      REDESIGN,
      TRAFFIC,
      AUTOMATE,
      {
        kind: 'have-exploring',
        keywords: ['just exploring', 'exploring', 'just looking', 'browsing', 'nothing', 'not sure'],
        answer: "No problem! If you'd like to compare options later, Patrick can review your current site for free on a scoping call.",
        followUps: ['How does the process work?', 'Can I see examples?'],
      },
    ],
  },

  // "got a facebook page", "I have an Instagram"
  'have-social': {
    question: 'Nice, you already have a {thing}! Are you looking to keep it active and bring in more customers from it, or something else?',
    chips: ['Keep it active & growing', 'Get more customers from it', 'Something else'],
    branches: [GROW_SOCIAL, NOT_SURE],
  },
}

// First miss: ask what they meant. Second miss in a row: offer Patrick directly.
export const clarify = {
  answer:
    "Hmm, I'm not sure I followed. I can help with websites, AI agents, pricing, Patrick's past work and how the process works. Which is closest to what you're asking?",
  followUps: ['Websites', 'AI agents', 'Pricing', 'Past work'],
}

export const fallback: Pick<Intent, 'answer' | 'followUps' | 'actions'> = {
  answer:
    "Sorry, I'm not getting this one. I'm a simple assistant with a set list of answers, so let me connect you with Patrick directly: he can answer anything, and he replies within 24 hours.",
  followUps: ['What services do you offer?', 'Which one should I choose?'],
  actions: [LEAD, CONTACT],
}
