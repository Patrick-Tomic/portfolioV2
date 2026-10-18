<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { getReply, isBuying, saysYes, QUOTE_CHIP, type BotContext } from '../chatbot/bot'
import type { Action } from '../chatbot/intents'
import { sendContactMessage } from '../lib/contact'

interface ChatMessage { role: 'user' | 'assistant'; content: string; actions?: Action[] }

// In-chat quote request: a few quick questions, then the details are emailed to Patrick
interface Lead {
  step: 'service' | 'details' | 'timeline' | 'reuse' | 'name' | 'email' | 'phone' | 'confirm' | 'edit'
  service: string
  details: string
  timeline: string
  name: string
  email: string
  phone: string
  askedBefore: string[] // what the visitor asked the bot before starting, so Patrick has context
  editing?: boolean // changing one field from the summary: go back to the summary after it
}

type Field = 'name' | 'email' | 'phone' | 'service' | 'timeline' | 'details'

// Remembered for the rest of the visit, so a second request doesn't ask again
interface ContactDetails { name: string; email: string; phone: string }

const MAX_CHARS = 500
const STORAGE_KEY = 'atomic-chat'
const WELCOME_KEY = 'atomic-chat-welcomed'
const WELCOME_DELAY = 4500 // just after the 3s loading screen

const greeting = "Welcome to Atomic Consulting & Solutions! 👋 What are you in need of today? I can help with websites, AI agents, marketing and pricing."
const starters = ['I need a website', 'Tell me about the AI agents', 'Social media management', 'Get a free quote']
const LEAD_SERVICES = ['Website', 'Web app / online store', 'AI agent', 'Social media & listings', 'Not sure yet']
const TIMELINES = ['As soon as possible', 'Within a month', 'In 1–3 months', 'Just exploring']
const CONTACT_KEY = 'atomic-chat-contact'
// The service the visitor was last asking about, offered first when the quote request starts
const SERVICE_FOR: Record<string, string> = {
  website: 'Website', spa: 'Website', mpa: 'Website',
  fullstack: 'Web app / online store', ecommerce: 'Web app / online store',
  ai: 'AI agent', marketing: 'Social media & listings',
}
const CONTACT_FORM: Action = { label: 'Use the contact form', href: '#contact' }
const CANCEL = /^(cancel|stop|quit|never ?mind|no thanks?)$/i
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const SKIP = /^(skip|no|none|n\/a|-)$/i

const open = ref(false)
const input = ref('')
const sending = ref(false)
const showTeaser = ref(false)
const messages = ref<ChatMessage[]>([])
const suggestions = ref<string[]>([...starters])
const scroller = ref<HTMLElement | null>(null)
const textarea = ref<HTMLTextAreaElement | null>(null)
const lead = ref<Lead | null>(null)
let context: BotContext = {}

const PLACEHOLDERS: Record<Lead['step'], string> = {
  service: 'Pick an option or type your own…',
  details: 'What do you need? Any budget in mind?',
  timeline: 'Pick an option or type a date…',
  name: 'Your name',
  email: 'you@example.com',
  phone: 'Phone number (optional)',
  reuse: 'Yes, or no',
  confirm: 'Type "send it", or tell me what to change',
  edit: 'Name, email, phone, service, timeline or details',
}

// Which part of the request a message refers to: "change email", "wrong phone number"
const FIELD_WORDS: [Field, RegExp][] = [
  ['email', /e-?mail/i],
  ['phone', /phone|number|cell|mobile/i],
  ['name', /\bname\b/i],
  ['service', /service|looking for|help with|package/i],
  ['timeline', /timeline|when|date|start|asap/i],
  ['details', /detail|project|description|budget|notes?\b/i],
]
const FIELD_CHIPS = ['Name', 'Email', 'Phone', 'Service', 'Timeline', 'Details']
const fieldIn = (text: string) => FIELD_WORDS.find(([, re]) => re.test(text))?.[0]
const NOT_ME = /not me|wrong person|someone else|different person|not my (name|email|number|details)/i
const WANTS_CHANGE = /\b(change|edit|update|fix|wrong|correct|different|incorrect)\b/i
const placeholder = computed(() => (lead.value ? PLACEHOLDERS[lead.value.step] : 'Type a message…'))
let welcomeTimer: number | undefined
let openedAutomatically = false

