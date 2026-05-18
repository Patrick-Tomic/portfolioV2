<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import logo from './assets/logo.png'
import houseSvg from './assets/html_css_js_house_about.svg?raw'
import backendSvg from './assets/backend_house_plumbing_electricity.svg?raw'
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

const priceOptions = ['singlePage', 'multiPage', 'fullStack', 'mobile']
const imgList = [
  { src: node, alt: 'node' },
  { src: vue, alt: 'vue' },
  { src: express, alt: 'express' },
  { src: mongo, alt: 'mongo' },
  { src: postgres, alt: 'postgres' },
  { src: react, alt: 'react' },
  { src: next, alt: 'next' },
  { src: AS3, alt: 'AS3' },
  { src: sql, alt: 'sql' },
  { src: python, alt: 'python' },
  { src: css, alt: 'css' },
  { src: html, alt: 'html' },
  { src: jest, alt: 'jest' },
  { src: java, alt: 'java' },
  { src: javascript, alt: 'javascript' },
  { src: csharp, alt: 'c#' },
]


import xbnImg from './assets/XBN.png'
import growwrImg from './assets/growwr.png'
import battleshipImg from './assets/battleship.png'
import squirtImg from './assets/squirt.png'
import landmarkImg from './assets/landmark.png'
import prestigiousImg from './assets/prestigious.png'

interface Project { id: string; label: string; src: string; url: string }
interface Category { id: string; label: string; projects: Project[] }

