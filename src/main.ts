import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

// Mount Vue immediately; the 3D scene loads after first paint
createApp(App).mount('#app')

async function initThree() {
  const container = document.querySelector<HTMLElement>('#spaceHero')
  if (!container) return
  const { initHeroScene } = await import('./three/heroScene')
  initHeroScene(container)
}

// Defer the 3D scene until the browser is idle (iOS Safari has no requestIdleCallback)
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => initThree(), { timeout: 200 })
} else {
  setTimeout(initThree, 100)
}