// ── Keep the conversation when the visitor reloads or changes page (this tab only) ──
const save = () => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ messages: messages.value, suggestions: suggestions.value, context, lead: lead.value }))
  } catch { /* storage unavailable: the chat still works, it just won't persist */ }
}

const restore = () => {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? 'null')
    if (!saved || !Array.isArray(saved.messages)) return
    messages.value = saved.messages
    suggestions.value = saved.suggestions ?? []
    context = saved.context ?? {}
    lead.value = saved.lead ?? null
  } catch { /* ignore a corrupt or blocked store */ }
}

watch([messages, suggestions, lead], save, { deep: true })

const scrollToBottom = async () => {
  await nextTick()
  scroller.value?.scrollTo({ top: scroller.value.scrollHeight, behavior: 'smooth' })
}

const asked = (q: string) => messages.value.some(m => m.role === 'user' && m.content.toLowerCase() === q.toLowerCase())

// Show a bot message after a short "typing" pause
const botSay = (text: string, followUps: string[] = [], actions: Action[] = [], after?: () => void) => {
  sending.value = true
  scrollToBottom()
  setTimeout(() => {
    messages.value.push({ role: 'assistant', content: text, actions })
    suggestions.value = followUps
    sending.value = false
    after?.()
    scrollToBottom()
  }, 450 + Math.min(text.length * 3, 650))
}

const send = (text = input.value) => {
  const content = text.trim().slice(0, MAX_CHARS)
  if (!content || sending.value) return
  input.value = ''
  suggestions.value = []
  messages.value.push({ role: 'user', content })

  if (lead.value) return continueLead(content)

  const reply = getReply(content, context)
  if (reply.startLead) return beginLead(reply.text, reply.actions)
  // Skip questions the visitor already asked (the quote button always stays available)
  botSay(reply.text, reply.followUps.filter(q => q === QUOTE_CHIP || !asked(q)), reply.actions)
}

// ── Quote request ──

const savedContact = (): ContactDetails | null => {
  try { return JSON.parse(sessionStorage.getItem(CONTACT_KEY) ?? 'null') } catch { return null }
}

const beginLead = (
  opener = "I'll pass your details straight to Patrick; it only takes a moment. What would you like help with?",
  actions: Action[] = [CONTACT_FORM],
) => {
  lead.value = {
    step: 'service', service: '', details: '', timeline: '', name: '', email: '', phone: '',
    askedBefore: messages.value.filter(m => m.role === 'user').map(m => m.content).slice(-10),
  }
  const known = SERVICE_FOR[context.lastService ?? '']
  const options = known ? [known, ...LEAD_SERVICES.filter(o => o !== known)] : LEAD_SERVICES
  botSay(opener, options, actions)
}

const firstName = (name: string) => name.trim().split(/\s+/)[0]

const summary = (l: Lead) =>
  [
    `• Name: ${l.name}`,
    `• Email: ${l.email}`,
    l.phone && `• Phone: ${l.phone}`,
    `• Looking for: ${l.service}`,
    `• Timeline: ${l.timeline}`,
    l.details && `• Details: ${l.details}`,
  ].filter(Boolean).join('\n')

const askToConfirm = (l: Lead, prefix = "Here's what I'll send Patrick:") => {
  l.step = 'confirm'
  l.editing = false
  botSay(`${prefix}\n${summary(l)}\n\nShall I send it, or is there anything to change?`, ['Send it', 'Change something', 'Cancel'])
}

const forgetContact = () => {
  try { sessionStorage.removeItem(CONTACT_KEY) } catch { /* ignore */ }
}

