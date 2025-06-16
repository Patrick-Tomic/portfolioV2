//need a vertex and fragment shader in order for the main shader program to work.
varying vec2 vertexUV;
//typed language. 
void main() {
    vertexUV = uv;
    gl_Position = projectionMatrix * modelViewMatrix *vec4(position,1.0);

    
    //gl_Position = vec4(position,1);

}
//vec3 is = to (0,1,0) in the shader language