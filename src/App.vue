<script setup lang="ts">
import { ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'
import ChatWidget from './components/ChatWidget.vue'
import logo from './assets/logo.png'
import aboutPhoto from './assets/about-photo.jpg'
import node from './assets/node.png'
import vue from './assets/vue.png'
import express from './assets/express.png'
import mongo from './assets/mongo.png'
import postgres from './assets/postgres.png'
import react from './assets/react.png'
import next from './assets/next.png'
import AS3 from './assets/AS3.png'
import sql from './assets/sql.png'
import python from './assets/python.png'
import css from './assets/css.png'
import html from './assets/html.png'
import jest from './assets/jest.png'
import java from './assets/java.png'
import javascript from './assets/javascript.png'
import csharp from './assets/csharp.png'

const imgList = [
  { src: node, name: 'Node.js' },
  { src: vue, name: 'Vue' },
  { src: express, name: 'Express' },
  { src: mongo, name: 'MongoDB' },
  { src: postgres, name: 'PostgreSQL' },
  { src: react, name: 'React' },
  { src: next, name: 'Next.js' },
  { src: AS3, name: 'AWS S3' },
  { src: sql, name: 'SQL' },
  { src: python, name: 'Python' },
  { src: css, name: 'CSS' },
  { src: html, name: 'HTML' },
  { src: jest, name: 'Jest' },
  { src: java, name: 'Java' },
  { src: javascript, name: 'JavaScript' },
  { src: csharp, name: 'C#' },
]
// Rendered twice back to back so the ticker loops seamlessly
const tickerList = [...imgList, ...imgList]


import xbnImg from './assets/XBN.png'
import growwrImg from './assets/growwr.png'
import battleshipImg from './assets/battleship.png'
import landmarkImg from './assets/landmark.png'
import prestigiousImg from './assets/prestigious.png'

interface Project { id: string; label: string; src: string; url: string }
interface Category { id: string; label: string; projects: Project[] }

const categories: Category[] = [
  {
    id: 'spa',
    label: 'Single Page Apps',
    projects: [
      { id: 'landmark', label: 'Landmark', src: landmarkImg, url: 'https://landmarkenterprises.net/' },
    ],
  },
  {
    id: 'multipage',
    label: 'Multi-page Apps',
    projects: [
      { id: 'growwr',     label: 'Growwr',                    src: growwrImg,     url: 'https://growwr.co/' },
      { id: 'prestigious', label: 'Prestigious Home Services', src: prestigiousImg, url: 'http://prestigoushomeservices.com/' },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full Stack Apps',
    projects: [
      { id: 'xbn', label: 'Xtreme Body Nutrition', src: xbnImg, url: 'https://xbn-front-end-pearl.vercel.app/' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    projects: [],
  },
]

onMounted(() => {
  setTimeout(() => { isLoading.value = false }, 3000)

  // ── Smooth-scroll for all anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href')?.slice(1)
      const target = id ? document.getElementById(id) : null
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })

  // ── Navbar: solidify background + track active section ──
  const navbar = document.querySelector('.navbar') as HTMLElement
  const sections = Array.from(document.querySelectorAll('section[id]'))
  const navLinks = Array.from(document.querySelectorAll('.nav-links a')) as HTMLAnchorElement[]

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('nav-active'))
        const match = navLinks.find(a => a.getAttribute('href') === `#${entry.target.id}`)
        match?.classList.add('nav-active')
      }
    })
  }, { threshold: 0.35 })
  sections.forEach(s => sectionObserver.observe(s))

  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 60)
  }, { passive: true })

  // ── Scroll-reveal: fade + rise on first viewport entry ──
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement
        el.classList.add('revealed')
        // stagger children if they have data-delay
        el.querySelectorAll<HTMLElement>('[data-delay]').forEach(child => {
          child.style.transitionDelay = child.dataset.delay!
        })
        revealObserver.unobserve(el)
      }
    })
  }, { threshold: 0.12 })
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))
})

const activeCategoryId = ref('spa')
const activeProjectId = ref('landmark')

const activeCategory = () => categories.find(c => c.id === activeCategoryId.value)!
const activeProject = () => activeCategory().projects.find(p => p.id === activeProjectId.value) ?? null

const selectCategory = (id: string) => {
  activeCategoryId.value = id
  const first = categories.find(c => c.id === id)?.projects[0]
  activeProjectId.value = first?.id ?? ''
}

const isLoading = ref(true)

const headerA = ref('Hi, my name is Patrick Emanuel')
const headerB = ref('Independent Software Engineer — Tampa, FL')
const displayedA = ref('')
const displayedB = ref('')
const isTyping = ref(false)
const isClicked = ref(false)
const typingSpeed = ref(30)

const animateReplacement = (header: any, displayed: any) => {
  isClicked.value = true
  if (isTyping.value) return
  displayed.value = ''
  isTyping.value = true
  let index = 0
  const typeWriter = () => {
    if (index < header.value.length) {
      displayed.value += header.value.charAt(index)
      index++
      setTimeout(typeWriter, typingSpeed.value)
    } else {
      isTyping.value = false
      isClicked.value = false
    }
  }
  if (isTyping.value) typeWriter()
}

