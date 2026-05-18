<script setup lang="ts">
import { ref } from 'vue'
import logo from './assets/logo.png'
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

const activeCategoryId = ref('spa')
const activeProjectId = ref('squirt')

const activeCategory = () => categories.find(c => c.id === activeCategoryId.value)!
const activeProject = () => activeCategory().projects.find(p => p.id === activeProjectId.value) ?? null

const selectCategory = (id: string) => {
  activeCategoryId.value = id
  const first = categories.find(c => c.id === id)?.projects[0]
  activeProjectId.value = first?.id ?? ''
}

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

    <!-- ─── WORK ─── -->
    <section class="work" id="work">
      <div class="section-header">
        <span class="eyebrow">Selected Work</span>
        <h2>Browse Portfolio</h2>
      </div>

      <!-- Category tabs -->
      <div class="category-tabs">
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
      <div class="work-body">
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
          <template v-if="activeProject()">
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
          </template>
          <div v-else class="preview-empty">
            <span>No projects yet</span>
          </div>
        </div>
      </div>

      <!-- BattleShip feature card -->
      <div class="battleship-feature">
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
    <section class="pricing" id="about">
      <div class="section-header dark">
        <span class="eyebrow teal">Services</span>
        <h2>Pricing &amp; Packages</h2>
      </div>
      <div class="pricing-card">
        <div class="pricing-text">
          <h3>Overview</h3>
          <p>When working with customers, we aim for the <strong>smoothest</strong> service possible — from development through deployment. We assist with any questions on our packages and what next steps are needed for your application and software needs.</p>
          <div class="pricing-dots">
            <button v-for="id in priceOptions" :id="id" class="dot teal" />
          </div>
        </div>
        <img src="./assets/options.png" alt="Pricing options" class="pricing-img" />
      </div>
    </section>

    <!-- ─── CONTACT ─── -->
    <section class="contact" id="contact">
      <div class="section-header">
        <span class="eyebrow">Get In Touch</span>
        <h2>Contact</h2>
      </div>
      <form class="contact-form">
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
  height: 64px;
  background: rgba(8, 8, 12, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.nav-logo {
  display: flex;
  align-items: center;
  img {
    height: 36px;
    width: auto;
    object-fit: contain;
    display: block;
  }
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2.5rem;
  li a {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.2s;
    &:hover { color: #64ffda; }
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
  padding: 64px 8vw 0;
  z-index: 2;
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
  background: #f8f8f8;
  padding-bottom: 3.5rem;

  .section-header h2 { color: #0b0c10; }
}

.pricing-card {
  display: flex;
  margin: 0 8vw;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.1);
  overflow: hidden;
  max-width: 80vw;
}

.pricing-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  flex: 1;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0b0c10;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.75;
    max-width: 380px;
  }
}

.pricing-dots {
  display: flex;
  gap: 10px;
  margin-top: 2rem;
}

.pricing-img {
  width: 40%;
  object-fit: cover;
  border-left: 1px solid rgba(0,0,0,0.08);
}

// ─── CONTACT ─────────────────────────────────────────────
.contact {
  background: #0b0c10;
  padding-bottom: 3.5rem;

  .section-header h2 { color: #fff; }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 8vw;
  max-width: 640px;
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

  // Pricing card — stack vertically
  .pricing { padding-bottom: 2.5rem; }
  .pricing-card {
    flex-direction: column;
    margin: 0 6vw;
    max-width: 100%;
  }
  .pricing-text { padding: 2rem; }
  .pricing-img {
    width: 100%;
    border-left: none;
    border-top: 1px solid rgba(0,0,0,0.08);
    max-height: 220px;
    object-position: top;
  }

  // Contact
  .contact { padding-bottom: 2.5rem; }
  .contact-form { padding: 0 6vw; max-width: 100%; }
}
</style>
