import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import * as THREE from 'three'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import earth from './assets/earth.jpg'
const scene =  new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000);
const canvas: any = document.querySelector('canvas')
const renderer = new THREE.WebGLRenderer({
    antialias:true
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)

const sphere = new THREE.Mesh(new THREE.SphereGeometry(5,50,50),
 new THREE.ShaderMaterial({
 vertexShader,
 fragmentShader
}))
scene.add(sphere)

camera.position.z = 30


function animate () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()



createApp(App).mount('#app')