animateReplacement(headerA, displayedA)
setTimeout(() => animateReplacement(headerB, displayedB), 1500)

const buttonClickA = () => {
  headerA.value = 'Hi, my name is Patrick Emanuel'
  displayedA.value = ''
  animateReplacement(headerA, displayedA)
  displayedB.value = ''
  headerB.value = 'Independent Software Engineer — Tampa, FL'
  setTimeout(() => animateReplacement(headerB, displayedB), 1500)
}

const buttonClickB = () => {
  headerA.value = 'Graduated from the University of South Florida in 2024'
  displayedA.value = ''
  animateReplacement(headerA, displayedA)
  displayedB.value = ''
  headerB.value = 'B.S. in Information Science. Pursuing a Masters in Computer Science.'
  setTimeout(() => animateReplacement(headerB, displayedB), 3000)
}

// ── Contact form ──
const form = ref({ name: '', email: '', subject: '', message: '' })
const formStatus = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

const submitForm = async () => {
  if (formStatus.value === 'sending') return
  formStatus.value = 'sending'
  try {
    await emailjs.send(
      'service_dpnvezf',
      'template_iyh9k4z',
      {
        name:       form.value.name,
        from_email: form.value.email,
        subject:    form.value.subject,
        message:    form.value.message,
      },
      'XAK6Zs6QJdrC_Ywy0'
    )
    formStatus.value = 'success'
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch {
    formStatus.value = 'error'
  }
}

const buttonClickC = () => {
  headerA.value = 'On a mission to use AI and technology to help real people solve real problems.'
  displayedA.value = ''
  animateReplacement(headerA, displayedA)
  displayedB.value = ''
  headerB.value = "That's what Atomic Consulting & Solutions is all about."
  setTimeout(() => animateReplacement(headerB, displayedB), 3000)
}
</script>

<template>
  <Transition name="loader-fade">
    <div v-if="isLoading" class="loader-overlay">
      <div class="loader-content">
        <img :src="logo" alt="logo" class="loader-logo" />
        <span class="loader-label">Loading</span>
      </div>
    </div>
  </Transition>

  <main>

    <!-- ─── NAVBAR ─── -->
    <nav class="navbar">
      <a href="#hero" class="nav-logo">
        <img :src="logo" alt="logo" />
      </a>
      <ul class="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Projects</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <!-- ─── HERO ─── -->
    <section class="hero" id="hero">
      <div id="spaceHero"></div>
      <div class="hero-gradient"></div>
      <div class="hero-content">
        <span class="hero-eyebrow">Portfolio</span>
        <h1 class="hero-h1">{{ displayedA }}<span class="cursor" :class="{ hidden: !isClicked }">|</span></h1>
        <p class="hero-sub">{{ displayedB }}</p>
        <div class="hero-dots">
          <button @click="buttonClickA" :disabled="isClicked" class="dot" :class="{ active: !isClicked }" />
          <button @click="buttonClickB" :disabled="isClicked" class="dot" />
          <button @click="buttonClickC" :disabled="isClicked" class="dot" />
        </div>
        <a href="#contact" class="hero-cta">Get In Touch</a>
      </div>
      <div class="hero-scroll-hint">scroll ↓</div>
    </section>

    <!-- ─── ABOUT ─── -->
    <section class="about-section" id="about">
      <div class="about-inner reveal">
        <div class="about-photo">
          <img :src="aboutPhoto" alt="Patrick smiling in his graduation cap and gown" loading="lazy" width="800" height="938" />
        </div>
        <div class="about-text">
          <span class="eyebrow" data-delay="0s">About</span>
          <h2>Hi, I'm Patrick.</h2>
          <p>I was planning to join the Marines when I discovered programming, and it quickly became my passion. That was eight years ago. Since then I've earned my B.S. in Information Science from the University of South Florida (2024), and I'm now working toward a Master's in Computer Science.</p>
          <p>Along the way I found that helping small businesses is the work I find most fulfilling. So I started Atomic Consulting &amp; Solutions, where I lead myself and keep learning every step of the way. My background in AI and customer service means I build with the people using your product in mind.</p>
          <p>I work with small businesses, startups and anyone with an idea, whether you're here in Tampa or anywhere in the country.</p>
          <p class="about-personal">Outside of code, you'll find me playing piano and guitar or writing poetry.</p>
          <div class="about-links">
            <a href="https://www.linkedin.com/in/patrick-tomic-446502183/" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/Patrick-Tomic" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .3"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
      <ul class="about-values reveal">
        <li>
          <span class="value-title">Flat, upfront pricing</span>
          <span class="value-text">Websites and AI agents have fixed prices, so you know the cost before we start. No hidden fees.</span>
        </li>
        <li>
          <span class="value-title">Consistent communication</span>
          <span class="value-text">You'll always know where your project stands, and you'll hear back within 24 hours.</span>
        </li>
        <li>
          <span class="value-title">Straightforward</span>
          <span class="value-text">Honest answers and realistic timelines. No jargon, no sales pitch.</span>
        </li>
      </ul>

      <div class="about-process reveal">
        <h3>How we'll work together</h3>
        <ol>
          <li>
            <span class="step-title">Free scoping call</span>
            <span class="step-text">We talk through your goals, budget and timeline. No obligation.</span>
          </li>
          <li>
            <span class="step-title">Drafts &amp; revisions</span>
            <span class="step-text">I send drafts consistently so you see progress as it happens, and you can request revisions along the way.</span>
          </li>
          <li>
            <span class="step-title">Launch &amp; hosting</span>
            <span class="step-text">I set up the hosting and launch your project, so you don't have to deal with the technical side.</span>
          </li>
          <li>
            <span class="step-title">Updates after launch</span>
            <span class="step-text">Need changes down the road? Updates are available for an additional fee.</span>
          </li>
        </ol>
      </div>
    </section>

    <!-- ─── WORK ─── -->
    <section class="work" id="work">
      <div class="section-header reveal">
        <span class="eyebrow">Selected Work</span>
        <h2>Browse Portfolio</h2>
      </div>

      <!-- Category tabs -->
      <div class="category-tabs reveal">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="cat-tab"
          :class="{ active: activeCategoryId === cat.id }"
          @click="selectCategory(cat.id)"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Project body -->
      <div class="work-body reveal">
        <!-- Left: project list -->
        <ul class="project-nav">
          <template v-if="activeCategory().projects.length">
            <li
              v-for="proj in activeCategory().projects"
              :key="proj.id"
              :class="{ active: activeProjectId === proj.id }"
              @click="activeProjectId = proj.id"
            >
              {{ proj.label }}
            </li>
          </template>
          <li v-else class="empty-state">Coming soon</li>
        </ul>

        <!-- Right: screenshot -->
        <div class="project-preview">
          <Transition name="project-img" mode="out-in">
            <template v-if="activeProject()" :key="activeProjectId">
              <div class="project-preview-inner">
                <img :src="activeProject()!.src" :alt="activeProject()!.label" />
                <a
                  v-if="activeProject()!.url"
                  :href="activeProject()!.url"
                  target="_blank"
                  rel="noopener"
                  class="project-link"
                >
                  Visit Site →
                </a>
              </div>
            </template>
            <div v-else key="empty" class="preview-empty">
              <span>No projects yet</span>
            </div>
          </Transition>
        </div>
      </div>

      <!-- BattleShip feature card -->
      <div class="battleship-feature reveal">
        <div class="battleship-text">
          <span class="eyebrow">Interactive Project</span>
          <h3>BattleShip</h3>
          <p>A fully playable browser BattleShip game — place your ships, take on the computer, and sink the fleet before yours goes down.</p>
          <a href="/battleship/" class="play-btn">Play Now →</a>
        </div>
        <img :src="battleshipImg" alt="BattleShip game preview" class="battleship-preview" />
      </div>

      <div id="wrap">
        <ul id="scrollBar" aria-label="Tools and technologies">
          <li
            v-for="(tool, i) in tickerList"
            :key="i"
            class="skill"
            :aria-hidden="i >= imgList.length ? 'true' : undefined"
          >
            <span class="skill-tile"><img :src="tool.src" alt="" loading="lazy" /></span>
            <span class="skill-name">{{ tool.name }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- ─── PRICING ─── -->
    <section class="pricing" id="pricing">
      <div class="section-header dark reveal">
        <span class="eyebrow teal">Services</span>
        <h2>Pricing &amp; Packages</h2>
        <p class="pricing-intro">Great technology shouldn't be reserved for enterprise budgets. Every service comes with transparent pricing, honest timelines, and no hidden fees — just clean, purposeful technology built to grow with you.</p>
      </div>

      <!-- Service cards -->
      <div class="service-grid reveal">

        <div class="service-card">
          <div class="service-badge spa">SPA</div>
          <h3>Single Page App</h3>
          <div class="service-price">$250 <span>flat</span></div>
          <p>A fully custom single-page web application. Perfect for portfolios, landing pages, and product showcases.</p>
          <ul class="service-features">
            <li>Custom design & layout</li>
            <li>Mobile responsive</li>
            <li>Fast load performance</li>
            <li>Contact / CTA integration</li>
          </ul>
          <a href="#contact" class="service-cta">Get Started</a>
        </div>

        <div class="service-card">
          <div class="service-badge mpa">MPA</div>
          <h3>Multi-Page Website</h3>
          <div class="service-price">$250 <span>+ $50/page</span></div>
          <p>A structured multi-page site with navigation. A 5-page site (Home, About, Services, Portfolio, Contact) = $450.</p>
          <ul class="service-features">
            <li>Full navigation structure</li>
            <li>SEO-optimised pages</li>
            <li>Brand-consistent design</li>
            <li>Scalable page additions</li>
          </ul>
          <a href="#contact" class="service-cta">Get Started</a>
        </div>

        <div class="service-card">
          <div class="service-badge fullstack">Full Stack</div>
          <h3>Full Stack App</h3>
          <div class="service-price">Quoted <span>after scoping</span></div>
          <div class="service-rate">$30/hr · $400 deposit to start</div>
          <p>End-to-end web applications — frontend, backend, database, and API. Built for platforms that need real business logic.</p>
          <ul class="service-features">
            <li>User auth & dashboards</li>
            <li>Database & API design</li>
            <li>Deposit applied to total</li>
            <li>Free scoping call included</li>
          </ul>
          <a href="#contact" class="service-cta">Book a Call</a>
        </div>

        <div class="service-card">
          <div class="service-badge mobile">Mobile</div>
          <h3>Mobile App</h3>
          <div class="service-price">Quoted <span>after scoping</span></div>
          <div class="service-rate">$30/hr · $400 deposit to start</div>
          <p>Native or cross-platform iOS & Android apps. Same transparent billing as full stack — scope first, build with clarity.</p>
          <ul class="service-features">
            <li>iOS & Android support</li>
            <li>Cross-platform development</li>
            <li>Deposit applied to total</li>
            <li>Free scoping call included</li>
          </ul>
          <a href="#contact" class="service-cta">Book a Call</a>
        </div>

      </div>

      <!-- AI Agents -->
      <div class="ai-section reveal">
        <div class="ai-header">
          <span class="eyebrow teal">AI Automation</span>
          <h3>AI Voice, Email &amp; Chat Agents</h3>
          <p>Stop losing leads after hours. Our custom AI agents handle calls, emails, and chats automatically — one-time build, no subscriptions.</p>
        </div>
        <div class="ai-tiers">

          <div class="ai-card starter">
            <div class="ai-tier-label">Starter</div>
            <div class="ai-price">$350</div>
            <p>Single-purpose agent with predefined flows. Best for getting started with automation fast.</p>
            <ul>
              <li>FAQ chatbot</li>
              <li>Auto-reply email agent</li>
              <li>Basic call handler</li>
            </ul>
            <a href="#contact" class="service-cta outline">Get Started</a>
          </div>

          <div class="ai-card standard featured">
            <div class="ai-tier-badge">Most Popular</div>
            <div class="ai-tier-label">Standard</div>
            <div class="ai-price">$750</div>
            <p>Custom-branded agent with business-specific logic and third-party integrations.</p>
            <ul>
              <li>CRM / calendar integration</li>
              <li>Appointment-booking agent</li>
              <li>Lead-qualification flows</li>
            </ul>
            <a href="#contact" class="service-cta">Get Started</a>
          </div>

          <div class="ai-card premium">
            <div class="ai-tier-label">Premium</div>
            <div class="ai-price">$1,500<span>+</span></div>
            <p>Multi-channel agents trained on your data with advanced workflows and live escalation.</p>
            <ul>
              <li>Voice + email combo</li>
              <li>Memory & escalation logic</li>
              <li>Full custom data training</li>
            </ul>
            <a href="#contact" class="service-cta outline">Get Started</a>
          </div>

        </div>
      </div>

      <div class="pricing-footer reveal">
        <p>Not sure which service fits your project? <a href="#contact">Book a free scoping consultation</a> — no obligation, no sales pitch.</p>
      </div>
    </section>

    <!-- ─── CONTACT ─── -->
    <section class="contact" id="contact">
      <div class="contact-hero">
        <span class="eyebrow">Get In Touch</span>
        <h2 class="contact-h2">Let's work together</h2>
        <p class="contact-sub">Have a project in mind? Fill out the form and I'll get back to you within 24 hours.</p>
      </div>

      <form class="contact-form reveal" @submit.prevent="submitForm">
        <div class="contact-row">
          <div class="field">
            <label for="name">Full Name</label>
            <input id="name" v-model="form.name" name="name" type="text" placeholder="John Smith" required />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" v-model="form.email" name="email" type="email" placeholder="john@example.com" required />
          </div>
        </div>
        <div class="field">
          <label for="subject">Subject</label>
          <input id="subject" v-model="form.subject" name="subject" type="text" placeholder="Project inquiry" required />
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" name="message" placeholder="Tell me about your project…" required></textarea>
        </div>

        <Transition name="form-msg">
          <p v-if="formStatus === 'success'" class="form-success">Message sent! I'll be in touch soon.</p>
          <p v-else-if="formStatus === 'error'" class="form-error">Something went wrong — please try again.</p>
        </Transition>

        <button type="submit" class="send-btn" :disabled="formStatus === 'sending'">
          <span v-if="formStatus === 'sending'" class="btn-spinner"></span>
          {{ formStatus === 'sending' ? 'Sending…' : 'Send Message' }}
        </button>
      </form>
    </section>

  </main>

  <ChatWidget />
</template>

<style scoped lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}

:global(html),
:global(body),
:global(#app) {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}
:global(html) { scroll-behavior: smooth; }

// ─── LOADER ──────────────────────────────────────────────
.loader-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #080d1a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.loader-logo {
  width: clamp(72px, 12vw, 120px);
  height: auto;
  animation: logo-spin 3s linear infinite, logo-glow 2s ease-in-out infinite;
  filter: drop-shadow(0 0 12px rgba(100, 255, 218, 0.5));
}

.loader-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  animation: loader-dots 1.4s steps(4, end) infinite;
}

