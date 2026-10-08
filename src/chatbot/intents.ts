// Everything the bot knows. Keep in sync with the content in App.vue.
//
// keywords: single words match whole words only ("hi" won't match "hire");
//           phrases ("full stack") match anywhere and count double.
// weight:   multiplier for broad intents, so a specific topic beats them on a tie.
// followUps: suggested questions shown as buttons after the answer.

export interface Intent {
  id: string
  keywords: string[]
  answer: string
  weight?: number
  followUps?: string[]
}

export const intents: Intent[] = [
  {
    id: 'spa',
    keywords: ['single page', 'one page', 'spa', 'landing page', 'landing', 'portfolio site', 'showcase'],
    answer:
      'A Single Page App is $250 flat. You get a fully custom design and layout, mobile responsiveness, fast load times and a contact/call-to-action section. Great for portfolios, landing pages and product showcases.',
    followUps: ['How much is a multi-page site?', 'How do I get started?'],
  },
  {
    id: 'mpa',
    keywords: ['multi page', 'multipage', 'multiple pages', 'pages', 'mpa', 'business website', 'seo'],
    answer:
      "A Multi-Page Website is $250 + $50 per page. For example, a 5-page site (Home, About, Services, Portfolio, Contact) is $450. It includes full navigation, SEO-optimised pages and brand-consistent design, and it's easy to add pages later.",
    followUps: ['How much for 8 pages?', 'Can I see examples?'],
  },
  {
    id: 'fullstack',
    keywords: ['full stack', 'fullstack', 'web app', 'web application', 'backend', 'database', 'login', 'dashboard', 'api', 'platform'],
    answer:
      "Full Stack Apps are quoted after a free scoping call: $30/hr with a $400 deposit to start, and the deposit goes toward the total. That covers frontend, backend, database and API: user accounts, dashboards and real business logic.",
    followUps: ['How does the deposit work?', 'Book a free scoping call'],
  },
  {
    id: 'mobile',
    keywords: ['mobile app', 'mobile', 'ios', 'android', 'iphone', 'phone app', 'app store', 'cross platform'],
    answer:
      'Mobile Apps (native or cross-platform, iOS and Android) are quoted after a free scoping call: $30/hr with a $400 deposit to start, applied to your total.',
    followUps: ['How does the deposit work?', 'Book a free scoping call'],
  },
  {
    id: 'ai',
    keywords: ['ai', 'agent', 'agents', 'chatbot', 'bot', 'automation', 'automate', 'voice', 'email agent', 'call handler', 'leads', 'artificial intelligence'],
    answer:
      'Custom AI voice, email and chat agents are a one-time build with no subscriptions:\n• Starter, $350: a single-purpose agent such as an FAQ chatbot, auto-reply email agent or basic call handler.\n• Standard, $750 (most popular): custom-branded, with CRM/calendar integration, appointment booking and lead qualification.\n• Premium, $1,500+: multi-channel agents trained on your data, with memory and live escalation.',
    followUps: ['Which AI package is right for me?', 'How do I get started?'],
  },
  {
    id: 'ai-choice',
    keywords: ['which package', 'which plan', 'which tier', 'right for me', 'recommend', 'difference'],
    answer:
      "Rule of thumb: Starter if you need one simple job automated (like answering FAQs), Standard if it should book appointments or connect to your CRM, Premium if you want voice + email together or an agent trained on your own data. Not sure? The free scoping call will sort it out, with no obligation.",
    followUps: ['Book a free scoping call'],
  },
  {
    id: 'deposit',
    keywords: ['deposit', 'payment', 'pay', 'hourly', 'per hour', 'hour', 'rate', 'invoice', 'billing'],
    answer:
      'Full stack and mobile projects are billed at $30/hr. A $400 deposit starts the work and is applied to your total. Websites and AI agents are fixed prices, with no hidden fees.',
    followUps: ['What services do you offer?'],
  },
  {
    id: 'timeline',
    keywords: ['how long', 'timeline', 'turnaround', 'deadline', 'when', 'fast', 'quickly', 'weeks', 'days'],
    answer:
      'Timelines depend on the project. Patrick gives honest estimates during the free scoping call. Send a message through the contact form with your deadline and he will tell you what is realistic.',
    followUps: ['How do I get started?'],
  },
  {
    id: 'projects',
    keywords: ['projects', 'project', 'portfolio', 'work', 'examples', 'example', 'clients', 'previous', 'past', 'built', 'see'],
    answer:
      "Some of Patrick's work:\n• Landmark: single page app (landmarkenterprises.net)\n• Growwr: multi-page site (growwr.co)\n• Prestigious Home Services: multi-page site\n• Xtreme Body Nutrition: full stack app\nYou can also play his BattleShip game. Check the Projects section above.",
    followUps: ['What technologies do you use?', 'How much is a website?'],
  },
  {
    id: 'battleship',
    keywords: ['battleship', 'game', 'play'],
    answer:
      "BattleShip is a fully playable browser game: place your ships, take on the computer and sink the fleet before yours goes down. Find the \"Play Now\" button in the Projects section.",
  },
  {
    id: 'tech',
    keywords: ['tech', 'stack', 'technologies', 'technology', 'languages', 'language', 'framework', 'frameworks', 'tools', 'react', 'vue', 'next', 'node', 'python', 'java', 'javascript', 'typescript', 'sql', 'mongo', 'postgres', 'aws', 's3', 'cloud'],
    answer:
      'Patrick works with JavaScript, HTML, CSS, Vue, React, Next.js, Node.js, Express, MongoDB, PostgreSQL, SQL, Python, Java, C#, Jest and AWS S3.',
    followUps: ['Can I see examples?'],
  },
  {
    id: 'process',
    keywords: ['process', 'steps', 'how does it work', 'how it works', 'what happens', 'after the call', 'draft', 'drafts', 'revision', 'revisions', 'changes', 'feedback', 'work together'],
    answer:
      "Here's how it works:\n1. Free scoping call: talk through your goals, budget and timeline.\n2. Drafts & revisions: Patrick sends drafts consistently, and you can request revisions along the way.\n3. Launch & hosting: he sets up the hosting and launches your project.\n4. Updates after launch: available for an additional fee.",
    followUps: ['Book a free scoping call', 'Do you handle hosting?'],
  },
  {
    id: 'hosting',
    keywords: ['hosting', 'host', 'launch', 'deploy', 'live', 'server'],
    answer: "Yes, Patrick sets up the hosting and launches your project, so you don't have to deal with the technical side.",
    followUps: ['What about updates after launch?'],
  },
  {
    id: 'updates',
    keywords: ['updates', 'update', 'maintenance', 'maintain', 'after launch', 'support', 'later'],
    answer: 'After launch, updates and changes are available for an additional fee. Just reach out through the contact form when you need something.',
    followUps: ['How do I get started?'],
  },
  {
    id: 'hobbies',
    keywords: ['hobbies', 'hobby', 'play music', 'instrument', 'instruments', 'music', 'piano', 'guitar', 'poetry', 'poems', 'fun', 'free time', 'outside of'],
    answer: 'Outside of code, Patrick plays piano and guitar and writes poetry.',
    followUps: ['What services do you offer?'],
  },
  {
    id: 'socials',
    keywords: ['linkedin', 'github', 'socials', 'social', 'resume', 'profile', 'code samples'],
    answer:
      'You can find Patrick on LinkedIn (linkedin.com/in/patrick-tomic-446502183) and GitHub (github.com/Patrick-Tomic). Both are linked in the About section.',
    followUps: ['Can I see examples?'],
  },
  {
    id: 'about',
    keywords: ['who', 'about', 'patrick', 'yourself', 'background', 'experience', 'education', 'degree', 'school', 'usf', 'college', 'atomic', 'story', 'marines', 'why'],
    answer:
      "Patrick Emanuel is an independent software engineer in Tampa, FL. He was planning to join the Marines when he discovered programming, and he's been coding ever since, for eight years now. He graduated from the University of South Florida in 2024 with a B.S. in Information Science, is pursuing a Master's in Computer Science, and has experience in AI and customer service. He started Atomic Consulting & Solutions because helping small businesses is the work he finds most fulfilling.",
    followUps: ['What services do you offer?', 'Can I see examples?'],
  },
  {
    id: 'location',
    keywords: ['where', 'located', 'location', 'tampa', 'florida', 'remote', 'local', 'country', 'nationwide', 'state'],
    answer: 'Patrick is based in Tampa, Florida, and works with clients anywhere in the country.',
    followUps: ['How do I get started?'],
  },
  {
    id: 'services',
    keywords: ['services', 'service', 'offer', 'do you do', 'what can you', 'help with', 'options', 'packages'],
    answer:
      'Patrick offers:\n• Single Page Apps: $250 flat\n• Multi-Page Websites: $250 + $50/page\n• Full Stack Apps: $30/hr, quoted after scoping\n• Mobile Apps: $30/hr, quoted after scoping\n• AI voice, email & chat agents: from $350\nWhat are you looking to build?',
    weight: 0.75,
    followUps: ['Tell me about the AI agents', 'How much is a 5-page website?'],
  },
  {
    id: 'pricing',
    keywords: ['price', 'prices', 'pricing', 'cost', 'costs', 'how much', 'expensive', 'cheap', 'budget', 'quote', 'charge', 'fee', 'fees'],
    answer:
      'Pricing is transparent with no hidden fees:\n• Single Page App: $250 flat\n• Multi-Page Website: $250 + $50/page (5 pages = $450)\n• Full Stack or Mobile App: $30/hr, $400 deposit, quoted after a free scoping call\n• AI agents: $350 / $750 / $1,500+',
    weight: 0.5,
    followUps: ['How much for 8 pages?', 'Tell me about the AI agents'],
  },
  {
    id: 'contact',
    keywords: ['contact', 'hire', 'get started', 'start', 'reach', 'email', 'call', 'book', 'consultation', 'scoping', 'talk', 'meet', 'interested', 'quote'],
    answer:
      "Fill out the contact form at the bottom of the page and Patrick will get back to you within 24 hours. You can also ask for the free scoping consultation: no obligation, no sales pitch.",
    weight: 0.5,
  },
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'yo', 'sup', 'howdy', 'good morning', 'good afternoon', 'good evening'],
    answer: "Hi there! I can tell you about Patrick's services, pricing and projects. What are you working on?",
    weight: 0.5,
    followUps: ['What services do you offer?', 'Can I see examples?'],
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank', 'thx', 'appreciate', 'awesome', 'great', 'cool', 'perfect', 'bye'],
    answer: "You're welcome! If you'd like to move forward, the contact form is at the bottom of the page.",
    weight: 0.5,
  },
]

export const fallback = {
  answer:
    "I'm not sure about that one. I'm a simple assistant that knows about Patrick's services, pricing and projects. For anything else, the contact form at the bottom of the page goes straight to him.",
  followUps: ['What services do you offer?', 'How much does a website cost?', 'Can I see examples?'],
}
