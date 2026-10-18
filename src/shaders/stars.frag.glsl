// Round, soft-edged stars instead of square points
varying vec3 vTint;
varying float vTwinkle;

void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d);
  gl_FragColor = vec4(vTint, a * a * vTwinkle);
}