@keyframes logo-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes logo-glow {
  0%, 100% { filter: drop-shadow(0 0 8px  rgba(100, 255, 218, 0.4)); }
  50%       { filter: drop-shadow(0 0 22px rgba(100, 255, 218, 0.85)); }
}

@keyframes loader-dots {
  0%   { content: 'Loading';    }
  25%  { content: 'Loading .';  }
  50%  { content: 'Loading ..'; }
  75%  { content: 'Loading ...'; }
}

// Fade out when isLoading → false
.loader-fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.loader-fade-leave-to {
  opacity: 0;
  transform: scale(1.04);
}

// ─── SCROLL-REVEAL ───────────────────────────────────────
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;
  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
}

// ─── PROJECT IMAGE TRANSITION ────────────────────────────
.project-preview-inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 24px 60px rgba(0,0,0,0.5);
  }
}
.project-img-enter-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.project-img-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.project-img-enter-from   { opacity: 0; transform: scale(0.97) translateY(8px); }
.project-img-leave-to     { opacity: 0; transform: scale(1.02) translateY(-4px); }

// ─── NAVBAR ──────────────────────────────────────────────
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
  height: 80px;
  background: rgba(8, 8, 12, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.nav-logo {
  display: flex;
  align-items: center;
  img {
    height: 48px;
    width: auto;
    object-fit: contain;
    display: block;
  }
}

.navbar {
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  &.scrolled {
    background: rgba(8, 8, 12, 0.92);
    border-bottom-color: rgba(255,255,255,0.1);
    box-shadow: 0 4px 24px rgba(0,0,0,0.4);
  }
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2.5rem;
  li a {
    position: relative;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.2s;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #64ffda;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.25s ease;
    }
    &:hover { color: #64ffda; }
    &:hover::after,
    &.nav-active::after { transform: scaleX(1); }
    &.nav-active { color: #64ffda; }
  }
}

// ─── HERO ───────────────────────────────────────────────
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #000;
}

#spaceHero {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.78) 35%, rgba(0,0,0,0.2) 70%, transparent);
  z-index: 1;
  pointer-events: none;
}

