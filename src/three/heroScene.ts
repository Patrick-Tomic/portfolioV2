// The 3D space scene behind the hero: a lit Earth with clouds, city lights and an atmosphere glow,
// an orbiting Moon and a twinkling star field. Loaded after the page appears (see main.ts).

import * as THREE from 'three'
import earthVert from '../shaders/earth.vert.glsl'
import earthFrag from '../shaders/earth.frag.glsl'
import atmosphereVert from '../shaders/atmosphere.vert.glsl'
import atmosphereFrag from '../shaders/atmosphere.frag.glsl'
import starsVert from '../shaders/stars.vert.glsl'
import starsFrag from '../shaders/stars.frag.glsl'
import dayUrl from '../assets/space/earth-day.jpg'
import nightUrl from '../assets/space/earth-night.jpg'
import oceanUrl from '../assets/space/earth-ocean.jpg'
import cloudsUrl from '../assets/space/earth-clouds.jpg'
import moonUrl from '../assets/space/moon.jpg'

// Where the sun is: front-right and a little above, so the lit side faces the visitor and the
// day/night edge (with city lights) falls toward the text on the left.
const SUN_DIRECTION = new THREE.Vector3(1.0, 0.35, 0.65).normalize()

const ATMOSPHERE_SCALE = 1.15
const EARTH_TILT = THREE.MathUtils.degToRad(23.4)

// Speeds in radians per second
const EARTH_SPIN = 0.045
const CLOUD_SPIN = 0.06
const MOON_SPIN = 0.05

// Layout for wide screens and phones
const LAYOUT = {
  // The Moon sits just in front of the Earth's upper-right edge (relative to the Earth's centre)
  desktop: { earthX: 2.6, earthY: 0, earthRadius: 3, moon: { x: 1.7, y: 2.05, z: 2.0, radius: 0.34 }, cameraZ: 8 },
  // Phones: the Earth rises from the bottom-right corner, leaving the text on clear space (no room for the Moon)
  mobile: { earthX: 1.3, earthY: -3.3, earthRadius: 2.3, moon: null, cameraZ: 6.5 },
}

