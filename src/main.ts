import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import * as THREE from 'three'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import earth from './assets/earth.jpg'
import moon  from './assets/moon.jpg'
const scene =  new THREE.Scene();
const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1,1000);


const renderer = new THREE.WebGLRenderer({
    antialias:true,
    alpha:true,
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
//document.body.appendChild(renderer.domElement)

//add moon 

const moonGroup = new THREE.Group();
scene.add(moonGroup);



const moonMesh = new THREE.Mesh(new THREE.SphereGeometry(5,50,50),
 new THREE.ShaderMaterial({
 vertexShader: vertexShader,
 fragmentShader,
 uniforms: {
    globeTexture: {
        value: new THREE.TextureLoader().load(moon)
    }
 }
}))

moonMesh.position.set(10,0,0)
moonMesh.scale.setScalar(0.27)
moonGroup.add(moonMesh)

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
scene.add(earthGroup)
earthGroup.add(sphere)
camera.position.z = 25


function animate () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
 
 scene.rotation.x = Math.PI/6
 
    sphere.rotation.y += 0.001

moonGroup.rotation.y +=0.006 
}
animate()



createApp(App).mount('#app')
 
document.querySelector('#spaceHero')?.appendChild(renderer.domElement)
const canvas = document.querySelector('canvas') as HTMLCanvasElement;
canvas.style.position = 'absolute';
canvas.style.left = '30%'
canvas.style.top = '100%';
 