.hero-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 8vw 0;
  z-index: 2;
}

.hero-content > * {
  animation: hero-enter 0.7s ease both;
}
.hero-eyebrow { animation-delay: 0.1s; }
.hero-h1      { animation-delay: 0.25s; }
.hero-sub     { animation-delay: 0.4s; }
.hero-dots    { animation-delay: 0.55s; }
.hero-cta     { animation-delay: 0.7s; }

@keyframes hero-enter {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #64ffda;
  font-family: 'Courier New', monospace;
  margin-bottom: 1.25rem;
}

.hero-h1 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.15;
  max-width: 55vw;
  margin-bottom: 1.25rem;
}

.cursor {
  display: inline-block;
  animation: blink 0.9s step-end infinite;
  &.hidden { opacity: 0; }
}

.hero-sub {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  color: rgba(255,255,255,0.65);
  max-width: 38vw;
  line-height: 1.7;
}

.hero-dots {
  display: flex;
  gap: 10px;
  margin-top: 2.5rem;
}

.hero-cta {
  align-self: flex-start;
  margin-top: 2rem;
  padding: 0.65rem 1.6rem;
  background: transparent;
  border: 1px solid rgba(100, 255, 218, 0.55);
  color: #64ffda;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  animation: hero-enter 0.7s ease both;
  &:hover {
    background: #64ffda;
    color: #0b0c10;
    border-color: #64ffda;
    box-shadow: 0 0 18px rgba(100, 255, 218, 0.3);
  }
}