const categories: Category[] = [
  {
    id: 'spa',
    label: 'Single Page Apps',
    projects: [
      { id: 'squirt',   label: 'Squirt Soft Wash', src: squirtImg,   url: 'https://squirtsoftwash-lylp20y4z-patricks-projects-66bbeed8.vercel.app/' },
      { id: 'landmark', label: 'Landmark',          src: landmarkImg, url: 'https://landmarkenterprises.net/' },
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

const hoveredTech = ref<'html' | 'css' | 'js' | null>(null)

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
const activeSvg = computed(() => hoveredTech.value === 'js' ? backendSvg : houseSvg)

const activeCategoryId = ref('spa')
const activeProjectId = ref('squirt')

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
          <button class="dot" />
        </div>
      </div>
      <div class="hero-scroll-hint">scroll ↓</div>
    </section>

    <!-- ─── ABOUT ─── -->
    <section class="about-section" id="about">
      <div class="about-inner reveal">
        <div class="about-text">
          <span class="eyebrow" data-delay="0s">About</span>
          <h2>What is App Development?</h2>
          <p>Building a web application is like constructing a house. Every great digital product starts with a solid plan and the right layers — each one serving a distinct purpose. HTML lays the foundation, giving your app its structure and meaning. CSS dresses the walls, defining layout, color, and feel. JavaScript powers everything behind the scenes — the logic, interactions, and data that make an app truly come alive.</p>
          <div class="about-btns">
            <button class="about-btn html"
              @mouseenter="hoveredTech = 'html'" @mouseleave="hoveredTech = null">
              <span class="about-btn-label">Foundation</span>
              <span class="about-btn-tech">HTML</span>
            </button>
            <button class="about-btn css"
              @mouseenter="hoveredTech = 'css'" @mouseleave="hoveredTech = null">
              <span class="about-btn-label">Styling</span>
              <span class="about-btn-tech">CSS</span>
            </button>
            <button class="about-btn js"
              @mouseenter="hoveredTech = 'js'" @mouseleave="hoveredTech = null">
              <span class="about-btn-label">Backend</span>
              <span class="about-btn-tech">JavaScript</span>
            </button>
          </div>
        </div>
        <Transition name="svg-swap" mode="out-in">
          <div
            :key="hoveredTech === 'js' ? 'backend' : 'house'"
            class="about-svg"
            :class="hoveredTech ? `highlight-${hoveredTech}` : ''"
            v-html="activeSvg"
          ></div>
        </Transition>
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
        <div id="scrollBar">
          <img v-for="image in imgList" :src="image.src" :alt="image.alt" class="skill-icon" />
          <img v-for="image in imgList" :src="image.src" :alt="image.alt" class="skill-icon" />
        </div>
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
      <div class="section-header">
        <span class="eyebrow">Get In Touch</span>
        <h2>Contact</h2>
      </div>

      <div class="contact-inner">
        <div class="contact-info reveal">
          <p class="contact-info-lead">Have a project in mind? Let's talk.</p>
          <a href="tel:7273593054" class="contact-phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            (727) 359-3054
          </a>
          <span class="contact-availability">
            <span class="availability-dot"></span>
            24/7 call returns
          </span>
        </div>

        <form class="contact-form reveal">
        <div class="field">
          <label for="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="John Smith" />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" placeholder="john@example.com" />
        </div>
        <div class="field">
          <label for="subject">Subject</label>
          <input id="subject" name="subject" type="text" placeholder="Project inquiry" />
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea id="message" name="text" placeholder="Tell me about your project…"></textarea>
        </div>
        <button type="submit" class="send-btn">Send Message</button>
        </form>
      </div>
    </section>

  </main>
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
  padding: 1.5rem 0;
}

#scrollBar {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.skill-icon {
  width: 5vw;
  height: auto;
  object-fit: contain;
  margin-right: 5vw;
  opacity: 0.55;
  transition: opacity 0.2s;
  &:hover { opacity: 1; }
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
  padding-bottom: 3.5rem;

  .section-header h2 { color: #fff; }
}

.contact-inner {
  display: flex;
  gap: 6vw;
  padding: 0 8vw;
  align-items: flex-start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 200px;
  padding-top: 0.25rem;
}

.contact-info-lead {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255,255,255,0.75);
  line-height: 1.5;
}

.contact-phone {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.4rem;
  font-weight: 800;
  color: #64ffda;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: opacity 0.2s;
  svg { flex-shrink: 0; }
  &:hover { opacity: 0.75; }
}

.contact-availability {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}

.availability-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #64ffda;
  box-shadow: 0 0 6px #64ffda;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 6px #64ffda; }
  50%       { opacity: 0.5; box-shadow: 0 0 14px #64ffda; }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  max-width: 580px;
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
  align-self: flex-start;
  background: #64ffda;
  color: #0b0c10;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.85rem 2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
}

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

// SVG swap transition
.svg-swap-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.svg-swap-enter-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.svg-swap-leave-to {
  opacity: 0;
  transform: scale(0.94) translateY(6px);
}
.svg-swap-enter-from {
  opacity: 0;
  transform: scale(0.94) translateY(-6px);
}

@keyframes chimney-pulse {
  0%, 100% { opacity: 1;   fill: #475569; }
  50%       { opacity: 0.4; fill: #38beff; }
}

.about-svg :deep(.chimney-anim) {
  animation: chimney-pulse 2s ease-in-out infinite;
  &:last-child { animation-delay: 0.4s; }
}

// ─── ABOUT ───────────────────────────────────────────────
.about-section {
  background: #0b0c10;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.about-inner {
  display: flex;
  align-items: center;
  gap: 5vw;
  padding: 5rem 8vw;
}

.about-text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  h2 {
    font-size: clamp(1.6rem, 2.8vw, 2.5rem);
    font-weight: 800;
    color: #fff;
    line-height: 1.2;
  }

  p {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.55);
    line-height: 1.8;
    max-width: 480px;
  }
}

.about-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.about-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.15s;
  background: rgba(255,255,255,0.04);

  &:hover { transform: translateY(-2px); }

  .about-btn-label {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    opacity: 0.6;
  }

  .about-btn-tech {
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  &.html {
    border-color: rgba(24, 95, 165, 0.4);
    background: rgba(24, 95, 165, 0.08);
    .about-btn-label { color: #7ab5f5; }
    .about-btn-tech  { color: #a8d4ff; }
    &:hover { background: rgba(24, 95, 165, 0.18); border-color: rgba(24, 95, 165, 0.7); }
  }

  &.css {
    border-color: rgba(59, 109, 17, 0.45);
    background: rgba(59, 109, 17, 0.08);
    .about-btn-label { color: #8ec95a; }
    .about-btn-tech  { color: #b5e07a; }
    &:hover { background: rgba(59, 109, 17, 0.18); border-color: rgba(59, 109, 17, 0.7); }
  }

  &.js {
    border-color: rgba(133, 79, 11, 0.45);
    background: rgba(133, 79, 11, 0.08);
    .about-btn-label { color: #e8a94a; }
    .about-btn-tech  { color: #f5c87a; }
    &:hover { background: rgba(133, 79, 11, 0.18); border-color: rgba(133, 79, 11, 0.7); }
  }
}

.about-svg {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  :deep(svg) {
    width: 100%;
    height: auto;
  }

  // All three groups transition smoothly
  :deep(.svg-html),
  :deep(.svg-css),
  :deep(.svg-js) {
    transition: filter 0.3s ease, opacity 0.3s ease;
  }

  // ── HTML hovered ──
  &.highlight-html {
    :deep(.svg-css),
    :deep(.svg-js)  { opacity: 0.18; filter: grayscale(0.6); }
    :deep(.svg-html) {
      filter:
        brightness(1.15)
        drop-shadow(0 0 6px rgba(56, 190, 255, 0.95))
        drop-shadow(0 0 18px rgba(56, 190, 255, 0.5));
    }
    // Recolor the foundation shapes to bright light blue
    :deep(.svg-html rect)  { fill: #38beff; }
    :deep(.svg-html line)  { stroke: #0090d4; }
  }

  // ── CSS hovered ──
  &.highlight-css {
    :deep(.svg-html) { opacity: 0.18; filter: grayscale(0.6); }

    :deep(.svg-css) {
      filter:
        brightness(1.15)
        drop-shadow(0 0 6px rgba(56, 190, 255, 0.95))
        drop-shadow(0 0 18px rgba(56, 190, 255, 0.5));
    }
    :deep(.svg-css rect) { fill: #38beff; }
    :deep(.svg-css line) { stroke: #0090d4; }

    // Also highlight the roof
    :deep(.svg-js) {
      filter:
        brightness(1.15)
        drop-shadow(0 0 6px rgba(56, 190, 255, 0.7))
        drop-shadow(0 0 14px rgba(56, 190, 255, 0.35));
    }
    :deep(.svg-js polygon) { fill: #ffb3b3; }
  }

  // ── JS hovered — backend SVG has no groups, just glow the whole thing ──
  &.highlight-js {
    :deep(svg) {
      filter:
        brightness(1.1)
        drop-shadow(0 0 8px rgba(245, 180, 80, 0.9))
        drop-shadow(0 0 20px rgba(133, 79, 11, 0.5));
    }
  }
}

// ─── MOBILE ──────────────────────────────────────────────
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
  .about-text p { max-width: 100%; }
  .about-btns { gap: 0.6rem; }
  .about-svg { width: 100%; }

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
  .skill-icon { width: 10vw; margin-right: 6vw; }

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
  .contact-inner { flex-direction: column; gap: 2rem; padding: 0 6vw; }
  .contact-form { max-width: 100%; }
}
</style>
