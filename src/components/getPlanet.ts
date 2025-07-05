import * as THREE from 'three';
 import vertexShader from '../shaders/vertex.glsl'
import fragmentShader from '../shaders/fragment.glsl'
 
const geo = new THREE.IcosahedronGeometry(1, 6);
export default function getPlanet(src: any, distance: any,  size: number,children: any[] = []  ){
  const group = new THREE.Group()
 
 const mat =  new THREE.ShaderMaterial({
 vertexShader: vertexShader,
 fragmentShader,
 uniforms: {
    globeTexture: {
        value: new THREE.TextureLoader().load(src)
    }
 }
})
    const sphere = new THREE.Mesh(geo, mat)
const angle = 50 //Math.random() * Math.PI * 2;
console.log(src)
children.forEach((child) => {
  child.position.x = Math.cos(angle)* distance
child.positon.z = Math.sin(angle) *distance
group.add(child)
})
sphere.position.x = Math.cos(angle)* distance

sphere.scale.setScalar(size)

console.log(sphere)
group.add(sphere)
return group
}