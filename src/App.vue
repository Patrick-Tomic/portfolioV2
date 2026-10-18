<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { sendContactMessage } from './lib/contact'
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

interface Project {
  id: string
  label: string
  src: string
  url: string
  description?: string
  tags?: string[]
}
interface Category { id: string; label: string; projects: Project[] }

const categories: Category[] = [
  {
    id: 'spa',
    label: 'Single Page Apps',
    projects: [
      {
        id: 'landmark',
        label: 'Landmark',
        src: landmarkImg,
        url: 'https://landmarkenterprises.net/',
        description:
          "A single page app built for a pressure washing company. It's built with React, fully mobile friendly, and connected to the company's Google Business page for local SEO. The site is designed to drive their marketing, giving every promotion a fast, polished place to land.",
        tags: ['React', 'Single Page App', 'SEO', 'Mobile Friendly'],
      },
    ],
  },
  {
    id: 'multipage',
    label: 'Multi-page Apps',
    projects: [
      {
        id: 'prestigious',
        label: 'Prestigious Home Services',
        src: prestigiousImg,
        url: 'http://prestigoushomeservices.com/',
        description:
          "A multi-page website built with Vue, with an interactive owner experience: the owner can add new projects to the site through a built-in UI, with no code required. For visitors, custom AI solutions like a chatbot and an automatic email replier make sure questions get answered right away. It's a site the owner can keep growing on their own.",
        tags: ['Vue', 'Multi-Page', 'Owner UI', 'AI Chatbot', 'Email Auto-Reply'],
      },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full Stack Apps',
    projects: [
      {
        id: 'xbn',
        label: 'Xtreme Body Nutrition',
        src: xbnImg,
        url: 'https://xbn-front-end-pearl.vercel.app/',
        description:
          'A full stack e-commerce application built on the MERN stack (MongoDB, Express, React and Node.js). Customers check out securely, with payment authorization handled by Stripe. The owner gets a completely separate admin interface with full CRUD controls to add and remove products, update pricing, run sales and more.',
        tags: ['MERN', 'E-commerce', 'Stripe', 'Admin Dashboard'],
      },
      {
        id: 'growwr',
        label: 'Growwr',
        src: growwrImg,
        url: 'https://growwr.co/',
        description:
          'Growwr is a full stack job market platform built for a country in Africa, similar to LinkedIn. It brings job seekers and employers together in one place to connect and find opportunities. The platform is built with Ruby on Rails, React, Express and MongoDB.',
        tags: ['Ruby on Rails', 'React', 'Express', 'MongoDB'],
      },
    ],
  },
]

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
    showSlide(HERO_TITLE, HERO_INTRO)
  }, 3000)

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
  const navLinks = Array.from(document.querySelectorAll('.nav-links a, .side-links a')) as HTMLAnchorElement[]

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle('nav-active', a.getAttribute('href') === `#${entry.target.id}`))
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

// ── Mobile menu: on phones the logo opens a sidebar instead of the inline links ──
const MOBILE_QUERY = '(max-width: 768px)'
const menuOpen = ref(false)

const onLogoClick = (e: MouseEvent) => {
  if (!window.matchMedia(MOBILE_QUERY).matches) return // desktop: the logo just goes back to the top
  e.preventDefault()
  e.stopImmediatePropagation() // skip the smooth-scroll-to-top handler
  menuOpen.value = !menuOpen.value
}
const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = '' // right away, so tapping a link can scroll the page in the same click
}

// Stop the page scrolling behind the open menu
watch(menuOpen, open => { document.body.style.overflow = open ? 'hidden' : '' })

onMounted(() => {
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu() })
  // Rotating to landscape / resizing to desktop width closes it
  window.matchMedia(MOBILE_QUERY).addEventListener('change', e => { if (!e.matches) closeMenu() })
})

// First hero slide. "\n" starts the smaller tagline line under the company name.
const HERO_TITLE = 'Atomic Consulting & Solutions\nWeb, AI & Marketing Solutions Built for Real Businesses'
const HERO_INTRO = "I'm Patrick Tomic, founder of Atomic Consulting & Solutions. I build custom digital products for businesses and entrepreneurs from concept through launch."