.hero-scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  z-index: 2;
}

// ─── WORK ────────────────────────────────────────────────
.work {
  background: linear-gradient(to bottom, #0b0c10, #1a2233);
  color: #fff;
  padding-bottom: 0;
}

.category-tabs {
  display: flex;
  gap: 0;
  padding: 0 8vw;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 3rem;
}

.cat-tab {
  position: relative;
  background: none;
  border: none;
  color: rgba(255,255,255,0.4);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 1rem 1.75rem;
  cursor: pointer;
  transition: color 0.2s;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #64ffda;
    transform: scaleX(0);
    transition: transform 0.2s;
  }

  &:hover { color: rgba(255,255,255,0.75); }

  &.active {
    color: #64ffda;
    &::after { transform: scaleX(1); }
  }
}

.section-header {
  padding: 3.5rem 8vw 2rem;
  &.dark { background: #f8f8f8; }

  h2 {
    font-size: clamp(1.75rem, 3vw, 2.75rem);
    font-weight: 800;
    margin-top: 0.5rem;
  }
}

.eyebrow {
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #64ffda;
  font-family: 'Courier New', monospace;
  &.teal { color: #1193d9; }
}

.work-body {
  display: flex;
  gap: 4vw;
  padding: 0 8vw 3rem;
  align-items: flex-start;
}

.project-nav {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 180px;
  padding-top: 0.5rem;

  li {
    font-size: 1rem;
    font-weight: 600;
    color: rgba(255,255,255,0.35);
    cursor: pointer;
    transition: color 0.2s;
    &:hover { color: rgba(255,255,255,0.75); }
    &.active { color: #64ffda; }
    &.empty-state {
      color: rgba(255,255,255,0.2);
      font-style: italic;
      cursor: default;
      &:hover { color: rgba(255,255,255,0.2); }
    }
  }
}

.project-preview {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 24px 60px rgba(0,0,0,0.5);
  }
}

.project-link {
  align-self: flex-start;
  display: inline-block;
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(100,255,218,0.35);
  background: rgba(100,255,218,0.06);
  color: #64ffda;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.2s, border-color 0.2s;
  &:hover {
    background: rgba(100,255,218,0.15);
    border-color: rgba(100,255,218,0.7);
  }
}

.battleship-feature {
  display: flex;
  align-items: center;
  gap: 4vw;
  margin: 3rem 8vw;
  padding: 2.5rem 3rem;
  border-radius: 14px;
  background: rgba(100, 255, 218, 0.04);
  border: 1px solid rgba(100, 255, 218, 0.15);

  .battleship-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h3 {
      font-size: 1.75rem;
      font-weight: 800;
      color: #fff;
    }
    p {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.55);
      line-height: 1.7;
      max-width: 420px;
    }
  }

  .battleship-preview {
    width: 35%;
    border-radius: 8px;
    box-shadow: 0 16px 40px rgba(0,0,0,0.5);
  }
}

