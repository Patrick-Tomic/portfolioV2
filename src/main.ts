import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import * as THREE from 'three'

const scene =  new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000);
const canvas: any = document.querySelector('canvas')
const renderer = new THREE.WebGLRenderer()
renderer.setSize(5000,5000)
canvas?.appendChild(renderer.domElement)

const sphere = new THREE.Mesh(new THREE.SphereGeometry(5,50,50), new THREE.MeshBasicMaterial({
color: 0xff0000
}))
scene.add(sphere)

camera.position.z = 15


function animate () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()



createApp(App).mount('#app')

