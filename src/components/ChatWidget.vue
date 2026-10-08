<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { getReply } from '../chatbot/bot'

interface ChatMessage { role: 'user' | 'assistant'; content: string }

const MAX_CHARS = 500

const open = ref(false)
const input = ref('')
const sending = ref(false)
const messages = ref<ChatMessage[]>([])
const scroller = ref<HTMLElement | null>(null)

const greeting = "Hi! I'm Patrick's assistant. Ask me about his work, services or pricing."
const suggestions = ref(['What services do you offer?', 'How much is a 5-page website?', 'Tell me about the AI agents'])

const scrollToBottom = async () => {
  await nextTick()
  scroller.value?.scrollTo({ top: scroller.value.scrollHeight, behavior: 'smooth' })
}

const send = async (text = input.value) => {
  const content = text.trim()
  if (!content || sending.value) return
  input.value = ''
  suggestions.value = []
  messages.value.push({ role: 'user', content })
  sending.value = true
  scrollToBottom()

  const reply = getReply(content)
  // A short pause so the typing dots feel natural
  setTimeout(() => {
    messages.value.push({ role: 'assistant', content: reply.text })
    suggestions.value = reply.followUps
    sending.value = false
    scrollToBottom()
  }, 500 + Math.min(reply.text.length * 4, 700))
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    send()
  }
}
</script>

<template>
  <div class="chat">
    <Transition name="chat-pop">
      <section v-if="open" class="chat-panel" aria-label="Chat with Patrick's assistant">
        <header class="chat-head">
          <div>
            <span class="chat-eyebrow">Ask me anything</span>
            <h2 class="chat-title">Atomic Assistant</h2>
          </div>
          <button class="chat-close" aria-label="Close chat" @click="open = false">✕</button>
        </header>

        <div ref="scroller" class="chat-body" aria-live="polite">
          <p class="bubble assistant">{{ greeting }}</p>
          <p v-for="(m, i) in messages" :key="i" class="bubble" :class="m.role">{{ m.content }}</p>
          <p v-if="sending" class="bubble assistant typing" aria-label="Assistant is typing">
            <span></span><span></span><span></span>
          </p>
          <div v-if="suggestions.length && !sending" class="chat-suggestions">
            <button v-for="s in suggestions" :key="s" @click="send(s)">{{ s }}</button>
          </div>
        </div>

        <form class="chat-input" @submit.prevent="send()">
          <textarea
            v-model="input"
            rows="1"
            :maxlength="MAX_CHARS"
            placeholder="Type a message…"
            aria-label="Message"
            @keydown="onKeydown"
          ></textarea>
          <button type="submit" :disabled="sending || !input.trim()" aria-label="Send">↑</button>
        </form>
      </section>
    </Transition>

    <button class="chat-toggle" :aria-expanded="open" :aria-label="open ? 'Close chat' : 'Open chat'" @click="open = !open">
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

.chat-close {
  background: none;
  border: none;
  color: rgba(255,255,255,0.45);
  font-size: 1rem;
  cursor: pointer;
  &:hover { color: #64ffda; }
}

.chat-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem 1.25rem;
  overflow-y: auto;
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
</style>