.play-btn {
  align-self: flex-start;
  margin-top: 0.5rem;
  display: inline-block;
  padding: 0.7rem 1.75rem;
  border-radius: 8px;
  background: #64ffda;
  color: #0b0c10;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
}

.preview-empty {
  width: 100%;
  min-height: 300px;
  border-radius: 10px;
  border: 1px dashed rgba(255,255,255,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.2);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
}

#wrap {
  overflow: hidden;
  background: rgba(255,255,255,0.04);
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 1.75rem 0 1.1rem;
  // Fade icons in and out at the edges
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}

#scrollBar {
  display: flex;
  width: max-content; // so -50% is exactly one copy of the list
  margin: 0;
  padding: 0;
  list-style: none;
  animation: ticker 45s linear infinite;
}

@keyframes ticker {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

#wrap:hover #scrollBar {
  animation-play-state: paused;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  width: 64px;
  margin-right: 3.5rem;
  flex-shrink: 0;
  cursor: default;
}

.skill-tile {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 14px;
  background: #fff;
  opacity: 0.6;
  filter: grayscale(0.5);
  transition: opacity 0.25s, filter 0.25s, transform 0.25s, box-shadow 0.25s;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}

.skill-name {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #64ffda;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 0.2s, transform 0.2s;
}

.skill:hover {
  .skill-tile {
    opacity: 1;
    filter: none;
    transform: translateY(-4px) scale(1.06);
    box-shadow: 0 8px 24px rgba(0,0,0,0.4), 0 0 18px rgba(100, 255, 218, 0.35);
  }
  .skill-name {
    opacity: 1;
    transform: translateY(0);
  }
}

// Touch screens can't hover, so show the names all the time
@media (hover: none) {
  .skill-tile { opacity: 0.85; filter: none; }
  .skill-name { opacity: 0.75; transform: none; }
}

// No scrolling for visitors who turn off animations: show one static, wrapped row
@media (prefers-reduced-motion: reduce) {
  #wrap { mask-image: none; }
  #scrollBar {
    animation: none;
    width: auto;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.25rem 0;
  }
  .skill { margin: 0 1.25rem; }
  .skill[aria-hidden="true"] { display: none; }
}

// ─── PRICING ─────────────────────────────────────────────
.pricing {
  background: #f4f5f7;
  padding-bottom: 5rem;

  .section-header { padding-bottom: 0; }
  .section-header h2 { color: #0b0c10; }
}

.pricing-intro {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.75;
  max-width: 560px;
  margin-top: 0.75rem;
}

// Service cards grid
.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  padding: 2.5rem 8vw;
}

.service-card {
  background: #fff;
  border-radius: 14px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  border: 1px solid rgba(0,0,0,0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(0,0,0,0.12);
  }

  h3 {
    font-size: 1.05rem;
    font-weight: 800;
    color: #0b0c10;
  }

  p {
    font-size: 0.85rem;
    color: #6b7280;
    line-height: 1.7;
    flex: 1;
  }
}

