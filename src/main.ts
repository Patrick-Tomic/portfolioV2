import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import * as THREE from 'three'
import sunVertex from './shaders/sunVertex.glsl'
import sunFragment from './shaders/sunFragment.glsl'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import sun from './assets/sun.jpg'
import earth from './assets/earth.jpg'
import moon  from './assets/moon.jpg'
import mercury from './assets/mercury.jpg'
import venus from './assets/venus.jpg'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import getPlanet from './components/getPlanet'
const scene =  new THREE.Scene();
const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1,1000);

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

moonMesh.position.set(2,0,0)
moonMesh.scale.setScalar(0.05)
moonGroup.add(moonMesh)
 
const sunSphere = new THREE.Mesh(new THREE.SphereGeometry(5,100,100), new THREE.ShaderMaterial({
vertexShader: sunVertex,
fragmentShader: sunFragment,
uniforms:{
    globeTexture: {
        value: new THREE.TextureLoader().load(sun)
    }
}
}))
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


const sunGeometry = new THREE.SphereGeometry(5,100,100)
const sunMaterial = new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(sun)})
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial)
const solarSystem = new THREE.Group()

scene.add(solarSystem)
solarSystem.add(sunSphere) 

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
const angle =6;
console.log(angle)
earthGroup.position.x = Math.cos(angle) * 22 
earthGroup.position.z = Math.sin(angle) * 17;
sphere.scale.setScalar(0.225)
earthGroup.add(sphere)
earthGroup.add(moonGroup)
solarSystem.add(earthGroup)
camera.position.z = 12

//add mercury
const mercur = getPlanet(mercury, .25 ,0.2 )
 mercur.position.z = Math.sin(1) * 7.5;
mercur.position.x = Math.cos(angle) * 7.5;
solarSystem.add(mercur)
solarSystem.position.x = -15
const venu = getPlanet(venus, 2.75, .75)
solarSystem.add(venu)
venu.position.x = Math.cos(angle) * 10;
venu.position.z = Math.sin(5) * 10;
function animate () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
 
 scene.rotation.x = Math.PI/6
    sunSphere.rotation.x += 0.0005
    sphere.rotation.y += 0.001
venu.rotation.x+= 0.005
moonGroup.rotation.y +=0.003 
 solarSystem.rotation.y += 0.0001
}
animate()



createApp(App).mount('#app')
 
document.querySelector('#spaceHero')?.appendChild(renderer.domElement)
const canvas = document.querySelector('canvas') as HTMLCanvasElement;
canvas.style.position = 'absolute';

canvas.style.top = '100%';
canvas.style.width= '1900px'