export function initHeroScene(container: HTMLElement) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isMobile = () => window.innerWidth < 768

  // ── Renderer ──
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile() ? 1.5 : 2))
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.2
  const canvas = renderer.domElement
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;opacity:0;transition:opacity 1.2s ease'
  container.style.position = 'relative'
  container.appendChild(canvas)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 2000)

  // ── Textures (fade the scene in once they're all ready, rather than popping in piece by piece) ──
  const manager = new THREE.LoadingManager(() => { canvas.style.opacity = '1' })
  const loader = new THREE.TextureLoader(manager)
  const anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8)
  const load = (url: string, color: boolean) => {
    const texture = loader.load(url)
    texture.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace
    texture.anisotropy = anisotropy
    return texture
  }
  const dayMap = load(dayUrl, true)
  const nightMap = load(nightUrl, true)
  const oceanMap = load(oceanUrl, false)
  const cloudMap = load(cloudsUrl, false)
  const moonMap = load(moonUrl, true)

  // ── Lights (for the clouds and the Moon; the Earth's own shader uses SUN_DIRECTION directly) ──
  const sun = new THREE.DirectionalLight(0xffffff, 2.4)
  sun.position.copy(SUN_DIRECTION).multiplyScalar(50)
  scene.add(sun, new THREE.AmbientLight(0x30405a, 0.25))

  // ── Earth ──
  const earthSystem = new THREE.Group() // positioned on screen; holds the tilted Earth and the Moon's orbit
  const tilted = new THREE.Group()
  tilted.rotation.z = EARTH_TILT
  earthSystem.add(tilted)
  scene.add(earthSystem)

  const sphere = new THREE.SphereGeometry(1, 128, 64)

  const earthUniforms = {
    dayMap: { value: dayMap },
    nightMap: { value: nightMap },
    oceanMap: { value: oceanMap },
    cloudMap: { value: cloudMap },
    sunDirection: { value: SUN_DIRECTION },
    cloudOffset: { value: 0 },
  }
  const earth = new THREE.Mesh(sphere, new THREE.ShaderMaterial({
    vertexShader: earthVert,
    fragmentShader: earthFrag,
    uniforms: earthUniforms,
  }))
  tilted.add(earth)

  const clouds = new THREE.Mesh(sphere, new THREE.MeshStandardMaterial({
    color: 0xffffff,
    alphaMap: cloudMap,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    roughness: 1,
    metalness: 0,
  }))
  clouds.scale.setScalar(1.008)
  tilted.add(clouds)

  const atmosphere = new THREE.Mesh(sphere, new THREE.ShaderMaterial({
    vertexShader: atmosphereVert,
    fragmentShader: atmosphereFrag,
    uniforms: {
      sunDirection: { value: SUN_DIRECTION },
      edge: { value: Math.sqrt(1 - 1 / (ATMOSPHERE_SCALE * ATMOSPHERE_SCALE)) },
    },
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
  }))
  atmosphere.scale.setScalar(ATMOSPHERE_SCALE)
  earthSystem.add(atmosphere)

  // ── Moon: a fixed spot with a slow drift (a full orbit doesn't fit beside an Earth this size without
  // hiding behind it or crossing the text) ──
  const moon = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 32), new THREE.MeshStandardMaterial({ map: moonMap, roughness: 1, metalness: 0 }))
  earthSystem.add(moon)

  // ── Stars: round, soft, varied in size and colour, gently twinkling ──
  const STAR_COUNT = isMobile() ? 1400 : 2600
  const positions = new Float32Array(STAR_COUNT * 3)
  const sizes = new Float32Array(STAR_COUNT)
  const phases = new Float32Array(STAR_COUNT)
  const tints = new Float32Array(STAR_COUNT * 3)
  const palette = [new THREE.Color(0xffffff), new THREE.Color(0xcfe0ff), new THREE.Color(0xffe9c7), new THREE.Color(0xbfd4ff)]
  for (let i = 0; i < STAR_COUNT; i++) {
    // Random point on a thick shell around the scene
    const r = 400 + Math.random() * 500
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions.set([r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi)], i * 3)
    // Mostly small stars, a few bright ones
    const big = Math.random()
    sizes[i] = big > 0.985 ? 5 : big > 0.9 ? 3.4 : 1.8 + Math.random() * 1.2
    phases[i] = Math.random()
    const c = palette[Math.floor(Math.random() * palette.length)]
    const brightness = 0.7 + Math.random() * 0.5
    tints.set([c.r * brightness, c.g * brightness, c.b * brightness], i * 3)
  }
  const starGeometry = new THREE.BufferGeometry()
  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
  starGeometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1))
  starGeometry.setAttribute('tint', new THREE.BufferAttribute(tints, 3))
  const starUniforms = { time: { value: 0 }, pixelRatio: { value: renderer.getPixelRatio() } }
  const stars = new THREE.Points(starGeometry, new THREE.ShaderMaterial({
    vertexShader: starsVert,
    fragmentShader: starsFrag,
    uniforms: starUniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }))
  scene.add(stars)

  // ── Layout ──
  const applyLayout = () => {
    const l = isMobile() ? LAYOUT.mobile : LAYOUT.desktop
    earthSystem.position.set(l.earthX, l.earthY, 0)
    tilted.scale.setScalar(l.earthRadius)
    atmosphere.scale.setScalar(l.earthRadius * ATMOSPHERE_SCALE)
    moon.visible = Boolean(l.moon)
    if (l.moon) moon.scale.setScalar(l.moon.radius)
    camera.position.set(0, 0, l.cameraZ)
  }
  applyLayout()

  const resize = () => {
    const w = container.clientWidth
    const h = container.clientHeight
    if (!w || !h) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    applyLayout()
  }
  new ResizeObserver(resize).observe(container)

  // ── Gentle camera drift toward the pointer (off for visitors who prefer less motion) ──
  const pointer = { x: 0, y: 0 }
  if (!reducedMotion) {
    window.addEventListener('pointermove', e => {
      pointer.x = e.clientX / window.innerWidth - 0.5
      pointer.y = e.clientY / window.innerHeight - 0.5
    }, { passive: true })
  }

  // ── Animation: only while the hero is on screen ──
  const clock = new THREE.Clock()
  const motion = reducedMotion ? 0.3 : 1
  const tick = () => {
    const dt = Math.min(clock.getDelta(), 0.1)
    const t = clock.elapsedTime

    earth.rotation.y += EARTH_SPIN * motion * dt
    clouds.rotation.y += CLOUD_SPIN * motion * dt
    const l = isMobile() ? LAYOUT.mobile : LAYOUT.desktop
    if (l.moon) {
      // Gentle floating drift around its spot
      const drift = reducedMotion ? 0 : t
      moon.position.set(l.moon.x + Math.sin(drift * 0.11) * 0.35, l.moon.y + Math.sin(drift * 0.07) * 0.18, l.moon.z)
      moon.rotation.y += MOON_SPIN * motion * dt
    }
    // Cloud shadows on the surface follow the cloud layer
    earthUniforms.cloudOffset.value = -((clouds.rotation.y - earth.rotation.y) / (Math.PI * 2))
    starUniforms.time.value = t
    stars.rotation.y = t * 0.002

    camera.position.x += (pointer.x * 0.5 - camera.position.x) * 0.04
    camera.position.y += (-pointer.y * 0.3 - camera.position.y) * 0.04
    camera.position.z = l.cameraZ
    camera.lookAt(0, l.earthY * 0.15, 0)

    renderer.render(scene, camera)
  }

  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      clock.getDelta() // don't jump forward after being paused
      renderer.setAnimationLoop(tick)
    } else {
      renderer.setAnimationLoop(null)
    }
  }).observe(container)
}
