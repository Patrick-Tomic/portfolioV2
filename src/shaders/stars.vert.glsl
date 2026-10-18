// Star field: each star has its own size, colour and twinkle timing
attribute float size;
attribute float phase;
attribute vec3 tint;
uniform float time;
uniform float pixelRatio;
varying vec3 vTint;
varying float vTwinkle;

void main() {
  vTint = tint;
  vTwinkle = 0.7 + 0.3 * sin(time * (0.6 + phase * 0.15) + phase * 6.2831);
  vec4 viewPos = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * viewPos;
  gl_PointSize = size * pixelRatio;
}
