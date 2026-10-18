// Glow shell around the Earth (drawn from the inside, slightly larger than the planet)
varying vec3 vNormalV;
varying vec3 vPosV;
varying vec3 vNormalW;

void main() {
  vNormalV = normalize(normalMatrix * normal);
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vec4 viewPos = modelViewMatrix * vec4(position, 1.0);
  vPosV = viewPos.xyz;
  gl_Position = projectionMatrix * viewPos;
}