.service-badge {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 99px;
  align-self: flex-start;
  &.spa      { background: #e0f2fe; color: #0369a1; }
  &.mpa      { background: #f0fdf4; color: #166534; }
  &.fullstack{ background: #fef3c7; color: #92400e; }
  &.mobile   { background: #fce7f3; color: #9d174d; }
}

.service-price {
  font-size: 1.6rem;
  font-weight: 900;
  color: #0b0c10;
  span {
    font-size: 0.8rem;
    font-weight: 500;
    color: #9ca3af;
    margin-left: 2px;
  }
}

.service-rate {
  font-size: 0.75rem;
  font-weight: 600;
  color: #9ca3af;
  letter-spacing: 0.04em;
  margin-top: -0.4rem;
}

.service-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  li {
    font-size: 0.82rem;
    color: #374151;
    padding-left: 1.1rem;
    position: relative;
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: 700;
    }
  }
}

.service-cta {
  display: block;
  text-align: center;
  padding: 0.65rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
  background: #0b0c10;
  color: #fff;
  transition: opacity 0.2s;
  &:hover { opacity: 0.75; }
  &.outline {
    background: transparent;
    border: 1.5px solid #0b0c10;
    color: #0b0c10;
    &:hover { background: #0b0c10; color: #fff; }
  }
}

// AI Agents section
.ai-section {
  padding: 0 8vw 2rem;
}

.ai-header {
  margin-bottom: 2rem;
  h3 {
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    font-weight: 800;
    color: #0b0c10;
    margin: 0.4rem 0 0.6rem;
  }
  p {
    font-size: 0.9rem;
    color: #6b7280;
    max-width: 520px;
    line-height: 1.7;
  }
}

.ai-tiers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.ai-card {
  position: relative;
  background: #fff;
  border-radius: 14px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  border: 1px solid rgba(0,0,0,0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(0,0,0,0.13);
  }

  &.featured {
    border-color: #1193d9;
    box-shadow: 0 4px 28px rgba(17,147,217,0.18);
  }

  p {
    font-size: 0.85rem;
    color: #6b7280;
    line-height: 1.7;
    flex: 1;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    li {
      font-size: 0.82rem;
      color: #374151;
      padding-left: 1.1rem;
      position: relative;
      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #1193d9;
        font-weight: 700;
      }
    }
  }

  .service-cta {
    background: #1193d9;
    &.outline {
      border-color: #1193d9;
      color: #1193d9;
      &:hover { background: #1193d9; color: #fff; }
    }
  }
}

.ai-tier-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #1193d9;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.25rem 0.9rem;
  border-radius: 99px;
}

.ai-tier-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #9ca3af;
}

.ai-price {
  font-size: 2rem;
  font-weight: 900;
  color: #0b0c10;
  span {
    font-size: 1rem;
    font-weight: 600;
    color: #9ca3af;
  }
}

.pricing-footer {
  text-align: center;
  padding: 2rem 8vw 0;
  p {
    font-size: 0.9rem;
    color: #6b7280;
    a {
      color: #1193d9;
      font-weight: 600;
      text-decoration: none;
      &:hover { text-decoration: underline; }
    }
  }
}

// ─── CONTACT ─────────────────────────────────────────────
.contact {
  background: #0b0c10;
  padding-bottom: 5rem;
}

.contact-hero {
  text-align: center;
  padding: 4rem 6vw 3rem;
}

.contact-h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #fff;
  margin: 0.4rem 0 1rem;
  letter-spacing: -0.02em;
}

.contact-sub {
  font-size: 1rem;
  color: rgba(255,255,255,0.5);
  max-width: 440px;
  margin: 0 auto;
  line-height: 1.65;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 640px;
  margin: 0 auto;
  padding: 2.5rem;
  width: calc(100% - 4rem);
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
}

.contact-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.45);
  }

  input, textarea {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 8px;
    padding: 0.85rem 1rem;
    color: #fff;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s;
    &::placeholder { color: rgba(255,255,255,0.25); }
    &:focus { border-color: #64ffda; }
  }

  textarea {
    height: 130px;
    resize: none;
  }
}

.send-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  background: #64ffda;
  color: #0b0c10;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  margin-top: 0.25rem;
  &:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
}

.btn-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(0,0,0,0.2);
  border-top-color: #0b0c10;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

.form-success {
  color: #64ffda;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.form-error {
  color: #f87171;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.form-msg-enter-active, .form-msg-leave-active { transition: opacity 0.3s ease; }
.form-msg-enter-from, .form-msg-leave-to { opacity: 0; }

// ─── SHARED DOTS ─────────────────────────────────────────
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.25);
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: rgba(255,255,255,0.8); }
  &.active { background: #fff; }
  &.teal { background: rgba(17,147,217,0.3); &:hover { background: #1193d9; } }
  &:disabled { opacity: 0.4; cursor: default; }
}

// ─── ANIMATIONS ──────────────────────────────────────────
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

// ─── ABOUT ───────────────────────────────────────────────
.about-section {
  background: #0b0c10;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  padding-bottom: 5rem;
}

.about-inner {
  display: flex;
  align-items: center;
  gap: 5vw;
  padding: 5rem 8vw 3rem;
}

.about-photo {
  flex: 0 0 34%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 340px;
    height: auto;
    aspect-ratio: 800 / 938;
    object-fit: cover;
    border-radius: 18px;
    border: 1px solid rgba(100, 255, 218, 0.25);
    box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(100, 255, 218, 0.08);
  }
}

.about-text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  h2 {
    font-size: clamp(1.6rem, 2.8vw, 2.5rem);
    font-weight: 800;
    color: #fff;
    line-height: 1.2;
  }

  p {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.6);
    line-height: 1.8;
    max-width: 560px;
  }
}

