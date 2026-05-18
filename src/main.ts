import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

// Mount Vue immediately — Three.js init is deferred
createApp(App).mount('#app')

// Defer all Three.js work until after first paint so the page isn't blocked
requestIdleCallback(() => initThree(), { timeout: 200 })

async function initThree() {
  const THREE = await import('three')

  const vertexShader   = (await import('./shaders/vertex.glsl')).default
  const fragmentShader = (await import('./shaders/fragment.glsl')).default
  const earthSrc       = (await import('./assets/earth.jpg')).default
  const moonSrc        = (await import('./assets/moon.jpg')).default

  const spaceHero = document.querySelector('#spaceHero') as HTMLElement
  if (!spaceHero) return

  const w = spaceHero.clientWidth
  const h = spaceHero.clientHeight

  const scene  = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(85, w / h, 0.1, 1000)
  camera.position.z = 8

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.toneMapping       = THREE.ACESFilmicToneMapping
  renderer.outputColorSpace  = THREE.SRGBColorSpace
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(w, h)

  const canvas = renderer.domElement
  canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%'
  spaceHero.style.position = 'relative'
  spaceHero.appendChild(canvas)

  // Stars — typed array is faster than push()
  const starCount    = 6000
  const starVertices = new Float32Array(starCount * 3)
  for (let i = 0; i < starCount * 3; i += 3) {
    starVertices[i]     = (Math.random() - 0.5) * 2000
    starVertices[i + 1] = (Math.random() - 0.5) * 2000
    starVertices[i + 2] = -Math.random() * 2000
  }
  const starGeo = new THREE.BufferGeometry()
  starGeo.setAttribute('position', new THREE.BufferAttribute(starVertices, 3))
  scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff })))

  // Moon
  const moonGroup = new THREE.Group()
  const moonMesh  = new THREE.Mesh(
    new THREE.SphereGeometry(5, 16, 16),
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: { globeTexture: { value: new THREE.TextureLoader().load(moonSrc) } },
    })
  )
  moonMesh.position.set(4.5, 0, 0)
  moonMesh.scale.setScalar(0.08)
  moonGroup.add(moonMesh)

  // Earth
  const earthGroup = new THREE.Group()
  const sphere     = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 32),
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: { globeTexture: { value: new THREE.TextureLoader().load(earthSrc) } },
    })
  )
  sphere.scale.setScalar(0.6)
  earthGroup.position.set(2.5, 0, 0)
  earthGroup.add(sphere)
  earthGroup.add(moonGroup)

  const solarSystem = new THREE.Group()
  solarSystem.add(earthGroup)
  scene.add(solarSystem)

  const applyResponsive = () => {
    const mobile = window.innerWidth < 768
    sphere.scale.setScalar(mobile ? 0.32 : 0.6)
    earthGroup.position.set(mobile ? 0 : 2.5, 0, 0)
    moonMesh.scale.setScalar(mobile ? 0.04 : 0.08)
    moonMesh.position.set(mobile ? 2.5 : 4.5, 0, 0)
    camera.position.z = mobile ? 6 : 8
  }
  applyResponsive()

  const onResize = () => {
    const nw = spaceHero.clientWidth
    const nh = spaceHero.clientHeight
    camera.aspect = nw / nh
    camera.updateProjectionMatrix()
    renderer.setSize(nw, nh)
    applyResponsive()
  }
  window.addEventListener('resize', onResize)

  // Animate
  let animId: number
  const animate = () => {
    animId = requestAnimationFrame(animate)
    earthGroup.rotation.y += 0.002
    moonGroup.rotation.y  += 0.005
    renderer.render(scene, camera)
  }
  animate()
}
