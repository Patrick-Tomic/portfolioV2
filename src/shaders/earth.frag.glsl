// Earth surface: sunlit day side, city lights on the night side, ocean glint, cloud shadows and a thin
// atmosphere tint around the edge. Colour textures arrive in linear space; three.js converts the output.
uniform sampler2D dayMap;
uniform sampler2D nightMap;
uniform sampler2D oceanMap;   // white = water (for the sun's reflection)
uniform sampler2D cloudMap;   // white = cloud (for the shadows they cast)
uniform vec3 sunDirection;    // world space, normalised
uniform float cloudOffset;    // how far the cloud layer has drifted, so its shadows follow

varying vec2 vUv;
varying vec3 vNormalW;
varying vec3 vPosW;

void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vPosW);
  vec3 L = normalize(sunDirection);
  float NdotL = dot(N, L);

  float daylight = smoothstep(-0.1, 0.55, NdotL);   // soft day/night edge
  float dusk = smoothstep(-0.3, 0.2, NdotL);

  vec3 day = texture2D(dayMap, vUv).rgb;
  vec3 night = texture2D(nightMap, vUv).rgb;
  float ocean = texture2D(oceanMap, vUv).r;
  float cloud = texture2D(cloudMap, vUv + vec2(cloudOffset, 0.0)).r;

  day *= 1.0 - cloud * 0.3;                           // cloud shadows
  vec3 color = day * (daylight * 1.75 + 0.02);

  // City lights fade in past the day/night edge
  color += night * vec3(1.0, 0.78, 0.52) * pow(1.0 - dusk, 1.5) * 1.4;

  // Sun glinting off the oceans
  vec3 H = normalize(L + V);
  float glint = pow(max(dot(N, H), 0.0), 160.0) * ocean * daylight;
  color += vec3(0.85, 0.9, 1.0) * glint * 0.35;

  // Atmosphere: blue haze toward the edge on the lit side, warm at the day/night line
  float rim = pow(1.0 - max(dot(N, V), 0.0), 2.8);
  vec3 haze = mix(vec3(1.0, 0.55, 0.3), vec3(0.35, 0.65, 1.0), smoothstep(-0.1, 0.35, NdotL));
  color += haze * rim * smoothstep(-0.35, 0.3, NdotL) * 0.85;

  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