// Ask for one field again, then return to the summary
const askField = (l: Lead, field: Field) => {
  l.editing = true
  l.step = field
  const prompts: Record<Field, [string, string[]]> = {
    name: ['What name should I use?', []],
    email: ["What's the right email address?", []],
    phone: ["What's the best phone number? You can also skip it.", ['Skip']],
    service: ['What would you like help with?', LEAD_SERVICES],
    timeline: ['When are you hoping to get started?', TIMELINES],
    details: ['What should Patrick know about the project?', ['Skip']],
  }
  const [question, chips] = prompts[field]
  botSay(question, chips)
}

const continueLead = (content: string) => {
  const l = lead.value!
  if (CANCEL.test(content)) {
    lead.value = null
    context.pending = { kind: 'more' } // so "no thanks" is read as the answer to "anything else?"
    return botSay("No problem, I've cancelled that. Anything else I can help with?", starters.filter(q => q !== QUOTE_CHIP))
  }

  switch (l.step) {
    case 'service': {
      // "yes" / "I want to buy it" here means the service they were already asking about
      const known = SERVICE_FOR[context.lastService ?? '']
      l.service = known && (saysYes(content) || isBuying(content)) ? known : content
      if (l.editing) return askToConfirm(l, 'Updated:')
      l.step = 'details'
      return botSay('Great. Tell me a little about the project: what you need, and any budget you have in mind.', ['Skip'])
    }

    case 'details':
      l.details = SKIP.test(content) ? '' : content
      if (l.editing) return askToConfirm(l, 'Updated:')
      l.step = 'timeline'
      return botSay('When are you hoping to get started?', TIMELINES)

    case 'timeline': {
      l.timeline = content
      if (l.editing) return askToConfirm(l, 'Updated:')
      // Already sent a request in this tab: offer to reuse those details, but ask first (it may be someone else)
      const known = savedContact()
      if (known) {
        l.step = 'reuse'
        const lines = [known.name, known.email, known.phone].filter(Boolean).map(x => `• ${x}`).join('\n')
        return botSay(`Should I use the same contact details as last time?\n${lines}`, ['Yes, use those', "No, that's not me"])
      }
      l.step = 'name'
      return botSay("Thanks! What's your name?")
    }

    case 'reuse': {
      const known = savedContact()
      if (known && saysYes(content) && !NOT_ME.test(content)) {
        Object.assign(l, known)
        return askToConfirm(l)
      }
      forgetContact()
      l.step = 'name'
      return botSay("No problem, let's use your details. What's your name?")
    }

    case 'name':
      l.name = content
      if (l.editing) return askToConfirm(l, 'Updated:')
      l.step = 'email'
      return botSay(`Nice to meet you, ${firstName(content)}! What's the best email to reach you?`)

    case 'email':
      if (!EMAIL.test(content)) return botSay("That doesn't look like an email address. Could you check it?")
      l.email = content
      if (l.editing) return askToConfirm(l, 'Updated:')
      l.step = 'phone'
      return botSay("And a phone number, in case a quick call is easier? This one's optional.", ['Skip'])

    case 'phone':
      if (!SKIP.test(content) && content.replace(/\D/g, '').length < 7) {
        return botSay("That doesn't look like a phone number. Try again, or tap Skip.", ['Skip'])
      }
      l.phone = SKIP.test(content) ? '' : content
      return askToConfirm(l, l.editing ? 'Updated:' : undefined)

    case 'confirm': {
      // "that's not me": start the contact details again (and stop offering the old ones)
      if (NOT_ME.test(content)) {
        forgetContact()
        Object.assign(l, { name: '', email: '', phone: '', step: 'name' })
        return botSay("Sorry about that! Let's use your details instead. What's your name?")
      }
      // A new email typed straight in: "it's jane@example.com"
      const typedEmail = content.match(/[^\s@]+@[^\s@]+\.[^\s@]{2,}/)?.[0]
      if (typedEmail) {
        l.email = typedEmail
        return askToConfirm(l, 'Updated:')
      }
      // "change email", "wrong phone number", "Change something"
      const field = fieldIn(content)
      if (field && (WANTS_CHANGE.test(content) || content.trim().split(/\s+/).length <= 2)) return askField(l, field)
      if (WANTS_CHANGE.test(content)) {
        l.step = 'edit'
        return botSay('Sure, what would you like to change?', FIELD_CHIPS)
      }
      if (!/^(send|send it|yes|yep|yeah|sure|ok|okay|y|looks good|correct|perfect)\b/i.test(content)) {
        return botSay('Just say "send it" when you\'re ready, tell me what to change, or say "cancel" to stop.', ['Send it', 'Change something', 'Cancel'])
      }
      return submitLead(l)
    }

    case 'edit': {
      const field = fieldIn(content)
      if (field) return askField(l, field)
      return botSay('Which part would you like to change?', FIELD_CHIPS)
    }
  }
}