const headerA = ref(HERO_TITLE)
const headerB = ref(HERO_INTRO)
const displayedA = ref('')
const displayedB = ref('')
const isTyping = ref(false)
const isClicked = ref(false)
const typingSpeed = ref(30)

// Types header into displayed one character at a time, then calls onDone
const animateReplacement = (header: any, displayed: any, onDone?: () => void) => {
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
      if (onDone) onDone()
      else isClicked.value = false
    }
  }
  typeWriter()
}

// Types the heading, then the paragraph once the heading has finished (however long that takes)
const showSlide = (title: string, intro: string) => {
  headerA.value = title
  headerB.value = intro
  displayedA.value = ''
  displayedB.value = ''
  animateReplacement(headerA, displayedA, () => {
    setTimeout(() => animateReplacement(headerB, displayedB), 300)
  })
}

const buttonClickA = () => showSlide(HERO_TITLE, HERO_INTRO)

const buttonClickB = () => showSlide(
  'Graduated from the University of South Florida in 2024',
  'B.S. in Information Science. Pursuing a Masters in Computer Science.',
)

// ── Contact form ──
const form = ref({ name: '', email: '', subject: '', message: '' })
const formStatus = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

const currentYear = new Date().getFullYear()

const submitForm = async () => {
  if (formStatus.value === 'sending') return
  formStatus.value = 'sending'
  try {
    await sendContactMessage(form.value)
    formStatus.value = 'success'
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch {
    formStatus.value = 'error'
  }
}

const buttonClickC = () => showSlide(
  'On a mission to make great technology affordable for every small business.',
  "That's what Atomic Consulting & Solutions is all about.",
)
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
      <!-- On phones the logo opens the sidebar menu -->
      <a
        href="#hero"
        class="nav-logo"
        :class="{ open: menuOpen }"
        aria-controls="side-menu"
        :aria-expanded="menuOpen"
        aria-label="Atomic Consulting & Solutions, menu"
        @click="onLogoClick"
      >
        <img :src="logo" alt="" />
        <span class="nav-logo-hint" aria-hidden="true"><span></span><span></span><span></span></span>
      </a>
      <ul class="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#work">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <!-- ─── MOBILE SIDEBAR ─── -->
    <div class="side-backdrop" :class="{ open: menuOpen }" aria-hidden="true" @click="closeMenu"></div>
    <aside id="side-menu" class="side-menu" :class="{ open: menuOpen }" :aria-hidden="!menuOpen" aria-label="Menu">
      <div class="side-head">
        <img :src="logo" alt="" />
        <span>Atomic Consulting<br />&amp; Solutions</span>
        <button class="side-close" aria-label="Close menu" @click="closeMenu">✕</button>
      </div>
      <ul class="side-links">
        <li><a href="#hero" :tabindex="menuOpen ? 0 : -1" @click="closeMenu">Home</a></li>
        <li><a href="#work" :tabindex="menuOpen ? 0 : -1" @click="closeMenu">Projects</a></li>
        <li><a href="#about" :tabindex="menuOpen ? 0 : -1" @click="closeMenu">About</a></li>
        <li><a href="#pricing" :tabindex="menuOpen ? 0 : -1" @click="closeMenu">Pricing</a></li>
        <li><a href="#contact" :tabindex="menuOpen ? 0 : -1" @click="closeMenu">Contact</a></li>
      </ul>
      <a href="#contact" class="side-cta" :tabindex="menuOpen ? 0 : -1" @click="closeMenu">Free consultation →</a>
    </aside>

    <!-- ─── HERO ─── -->
    <section class="hero" id="hero">
      <div id="spaceHero"></div>
      <div class="hero-gradient"></div>
      <div class="hero-content">
        <span class="hero-eyebrow">Portfolio</span>
        <h1 class="hero-h1"><template v-for="(line, i) in displayedA.split('\n')" :key="i"><br v-if="i" /><span :class="{ 'hero-tagline': i > 0 }">{{ line }}</span></template><span class="cursor" :class="{ hidden: !isClicked }">|</span></h1>
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
                <!-- Screenshot opens the live site -->
                <a
                  v-if="activeProject()!.url"
                  :href="activeProject()!.url"
                  target="_blank"
                  rel="noopener"
                  class="project-shot"
                  :aria-label="`Visit ${activeProject()!.label} (opens in a new tab)`"
                >
                  <img :src="activeProject()!.src" :alt="`${activeProject()!.label} website`" />
                  <span class="project-shot-hint" aria-hidden="true">Visit site ↗</span>
                </a>
                <div v-else class="project-shot">
                  <img :src="activeProject()!.src" :alt="`${activeProject()!.label} website`" />
                </div>

                <div class="project-info">
                  <h3>{{ activeProject()!.label }}</h3>
                  <p v-if="activeProject()!.description">{{ activeProject()!.description }}</p>
                  <ul v-if="activeProject()!.tags?.length" class="project-tags">
                    <li v-for="tag in activeProject()!.tags" :key="tag">{{ tag }}</li>
                  </ul>
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
              </div>
            </template>
            <div v-else key="empty" class="preview-empty">
              <span>No projects yet</span>
            </div>
          </Transition>
        </div>
      </div>

    </section>

    <!-- ─── ABOUT ─── -->
    <section class="about-section" id="about">
      <div class="about-inner reveal">
        <div class="about-photo">
          <img :src="aboutPhoto" alt="Patrick Tomic smiling in his graduation cap and gown" loading="lazy" width="800" height="938" />
        </div>
        <div class="about-text">
          <span class="eyebrow" data-delay="0s">About</span>
          <h2>Hi, I'm Patrick Tomic.</h2>
          <p>I am the founder of Atomic Consulting &amp; Solutions, based in Tampa, Florida. I was preparing to join the Marines when I discovered programming, and it has been both my profession and my passion ever since. Outside of work, I play piano and guitar and write poetry.</p>
          <div class="about-links">
            <a href="https://www.linkedin.com/in/patrick-tomic-446502183/" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
              LinkedIn
            </a>
            <a href="https://www.facebook.com/profile.php?id=61595151606074" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/></svg>
              Facebook
            </a>
            <a href="https://github.com/Patrick-Tomic" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .3"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <!-- Hover (or focus) a card to open it; touch screens show them open -->
      <div class="about-grid reveal">
        <article class="about-card" tabindex="0">
          <div class="about-card-head">
            <span class="about-num">01</span>
            <h3>What I Do</h3>
            <span class="about-card-icon" aria-hidden="true"></span>
          </div>
          <p class="about-card-teaser">Websites, web apps, AI agents and social media management.</p>
          <div class="about-card-body">
            <div>
              <p>I design and build custom digital products for small businesses and entrepreneurs, guiding each project from initial concept through launch. My services include custom websites, full stack web applications and online stores, AI-powered chat, email and call agents, and ongoing management of social media pages and business listings. Every service is priced transparently, so clients know the cost before any work begins.</p>
            </div>
          </div>
        </article>
        <article class="about-card" tabindex="0">
          <div class="about-card-head">
            <span class="about-num">02</span>
            <h3>Who I Serve</h3>
            <span class="about-card-icon" aria-hidden="true"></span>
          </div>
          <p class="about-card-teaser">Small businesses, startups and entrepreneurs, in Tampa and nationwide.</p>
          <div class="about-card-body">
            <div>
              <p>I work with small businesses, startups and entrepreneurs, both in Tampa and nationwide. My clients have ranged from local service providers, such as a pressure washing company and a home services company, to a nutrition e-commerce brand and a job-market startup in Africa. Each project is shaped around the client's industry, goals and budget.</p>
            </div>
          </div>
        </article>
        <article class="about-card" tabindex="0">
          <div class="about-card-head">
            <span class="about-num">03</span>
            <h3>Experience &amp; Education</h3>
            <span class="about-card-icon" aria-hidden="true"></span>
          </div>
          <p class="about-card-teaser">Eight years of programming and a degree from the University of South Florida.</p>
          <div class="about-card-body">
            <div>
              <p>I have been programming for eight years and hold a Bachelor of Science in Information Science from the University of South Florida (2024). I am currently pursuing a Master's degree in Computer Science. Alongside my technical work, I bring a background in marketing and customer service, which means I approach every project with the end customer in mind, not only the code. I designed and built this website, including its chatbot, myself.</p>
            </div>
          </div>
        </article>
        <article class="about-card" tabindex="0">
          <div class="about-card-head">
            <span class="about-num">04</span>
            <h3>Working Together</h3>
            <span class="about-card-icon" aria-hidden="true"></span>
          </div>
          <p class="about-card-teaser">A clear process, from a free consultation through launch.</p>
          <div class="about-card-body">
            <div>
              <p>Every engagement begins with a free, no-obligation scoping call to discuss your goals, budget and timeline. From there, I provide regular drafts and incorporate your revisions throughout development, then handle hosting setup and launch. Updates after launch are available whenever you need them for an additional fee. Throughout the process, you can expect flat pricing, consistent communication and straightforward answers.</p>
                <div class="about-cta-row">
                  <a href="#contact" class="about-cta">Schedule a free consultation →</a>
                  <span>I respond within 24 hours.</span>
                </div>
            </div>
          </div>
        </article>
      </div>

      <div id="wrap">
        <ul id="scrollBar" aria-label="Tools and technologies">
          <li
            v-for="(tool, i) in tickerList"
            :key="i"
            class="skill"
            :tabindex="i < imgList.length ? 0 : -1"
            :aria-hidden="i >= imgList.length ? 'true' : undefined"
          >
            <span class="skill-tile">
              <span class="skill-logo"><img :src="tool.src" alt="" loading="lazy" /></span>
              <span class="skill-name">{{ tool.name }}</span>
            </span>
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

      <!-- Marketing -->
      <div class="mkt-section reveal">
        <div class="ai-header">
          <span class="eyebrow mkt">Marketing</span>
          <h3>Social Media &amp; Listings Management</h3>
          <p>Stay visible where your customers are looking. Complete maintenance of your social media pages and business listings, keeping them active, accurate and up to date.</p>
        </div>
        <div class="mkt-card">
          <div class="mkt-price-col">
            <div class="ai-tier-label">Complete maintenance</div>
            <div class="ai-price"><span class="mkt-from">Starting at</span> $50<span>/week</span></div>
            <p>Your exact weekly rate depends on how many platforms and how much work your business needs. It's always agreed with you up front, before anything starts.</p>
            <a href="#contact" class="service-cta">Get Started</a>
          </div>
          <ul class="mkt-platforms">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Google Business Profile</li>
            <li>Yelp</li>
            <li>&amp; more</li>
          </ul>
        </div>
      </div>

      <!-- Service cards -->
      <div class="service-grid reveal">

        <div class="service-card">
          <div class="service-badge spa">SPA</div>
          <h3>Single Page App</h3>
          <div class="service-price">$150 <span>flat</span></div>
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
          <div class="service-price">$150 <span>+ $50/page</span></div>
          <p>A structured multi-page site with navigation. A 5-page site (Home, About, Services, Portfolio, Contact) = $350.</p>
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


      </div>

      <!-- AI Agents -->
      <div class="ai-section reveal">
        <div class="ai-header">
          <span class="eyebrow teal">AI Automation</span>
          <h3>AI Voice, Email &amp; Chat Agents</h3>
          <p>Stop losing leads after hours. Our custom AI agents handle calls, emails and chats automatically. Each agent is a one-time build, plus a $500/month maintenance plan.</p>
        </div>
        <div class="ai-tiers">

          <div class="ai-card starter">
            <div class="ai-tier-label">Starter</div>
            <div class="ai-price">$350</div>
            <div class="ai-maint">+ $500/month maintenance</div>
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
            <div class="ai-maint">+ $500/month maintenance</div>
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
            <div class="ai-maint">+ $500/month maintenance</div>
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

  <!-- ─── FOOTER ─── -->
  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="#hero" class="footer-logo">
          <img :src="logo" alt="" width="44" height="44" />
          <span>Atomic Consulting &amp; Solutions</span>
        </a>
        <p>Web, AI &amp; marketing solutions built for real businesses. Custom websites, web apps, AI agents and social media management, from concept through launch.</p>
        <div class="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61595151606074" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/patrick-tomic-446502183/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href="https://github.com/Patrick-Tomic" target="_blank" rel="noopener" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .3"/></svg>
            </a>
        </div>
      </div>

      <nav class="footer-col" aria-label="Footer">
        <h4>Explore</h4>
        <a href="#hero">Home</a>
        <a href="#work">Projects</a>
        <a href="#about">About</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
        <a href="/battleship/">Play BattleShip</a>
      </nav>

      <div class="footer-col">
        <h4>Services</h4>
        <a href="#pricing">Websites</a>
        <a href="#pricing">Full Stack Apps</a>
        <a href="#pricing">AI Agents</a>
        <a href="#pricing">Social Media &amp; Listings</a>
      </div>

      <div class="footer-col">
        <h4>Contact</h4>
        <a href="mailto:pat12tomic@gmail.com">pat12tomic@gmail.com</a>
        <a href="tel:+17273593054">(727) 359-3054</a>
        <span>Tampa, FL · Serving clients nationwide</span>
        <a href="#contact" class="footer-cta">Free consultation →</a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© {{ currentYear }} Atomic Consulting &amp; Solutions. All rights reserved.</span>
      <a href="#hero">Back to top ↑</a>
    </div>
  </footer>

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

.project-info {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h3 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.6);
  }
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.35rem 0 0;
  padding: 0;
  list-style: none;

  li {
    padding: 0.25rem 0.65rem;
    border-radius: 99px;
    border: 1px solid rgba(100,255,218,0.3);
    background: rgba(100,255,218,0.06);
    color: #64ffda;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.03em;
  }
}

