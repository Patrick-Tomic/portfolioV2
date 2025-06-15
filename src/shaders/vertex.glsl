//need a vertex and fragment shader in order for the main shader program to work.

//typed language. 
void main() {

    gl_Position = projectionMatrix * modelViewMatric *vec4(position,1)
    //gl_Position = vec4(position,1);

}
//vec3 is = to (0,1,0) in the shader language