const submitLead = async (l: Lead) => {
  const pages = context.pages && ['Website', 'Not sure yet'].includes(l.service)
    ? `\nSize discussed: ${context.pages} pages ($${150 + 50 * (context.pages - 1)})`
    : ''
  const history = l.askedBefore.length ? `\n\nWhat they asked the chat bot:\n${l.askedBefore.map(q => `- ${q}`).join('\n')}` : ''

  sending.value = true
  scrollToBottom()
  try {
    await sendContactMessage({
      name: l.name,
      email: l.email,
      subject: `New chat lead: ${l.service} (${l.timeline})`,
      message:
        `Looking for: ${l.service}\nTimeline: ${l.timeline}\nPhone: ${l.phone || 'not given'}${pages}\n\n` +
        `Details:\n${l.details || '(none given)'}${history}\n\nSent from the website chat.`,
    })
    try {
      sessionStorage.setItem(CONTACT_KEY, JSON.stringify({ name: l.name, email: l.email, phone: l.phone }))
    } catch { /* ignore */ }
    lead.value = null
    sending.value = false
    context.pending = { kind: 'more' }
    botSay(
      `Sent! Thanks, ${firstName(l.name)}. Here's what happens next:\n` +
        `1. Patrick reviews your request and replies to ${l.email} within 24 hours.\n` +
        '2. You set up a free, no-obligation scoping call.\n' +
        '3. You get a clear quote before any work starts.\n\nAnything else I can help with in the meantime?',
      ['Can I see examples?', 'How does the process work?'],
    )
  } catch {
    lead.value = null
    sending.value = false
    botSay("Sorry, that didn't go through. Please use the contact form instead, or email pat12tomic@gmail.com.", [], [CONTACT_FORM])
  }
}

const restart = () => {
  messages.value = []
  suggestions.value = [...starters]
  context = {}
  lead.value = null
  input.value = ''
  textarea.value?.focus()
}

