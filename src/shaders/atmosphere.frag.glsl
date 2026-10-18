// Brightest just outside the planet's edge, fading to nothing at the shell's edge; stronger on the lit side
uniform vec3 sunDirection;
uniform float edge;          // how far "inside" the shell the planet's edge sits (depends on shell size)
varying vec3 vNormalV;
varying vec3 vPosV;
varying vec3 vNormalW;

void main() {
  vec3 V = normalize(-vPosV);
  float inward = clamp(-dot(normalize(vNormalV), V) / edge, 0.0, 1.0);
  float glow = pow(inward, 2.2);
  float lit = 0.25 + 0.75 * smoothstep(-0.35, 0.6, dot(normalize(vNormalW), normalize(sunDirection)));
  gl_FragColor = vec4(vec3(0.3, 0.6, 1.0) * glow * lit * 1.1, 1.0);
}
