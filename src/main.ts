import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import * as THREE from 'three'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import earth from './assets/earth.jpg'
const scene =  new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000);


const renderer = new THREE.WebGLRenderer({
    antialias:true,
    alpha:true,
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
//document.body.appendChild(renderer.domElement)

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
scene.add(sphere)

camera.position.z = 25


function animate () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    sphere.rotation.y += 0.005
}
animate()



createApp(App).mount('#app')

document.querySelector('#spaceHero')?.appendChild(renderer.domElement)
const canvas = document.querySelector('canvas') as HTMLCanvasElement;
canvas.style.position = 'absolute';
canvas.style.left = '30%'
canvas.style.top = '100%';