// "#section" links scroll the page; on small screens the chat closes so the section is visible
const runAction = (action: Action, e: MouseEvent) => {
  if (action.href === 'chat:lead') {
    e.preventDefault()
    if (!lead.value && !sending.value) beginLead()
    return
  }
  if (!action.href.startsWith('#')) return
  e.preventDefault()
  document.querySelector(action.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  if (window.innerWidth < 640) open.value = false
}

const isExternal = (href: string) => /^https?:/.test(href)

const dismissTeaser = () => {
  showTeaser.value = false
  try { sessionStorage.setItem(WELCOME_KEY, '1') } catch { /* ignore */ }
}

const toggle = () => {
  open.value = !open.value
  dismissTeaser()
}

// ── Phones: the chat fills the screen and stays above the on-screen keyboard ──
const PHONE_QUERY = '(max-width: 600px)'
const isPhone = () => window.matchMedia(PHONE_QUERY).matches
// The part of the screen not covered by the keyboard (iOS shrinks this, not the page, when it opens)
const viewport = ref<{ height: number; top: number } | null>(null)

const syncViewport = () => {
  const vv = window.visualViewport
  viewport.value = vv && isPhone() ? { height: vv.height, top: vv.offsetTop } : null
  scrollToBottom()
}

const panelStyle = computed(() =>
  viewport.value ? { height: `${viewport.value.height}px`, top: `${viewport.value.top}px` } : undefined,
)

watch(open, async isOpen => {
  // Full-screen on phones: stop the page behind from scrolling, and follow the keyboard
  const phone = isPhone()
  document.body.style.overflow = isOpen && phone ? 'hidden' : ''
  if (isOpen && phone) {
    window.visualViewport?.addEventListener('resize', syncViewport)
    window.visualViewport?.addEventListener('scroll', syncViewport)
    syncViewport()
  } else {
    window.visualViewport?.removeEventListener('resize', syncViewport)
    window.visualViewport?.removeEventListener('scroll', syncViewport)
    viewport.value = null
  }

  if (!isOpen) return
  await nextTick()
  // Don't grab focus when the chat opened by itself, or on phones: it would pop up the keyboard and
  // hide the suggestions before the visitor has read them
  if (!openedAutomatically && !phone) textarea.value?.focus()
  openedAutomatically = false
  scrollToBottom()
})

// The message box grows with what's typed (up to a few lines), and shrinks back after sending
const grow = () => {
  const t = textarea.value
  if (!t) return
  t.style.height = 'auto'
  t.style.height = `${Math.min(t.scrollHeight, 120)}px`
}
watch(input, () => nextTick(grow))

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    send()
  }
}

const onEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && open.value) open.value = false
}

onMounted(() => {
  restore()
  document.addEventListener('keydown', onEscape)

  // Welcome each visitor once per session: open the chat on larger screens, or show a small
  // bubble on phones, where the open chat would cover the page. Closing it keeps it closed.
  let welcomed = false
  try { welcomed = sessionStorage.getItem(WELCOME_KEY) === '1' } catch { /* ignore */ }
  if (!welcomed && !messages.value.length) {
    welcomeTimer = window.setTimeout(() => {
      if (open.value) return
      if (window.innerWidth >= 768) {
        openedAutomatically = true
        open.value = true
      } else {
        showTeaser.value = true
      }
      try { sessionStorage.setItem(WELCOME_KEY, '1') } catch { /* ignore */ }
    }, WELCOME_DELAY)
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onEscape)
  window.visualViewport?.removeEventListener('resize', syncViewport)
  window.visualViewport?.removeEventListener('scroll', syncViewport)
  clearTimeout(welcomeTimer)
})
</script>

