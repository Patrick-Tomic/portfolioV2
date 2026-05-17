import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import * as THREE from 'three'

import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

import earth from './assets/earth.jpg'
import moon  from './assets/moon.jpg'


const scene =  new THREE.Scene();
const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, .1,1000);

const renderer = new THREE.WebGLRenderer({
    antialias:true,
   
})
//const controls = new OrbitControls( camera, renderer.domElement );
//controls.update()
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
 

//document.body.appendChild(renderer.domElement)

//add moon 
 
const moonGroup = new THREE.Group();
 


const moonMesh = new THREE.Mesh(new THREE.SphereGeometry(5,10,50),
 new THREE.ShaderMaterial({
 vertexShader: vertexShader,
 fragmentShader,
 uniforms: {
    globeTexture: {
        value: new THREE.TextureLoader().load(moon)
    }
 }
}))

moonMesh.position.set(4.5, 0, 0)
moonMesh.scale.setScalar(0.08)
moonGroup.add(moonMesh)
 

//add stars
const starGeo = new THREE.BufferGeometry()
const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff
})
const starVertices = []
for(let i = 0; i < 10000; i++){
    const x =(Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = -Math.random()   * 2000
    starVertices.push(x,y,z)
}
starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))
const stars = new THREE.Points(starGeo, starMaterial)
scene.add(stars)



const solarSystem = new THREE.Group()

scene.add(solarSystem)


const earthGroup = new THREE.Group()

 const sphere = new THREE.Mesh(new THREE.SphereGeometry(5,50,50),
 new THREE.ShaderMaterial({
 vertexShader: vertexShader,
 fragmentShader,
 uniforms: {
    globeTexture: {
        value: new THREE.TextureLoader().load(earth)
    }
 }
}))
earthGroup.position.set(2.5, 0, 0)
sphere.scale.setScalar(0.6)
earthGroup.add(sphere)
earthGroup.add(moonGroup)
solarSystem.add(earthGroup)
camera.position.z = 8



createApp(App).mount('#app')

const spaceHero = document.querySelector('#spaceHero') as HTMLElement
spaceHero.style.position = 'relative'
spaceHero.appendChild(renderer.domElement)

const w = spaceHero.clientWidth
const h = spaceHero.clientHeight
renderer.setSize(w, h)
camera.aspect = w / h
camera.updateProjectionMatrix()

const canvas = renderer.domElement
canvas.style.position = 'absolute'
canvas.style.top = '0'
canvas.style.left = '0'
canvas.style.width = '100%'
canvas.style.height = '100%'

function animate() {
  requestAnimationFrame(animate)
  earthGroup.rotation.y += 0.002
  moonGroup.rotation.y += 0.005
  renderer.render(scene, camera)
}
animate()