// ─── PROJECT IMAGE TRANSITION ────────────────────────────
// Screenshot and description side by side
.project-preview-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  gap: 2.5rem;
  align-items: center;

  .project-link { margin-top: 0.4rem; }
}

.project-shot {
  position: relative;
  display: block;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0,0,0,0.5);

  img {
    display: block;
    width: 100%;
    transition: transform 0.4s ease;
  }
}

a.project-shot {
  outline-offset: 4px;
  &:hover img, &:focus-visible img { transform: scale(1.03); }
  &:hover .project-shot-hint, &:focus-visible .project-shot-hint { opacity: 1; transform: translateY(0); }
}

.project-shot-hint {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  background: rgba(11, 12, 16, 0.85);
  color: #64ffda;
  font-size: 0.8rem;
  font-weight: 700;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.25s, transform 0.25s;
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
  position: relative;
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

// Little "menu" badge on the logo (phones only)
.nav-logo-hint { display: none; }

// ─── MOBILE SIDEBAR ─────────────────────────────────────
.side-backdrop, .side-menu { display: none; }

@media (max-width: 768px) {
  .nav-logo {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    img { transition: transform 0.3s ease, filter 0.3s ease; }
    &.open img { transform: rotate(-12deg) scale(0.92); filter: drop-shadow(0 0 10px rgba(100, 255, 218, 0.6)); }
  }

  .nav-logo-hint {
    position: absolute;
    right: -6px;
    bottom: -2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    width: 18px;
    height: 18px;
    padding: 0 4px;
    border-radius: 50%;
    background: #64ffda;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    span { display: block; height: 1.5px; border-radius: 1px; background: #0b0c10; }
  }

  .side-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 1150; // above the chat button
    background: rgba(4, 6, 12, 0.6);
    backdrop-filter: blur(3px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    &.open { opacity: 1; pointer-events: auto; }
  }

  .side-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1200;
    width: min(300px, 82vw);
    padding: 1.25rem 1.5rem 2rem;
    background: linear-gradient(to bottom, #0b0c10, #121a2a);
    border-right: 1px solid rgba(100, 255, 218, 0.18);
    box-shadow: 12px 0 40px rgba(0, 0, 0, 0.5);
    transform: translateX(-105%);
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    visibility: hidden;
    &.open { transform: translateX(0); visibility: visible; }
  }

  .side-head {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding-bottom: 1.25rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    img { height: 44px; width: auto; }
    span { color: #fff; font-weight: 800; font-size: 0.95rem; line-height: 1.25; }
  }

  .side-close {
    margin-left: auto;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    border: none;
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    cursor: pointer;
  }

  .side-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    li {
      opacity: 0;
      transform: translateX(-12px);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    // Links slide in one after another
    @for $i from 1 through 5 {
      li:nth-child(#{$i}) { transition-delay: #{0.05 + $i * 0.04}s; }
    }

    a {
      display: block;
      padding: 0.85rem 0.75rem;
      border-radius: 10px;
      color: rgba(255, 255, 255, 0.75);
      font-size: 1.05rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-decoration: none;
      transition: background 0.2s, color 0.2s;
      &:hover, &:active { background: rgba(100, 255, 218, 0.08); color: #64ffda; }
      &.nav-active { color: #64ffda; background: rgba(100, 255, 218, 0.06); box-shadow: inset 3px 0 0 #64ffda; }
    }
  }

  .side-menu.open .side-links li { opacity: 1; transform: translateX(0); }

  .side-cta {
    margin-top: auto;
    display: block;
    padding: 0.9rem 1rem;
    border-radius: 10px;
    background: #64ffda;
    color: #0b0c10;
    font-weight: 800;
    text-align: center;
    text-decoration: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .side-menu, .side-backdrop, .side-links li, .nav-logo img { transition: none !important; }
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

.hero-tagline {
  display: inline-block;
  margin-top: 0.6rem;
  font-size: clamp(1.15rem, 2.2vw, 1.9rem);
  font-weight: 700;
  color: rgba(255,255,255,0.85);
}

.cursor {
  display: inline-block;
  animation: blink 0.9s step-end infinite;
  &.hidden { opacity: 0; }
}

.hero-sub {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  color: rgba(255,255,255,0.65);
  max-width: 46vw;
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
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  margin: 2.5rem 8vw 0;
  padding: 2.5rem 3rem;
  border-radius: 14px;
  background: linear-gradient(135deg, #0b0c10, #1a2233);
  border: 1px solid rgba(100, 255, 218, 0.2);
  box-shadow: 0 12px 36px rgba(0,0,0,0.18);

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
  padding: 0.75rem 0;
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
  align-items: center;
  height: 84px; // room for the lift on hover
  margin-right: 3.5rem;
  flex-shrink: 0;
  cursor: default;
  outline: none;
}

// The white tile widens on hover to reveal the tool's name beside its logo
.skill-tile {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 14px;
  background: #fff;
  opacity: 0.6;
  filter: grayscale(0.5);
  transition: opacity 0.25s, filter 0.25s, transform 0.25s, box-shadow 0.25s;
}

.skill-logo {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}

.skill-name {
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.95rem;
  font-weight: 700;
  color: #0b0c10;
  opacity: 0;
  transition: max-width 0.35s ease, margin 0.35s ease, opacity 0.2s;
}

.skill:hover,
.skill:focus {
  .skill-tile {
    opacity: 1;
    filter: none;
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.4), 0 0 18px rgba(100, 255, 218, 0.35);
  }
  .skill-name {
    max-width: 140px;
    margin: 0 6px 0 10px;
    opacity: 1;
    transition: max-width 0.35s ease, margin 0.35s ease, opacity 0.25s 0.1s;
  }
}

.skill:focus-visible .skill-tile {
  outline: 2px solid #64ffda;
  outline-offset: 3px;
}

// Pause while a tile is open from a tap or keyboard focus too
#wrap:focus-within #scrollBar {
  animation-play-state: paused;
}

// Touch screens: show logos in full color; tapping a tile opens it
@media (hover: none) {
  .skill-tile { opacity: 0.85; filter: none; }
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
  grid-template-columns: repeat(3, 1fr);
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

// Marketing block
.mkt-section {
  padding: 2.5rem 8vw 0;
}

.eyebrow.mkt { color: #7c3aed; }

.mkt-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  background: #fff;
  border-radius: 14px;
  padding: 2rem 2.25rem;
  border: 1px solid rgba(124, 58, 237, 0.35);
  box-shadow: 0 4px 28px rgba(124, 58, 237, 0.12);

  .mkt-price-col {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    p {
      font-size: 0.85rem;
      color: #6b7280;
      line-height: 1.7;
    }
  }

  .service-cta {
    align-self: flex-start;
    background: #7c3aed;
  }

  .mkt-from {
    display: block;
    margin-bottom: 0.15rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #7c3aed;
  }
}

.mkt-platforms {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin: 0;
  padding: 0;

  li {
    padding: 0.85rem 1rem;
    border-radius: 10px;
    background: rgba(124, 58, 237, 0.06);
    border: 1px solid rgba(124, 58, 237, 0.18);
    font-size: 0.9rem;
    font-weight: 700;
    color: #3b2675;
    &::before {
      content: '✓';
      margin-right: 0.5rem;
      color: #7c3aed;
    }
  }
}

.ai-maint {
  margin-top: -0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1193d9;
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

  // Tech stack ticker closes out the section
  #wrap { margin-top: 4rem; }
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






// 2×2 cards that open on hover
.about-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  align-items: start; // only the open card grows, not its neighbour
  padding: 0 8vw;
}

.about-card {
  position: relative;
  padding: 1.75rem;
  border-radius: 14px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  overflow: hidden;
  outline: none;
  cursor: default;
  transition: transform 0.35s ease, border-color 0.35s, background 0.35s, box-shadow 0.35s;

  // Teal line that sweeps across the top when the card opens
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #64ffda, #1193d9);
    transition: width 0.5s ease;
  }
}

.about-card-head {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
  }
}

// "+" that turns into "×"
.about-card-icon {
  position: relative;
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  margin-left: auto;
  border-radius: 50%;
  border: 1px solid rgba(100,255,218,0.4);
  transition: transform 0.4s ease, background 0.3s, border-color 0.3s;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background: #64ffda;
    transform: translate(-50%, -50%);
  }
  &::after { transform: translate(-50%, -50%) rotate(90deg); }
}

.about-card-teaser {
  margin: 0.6rem 0 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.5);
}

// Collapsed to zero height, opens smoothly to the paragraph's natural height
.about-card-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.45s ease;

  > div {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  p {
    margin: 1rem 0 0;
    font-size: 0.95rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.7);
  }

  p, .about-cta-row {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.35s ease;
  }
}

.about-card:hover,
.about-card:focus-within {
  transform: translateY(-4px);
  border-color: rgba(100,255,218,0.35);
  background: rgba(100,255,218,0.04);
  box-shadow: 0 18px 40px rgba(0,0,0,0.35), 0 0 24px rgba(100,255,218,0.08);

  &::before { width: 100%; }
  .about-num { color: #fff; }
  .about-card-icon {
    transform: rotate(135deg);
    background: rgba(100,255,218,0.12);
    border-color: #64ffda;
  }
  .about-card-body { grid-template-rows: 1fr; }
  .about-card-body p,
  .about-card-body .about-cta-row {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.12s;
  }
}

.about-card:focus-visible { border-color: #64ffda; }

// Touch screens can't hover: show every card open
@media (hover: none) {
  .about-card-icon { display: none; }
  .about-card-body { grid-template-rows: 1fr; }
  .about-card-body p,
  .about-card-body .about-cta-row { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .about-card, .about-card::before, .about-card-icon, .about-card-body,
  .about-card-body p, .about-card-body .about-cta-row { transition: none; }
}

.about-num {
  transition: color 0.3s;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #64ffda;
}





.about-cta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1rem;

  span {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.45);
  }
}

.about-cta {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background: #64ffda;
  color: #0b0c10;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.15s;
  &:hover { opacity: 0.88; transform: translateY(-1px); }
}

// ─── FOOTER ──────────────────────────────────────────────
.site-footer {
  background: #080d1a;
  border-top: 1px solid rgba(100,255,218,0.12);
  color: rgba(255,255,255,0.6);
  font-family: 'Inter', sans-serif;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.3fr;
  gap: 2.5rem;
  padding: 4rem 8vw 3rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    margin: 0;
    max-width: 340px;
    font-size: 0.88rem;
    line-height: 1.7;
  }
}

.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #fff;
  font-weight: 800;
  font-size: 1.05rem;
  text-decoration: none;
  img { width: 44px; height: 44px; object-fit: contain; }
}

.footer-social {
  display: flex;
  gap: 0.6rem;

  a {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 10px;
    border: 1px solid rgba(100,255,218,0.25);
    color: #64ffda;
    transition: background 0.2s, border-color 0.2s, transform 0.15s;
    &:hover { background: rgba(100,255,218,0.12); border-color: #64ffda; transform: translateY(-2px); }
  }
}

.footer-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.65rem;

  h4 {
    margin: 0 0 0.35rem;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #64ffda;
  }

  a, span {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.6);
    text-decoration: none;
    overflow-wrap: anywhere;
  }
  a:hover { color: #fff; }
}

.footer-col .footer-cta {
  margin-top: 0.4rem;
  padding: 0.55rem 1rem;
  border-radius: 8px;
  background: #64ffda;
  color: #0b0c10;
  font-weight: 700;
  font-size: 0.85rem;
  &:hover { color: #0b0c10; opacity: 0.88; }
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1.25rem 8vw;
  padding-right: calc(8vw + 70px); // keep clear of the chat button
  border-top: 1px solid rgba(255,255,255,0.06);
  font-size: 0.8rem;
  color: rgba(255,255,255,0.4);

  a {
    color: rgba(255,255,255,0.55);
    text-decoration: none;
    &:hover { color: #64ffda; }
  }
}

// ─── MOBILE ──────────────────────────────────────────────
@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr 1fr; }
  .footer-brand { grid-column: 1 / -1; }
  .project-preview-inner { grid-template-columns: 1fr; gap: 1.5rem; }
}

@media (hover: none) {
  .project-shot-hint { opacity: 1; transform: none; }
}

@media (max-width: 1024px) and (min-width: 769px) {
}

@media (max-width: 768px) {
  // Navbar: links move into the sidebar, opened from the logo
  .nav-links { display: none; }
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
  .about-section #wrap { margin-top: 2.5rem; }
  .about-photo { flex-basis: auto; img { max-width: 260px; } }
  .about-grid { grid-template-columns: 1fr; padding: 0 6vw; gap: 1rem; }
  .about-card { padding: 1.4rem; }
  .about-text p { max-width: 100%; }

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
  .skill { height: 70px; margin-right: 2rem; }
  .skill-tile { height: 52px; padding: 0 8px; border-radius: 12px; }
  .skill-logo { width: 36px; height: 36px; }
  .skill-name { font-size: 0.85rem; }

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
  .mkt-section { padding: 1.5rem 6vw 0; }
  .mkt-card { grid-template-columns: 1fr; padding: 1.75rem; gap: 1.5rem; }

  // Contact
  .contact { padding-bottom: 2.5rem; }
  .contact-hero { padding: 3rem 6vw 2rem; }
  .contact-form { width: calc(100% - 3rem); padding: 1.75rem; }
  .contact-row { grid-template-columns: 1fr; }

  // Footer
  .footer-grid { grid-template-columns: 1fr 1fr; padding: 3rem 6vw 2rem; gap: 2rem; }
  .footer-brand { grid-column: 1 / -1; }
  .footer-bottom { flex-direction: column; padding: 1.25rem 6vw 5.5rem; }
}
</style>