<template>
  <div class="chat" :class="{ 'is-open': open }">
    <Transition name="chat-pop">
      <section v-if="open" class="chat-panel" :style="panelStyle" aria-label="Chat with Patrick Tomic's assistant">
        <header class="chat-head">
          <div>
            <span class="chat-eyebrow">Ask me anything</span>
            <h2 class="chat-title">Atomic Assistant</h2>
          </div>
          <div class="chat-head-btns">
            <button v-if="messages.length" class="chat-icon-btn" aria-label="Start over" title="Start over" @click="restart">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" />
              </svg>
            </button>
            <button class="chat-icon-btn" aria-label="Close chat" title="Close" @click="open = false">✕</button>
          </div>
        </header>

        <div ref="scroller" class="chat-body" aria-live="polite">
          <p class="bubble assistant">{{ greeting }}</p>
          <template v-for="(m, i) in messages" :key="i">
            <p class="bubble" :class="m.role">{{ m.content }}</p>
            <div v-if="m.actions?.length" class="chat-actions">
              <a
                v-for="a in m.actions"
                :key="a.href"
                :href="a.href"
                :target="isExternal(a.href) ? '_blank' : undefined"
                :rel="isExternal(a.href) ? 'noopener' : undefined"
                @click="runAction(a, $event)"
              >{{ a.label }} <span aria-hidden="true">{{ isExternal(a.href) ? '↗' : '→' }}</span></a>
            </div>
          </template>
          <p v-if="sending" class="bubble assistant typing" aria-label="Assistant is typing">
            <span></span><span></span><span></span>
          </p>
          <div v-if="suggestions.length && !sending" class="chat-suggestions">
            <button v-for="s in suggestions" :key="s" @click="send(s)">{{ s }}</button>
          </div>
        </div>

        <form class="chat-input" @submit.prevent="send()">
          <textarea
            ref="textarea"
            v-model="input"
            rows="1"
            :maxlength="MAX_CHARS"
            :placeholder="placeholder"
            aria-label="Message"
            enterkeyhint="send"
            autocapitalize="sentences"
            @keydown="onKeydown"
          ></textarea>
          <button type="submit" :disabled="sending || !input.trim()" aria-label="Send">↑</button>
        </form>
      </section>
    </Transition>

    <Transition name="chat-pop">
      <div v-if="showTeaser && !open" class="chat-teaser">
        <button class="chat-teaser-text" @click="toggle">👋 Welcome! What are you in need of today?</button>
        <button class="chat-teaser-close" aria-label="Dismiss" @click="dismissTeaser">✕</button>
      </div>
    </Transition>

    <button class="chat-toggle" :aria-expanded="open" :aria-label="open ? 'Close chat' : 'Open chat'" @click="toggle">
      <svg v-if="!open" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
      </svg>
      <span v-else>✕</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.chat {
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 1000;
  font-family: 'Inter', sans-serif;
}

.chat-toggle {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  margin-left: auto;
  border-radius: 50%;
  border: none;
  background: #64ffda;
  color: #0b0c10;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 28px rgba(0,0,0,0.45), 0 0 18px rgba(100,255,218,0.3);
  transition: transform 0.15s, box-shadow 0.2s;
  &:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(0,0,0,0.5), 0 0 26px rgba(100,255,218,0.45); }
}

.chat-panel {
  display: flex;
  flex-direction: column;
  width: min(380px, calc(100vw - 2rem));
  height: min(560px, calc(100dvh - 7rem));
  margin-bottom: 1rem;
  background: rgba(11, 12, 16, 0.96);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(100,255,218,0.2);
  border-radius: 16px;
  box-shadow: 0 24px 60px rgba(0,0,0,0.55);
  overflow: hidden;
}

.chat-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.chat-eyebrow {
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #64ffda;
}

.chat-title {
  margin: 0.15rem 0 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
}

.chat-head-btns {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.chat-icon-btn {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: none;
  border: none;
  color: rgba(255,255,255,0.45);
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
  &:hover { color: #64ffda; background: rgba(100,255,218,0.08); }
}

.chat-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem 1.25rem;
  overflow-y: auto;
  overscroll-behavior: contain; // scrolling the chat doesn't scroll the page behind it
  -webkit-overflow-scrolling: touch;
}

.bubble {
  max-width: 85%;
  margin: 0;
  padding: 0.7rem 0.95rem;
  border-radius: 12px;
  font-size: 0.9rem;
  line-height: 1.55;
  white-space: pre-wrap;
  word-wrap: break-word;

  &.assistant {
    align-self: flex-start;
    background: rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.85);
    border-bottom-left-radius: 4px;
  }
  &.user {
    align-self: flex-end;
    background: #64ffda;
    color: #0b0c10;
    border-bottom-right-radius: 4px;
  }
}

.typing {
  display: flex;
  gap: 4px;
  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    animation: chat-blink 1.2s infinite;
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
}

@keyframes chat-blink {
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
}