.about-personal {
  font-style: italic;
}

.about-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.25rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    border: 1px solid rgba(100,255,218,0.35);
    background: rgba(100,255,218,0.06);
    color: #64ffda;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.2s, border-color 0.2s;
    &:hover { background: rgba(100,255,218,0.15); border-color: rgba(100,255,218,0.7); }
  }
}

.about-process {
  padding: 3.5rem 8vw 0;

  h3 {
    margin: 0 0 1.5rem;
    font-size: clamp(1.25rem, 2vw, 1.6rem);
    font-weight: 800;
    color: #fff;
  }

  ol {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
    margin: 0;
    padding: 0;
    list-style: none;
    counter-reset: step;
  }

  li {
    counter-increment: step;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    padding-top: 1rem;
    border-top: 2px solid rgba(100, 255, 218, 0.3);

    &::before {
      content: counter(step, decimal-leading-zero);
      font-family: 'Courier New', monospace;
      font-size: 0.8rem;
      color: #64ffda;
    }
  }

  .step-title {
    font-weight: 700;
    color: #fff;
  }

  .step-text {
    font-size: 0.88rem;
    color: rgba(255,255,255,0.55);
    line-height: 1.65;
  }
}

.about-values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin: 0;
  padding: 0 8vw;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem;
    border-radius: 14px;
    background: rgba(100, 255, 218, 0.04);
    border: 1px solid rgba(100, 255, 218, 0.15);
  }

  .value-title {
    font-size: 1rem;
    font-weight: 700;
    color: #64ffda;
  }

  .value-text {
    font-size: 0.88rem;
    color: rgba(255,255,255,0.55);
    line-height: 1.65;
  }
}

// ─── MOBILE ──────────────────────────────────────────────
@media (max-width: 1024px) and (min-width: 769px) {
  .about-process ol { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  // Navbar
  .nav-links {
    gap: 1.25rem;
    li a { font-size: 0.72rem; letter-spacing: 0.04em; }
  }
  .navbar { padding: 0 5vw; }

  // Hero
  .hero-content { padding: 64px 6vw 0; }
  .hero-h1 {
    font-size: clamp(1.6rem, 7vw, 2.5rem);
    max-width: 90vw;
  }
  .hero-sub { max-width: 90vw; font-size: 0.95rem; }

  // About
  .about-inner {
    flex-direction: column;
    padding: 3rem 6vw;
    gap: 2.5rem;
  }
  .about-section { padding-bottom: 3rem; }
  .about-photo { flex-basis: auto; img { max-width: 260px; } }
  .about-process { padding: 2.5rem 6vw 0; ol { grid-template-columns: 1fr; } }
  .about-text p { max-width: 100%; }
  .about-values { grid-template-columns: 1fr; padding: 0 6vw; gap: 1rem; }

  // Section headers
  .section-header { padding: 2.5rem 6vw 1.5rem; }

  // Category tabs — scroll horizontally instead of overflowing
  .category-tabs {
    padding: 0 6vw;
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
  .cat-tab { padding: 0.85rem 1.1rem; font-size: 0.72rem; white-space: nowrap; }

  // Work body — stack vertically
  .work-body {
    flex-direction: column;
    padding: 0 6vw 2rem;
    gap: 2rem;
  }
  .project-nav { min-width: unset; flex-direction: row; flex-wrap: wrap; gap: 0.75rem 1.5rem; }
  .project-nav li { font-size: 0.9rem; }

  // Battleship card — stack vertically
  .battleship-feature {
    flex-direction: column;
    margin: 2rem 6vw;
    padding: 1.75rem;
    .battleship-preview { width: 100%; }
  }

  // Skills strip
  .skill { width: 52px; margin-right: 2rem; }
  .skill-tile { width: 52px; height: 52px; padding: 8px; border-radius: 12px; }

  // Pricing — stack to 1 column
  .pricing { padding-bottom: 2.5rem; }
  .service-grid {
    grid-template-columns: 1fr;
    padding: 2rem 6vw;
    gap: 1rem;
  }
  .ai-tiers {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .ai-section { padding: 0 6vw 2rem; }

  // Contact
  .contact { padding-bottom: 2.5rem; }
  .contact-hero { padding: 3rem 6vw 2rem; }
  .contact-form { width: calc(100% - 3rem); padding: 1.75rem; }
  .contact-row { grid-template-columns: 1fr; }
}
</style>