.chat-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  button {
    padding: 0.4rem 0.75rem;
    border-radius: 999px;
    border: 1px solid rgba(100,255,218,0.35);
    background: rgba(100,255,218,0.06);
    color: #64ffda;
    font-size: 0.78rem;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s;
    &:hover { background: rgba(100,255,218,0.15); border-color: rgba(100,255,218,0.7); }
  }
}

.chat-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: -0.2rem;

  a {
    padding: 0.4rem 0.75rem;
    border-radius: 8px;
    background: #64ffda;
    color: #0b0c10;
    font-size: 0.78rem;
    font-weight: 700;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.15s;
    &:hover { opacity: 0.88; transform: translateY(-1px); }
  }
}

.chat-teaser {
  position: absolute;
  right: 0;
  bottom: 70px;
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
  width: max-content;
  max-width: min(260px, calc(100vw - 2rem));
  padding: 0.75rem 0.5rem 0.75rem 0.9rem;
  border-radius: 12px 12px 4px 12px;
  background: #fff;
  box-shadow: 0 12px 32px rgba(0,0,0,0.4);
}

.chat-teaser-text {
  padding: 0;
  background: none;
  border: none;
  color: #0b0c10;
  font: inherit;
  font-size: 0.85rem;
  line-height: 1.45;
  text-align: left;
  cursor: pointer;
}

.chat-teaser-close {
  flex-shrink: 0;
  padding: 0 0.25rem;
  background: none;
  border: none;
  color: rgba(11,12,16,0.4);
  font-size: 0.8rem;
  cursor: pointer;
  &:hover { color: #0b0c10; }
}

.chat-input {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  padding: 0.75rem;
  border-top: 1px solid rgba(255,255,255,0.08);

  textarea {
    flex: 1;
    max-height: 120px;
    resize: none;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 10px;
    padding: 0.7rem 0.9rem;
    color: #fff;
    font: inherit;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s;
    &::placeholder { color: rgba(255,255,255,0.3); }
    &:focus { border-color: #64ffda; }
  }

  button {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 10px;
    border: none;
    background: #64ffda;
    color: #0b0c10;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    &:disabled { opacity: 0.4; cursor: not-allowed; }
  }
}

.chat-pop-enter-active, .chat-pop-leave-active { transition: opacity 0.2s, transform 0.2s; }
.chat-pop-enter-from, .chat-pop-leave-to { opacity: 0; transform: translateY(12px) scale(0.98); }

@media (max-width: 480px) {
  .chat { right: 1rem; bottom: 1rem; }
}

// ── Phones: full-screen chat with finger-sized buttons ──
@media (max-width: 600px) {
  .chat-panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh; // replaced by the visible height while the keyboard is open
    margin: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background: #0b0c10;
  }

  // The panel has its own close button; the round toggle would sit on top of the message box
  .chat.is-open .chat-toggle { display: none; }

  .chat-head {
    padding: max(0.75rem, env(safe-area-inset-top)) 1rem 0.75rem;
  }

  .chat-icon-btn {
    width: 44px;
    height: 44px;
    font-size: 1.1rem;
  }

  .chat-body {
    padding: 1rem;
    gap: 0.7rem;
  }

  .bubble {
    max-width: 88%;
    font-size: 0.97rem;
  }

  .chat-suggestions {
    gap: 0.5rem;
    button {
      min-height: 40px;
      padding: 0.55rem 0.95rem;
      font-size: 0.9rem;
    }
  }

  .chat-actions a {
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    padding: 0.55rem 0.95rem;
    font-size: 0.88rem;
  }

  .chat-input {
    padding: 0.6rem 0.75rem max(0.6rem, env(safe-area-inset-bottom));
    gap: 0.6rem;
    textarea {
      font-size: 16px; // under 16px, iPhones zoom the whole page in when the box is tapped
      padding: 0.7rem 0.9rem;
    }
    button {
      width: 44px;
      height: 44px;
      font-size: 1.2rem;
    }
  }

  .chat-pop-enter-from, .chat-pop-leave-to { transform: translateY(24px); }
}
</style>
