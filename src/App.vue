<script setup lang="ts">

import node from './assets/node.png'
import space from './assets/space.png'
import { ref } from 'vue';
import vue from './assets/vue.png'
import express from './assets/express.png'
import mongo from './assets/mongo.png'
import postgres from './assets/postgres.png'
import react from './assets/react.png'
import next from './assets/next.png'
import AS3 from './assets/AS3.png'
import sql from './assets/sql.png'
import python from './assets/python.png'
import css from './assets/css.png'
import html from './assets/html.png'
import jest from './assets/jest.png'
import java from './assets/java.png'
import javascript from './assets/javascript.png'
import csharp from './assets/csharp.png'
import gradMe from '/src/assets/gradME.png'
 
const priceOptions = ['singlePage','multiPage','fullStack','mobile']
const imgList = [
  {src:node, alt:'node'},
  {src:vue, alt:'vue'},
  {src:express, alt:'express'},
  {src:mongo, alt:'mongo'},
  {src:postgres, alt:'postgres'},
  {src: react, alt:'react'},
  {src:next, alt:'next'},
  {src:AS3, alt:'AS3'},
  {src:sql, alt:'sql'},
  {src:python, alt:'python'},
  {src:css, alt:'css'},
  {src:html, alt:'html'},
  {src: jest, alt: 'jest'},
  {src:java, alt:'java'},
  {src: javascript, alt:'javascript'},
  {src:csharp, alt:'c#'},
]
let count = ref(0)
let viewPointWidth = (window.innerWidth /100) *10
const wrap: any = document.getElementById('wrap');
//for tool HR element animation
const scrollInterval = setInterval(() => {
  const scrollBar: any = document.getElementById('scrollBar');
 
   
   if(count.value >= imgList.length+1){
    scrollBar.style.transform = `translateX(0px)`;
    scrollBar.style.transition = 'none';
    count.value = 0
  }else{
    scrollBar.style.transition = 'transform 0.5s ease-in-out';

      scrollBar.style.transform = `translateX(-${viewPointWidth * count.value}px)`;
    count.value++
    
    }
}, 750);


//state for project visibility
const xbnVisible = ref(true); // Define 'type' as a reactive property
const growwrVisible = ref(false)
const battleshipVisible = ref(false)
// Function to change project visibility based on the selected project
  const projectChange: any =   (ref: any) => {
 if(ref == 'xbn'){
  xbnVisible.value = true;
  growwrVisible.value = false;
  battleshipVisible.value = false;
}else if(ref == 'growwr'){
  xbnVisible.value = false;
  growwrVisible.value = true;
  battleshipVisible.value = false;
}
else if(ref == 'battleship'){
  xbnVisible.value =false;
  growwrVisible.value = false;
  battleshipVisible.value = true;
}
}
/*const apiCall = async () => {
 // const email: any = document.querySelector('input[name="email"]')?.value;
  //const name:any = document.querySelector('input[name="name"]')?.value;
 // const subject:any = document.querySelector('input[name="subject"]')?.value;
 // //const message:any = document.querySelector('textarea[name="text"]')?.value;
  if (!email || !name || !subject || !message) {
    alert('Please fill in all fields');
    return;
  }
  if (!email.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }
  if (message.length < 10) {
    alert('Message must be at least 10 characters long');
    return;
  }
  if (message.length > 500) {
    alert('Message must be less than 500 characters');
    return;
  }
  if (name.length < 2) {
    alert('Name must be at least 2 characters long');
    return;
  }
  if (name.length > 50) {
    alert('Name must be less than 50 characters');
    return;
  }
  if (subject.length < 2) {
    alert('Subject must be at least 2 characters long');
    return;
  }
  try{
  const response = await fetch(`${process.env.backendLink}/api/email`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      name: name ,
      subject: subject,
      message: message,
    })
  });
  const data = await response.json();
  console.log(data);
}catch(err){
  console.log(err);
}

}
*/



  // Start the animation
  

const headerA = ref('Hi, my name is Patrick Emanuel ');
const headerB = ref(' I am an Independent Software Engineer From Tampa, FL')
const displayedA = ref('')
const displayedB = ref('')
const showCursor = ref(false)
const isTyping = ref(false)
 
const typingSpeef = ref(30)
const isClicked = ref(false)
 
 
const animateReplacement: any = (header: any,displayed: any ) => {
  isClicked.value = true
  if(isTyping.value) return;
 
  displayed.value = '';
  isTyping.value = true
  showCursor.value = true;
  let index = 0;

  const typeWriter = () => {
    if( index < header.value.length) {
      displayed.value += header.value.charAt(index);
      index++;
      setTimeout(typeWriter, typingSpeef.value);
    }else {
      isTyping.value = false;
      showCursor.value = false;
      isClicked.value = false
    }
  }
  if(isTyping.value)
  typeWriter();
  
}
animateReplacement(headerA, displayedA ) 
setTimeout(()=> {
  animateReplacement(headerB, displayedB )
   
},1500)
 
 
const buttonClickA = () => {
  headerA.value = 'Hi my name is Patrick Emanuel'
displayedA.value = ''
animateReplacement(headerA,displayedA)
displayedB.value = ''
headerB.value = 'I am an independent Software Engineer From Tampa, FL'
setTimeout(()=> {
  animateReplacement(headerB, displayedB )
},1500)
}

 const buttonClickB = () => {
headerA.value = 'Graduated from The University of South Florida in 2024 with my Bachelors of Information Science.'
displayedA.value = ''
animateReplacement(headerA,displayedA)
displayedB.value = ''
headerB.value = 'Furthering my education each day is a life long goal. Intently pursuing a Masters in Computer Science'
setTimeout(()=> {
  animateReplacement(headerB, displayedB )
   
},3500)
 }
 
</script>
 
 

<template class="bg-[#12CFCF] m-0 p-0" >
  <main class=" flex flex-col">
    <div id="base" class=" m-0 font-bold bg-[#1193d9] text-white grid-cols-2 grid grid-rows-3   h-[198vh]   ">
      
        <div class="p-[10vw] text-white font-bold text-3xl">
        <p id='headerA'class="headerA mb-10 font-[1000] text-[#fff]">{{displayedA}}</p>
        <p id="headerB" class="headerB text-2xl font-[1000] text-[#fff] w-[30vw]">
       {{ displayedB }}
        </p> 
        <div id="summaryButtons" class="absolute w-[10vw] flex justify-around left-[50%] top-[80%]">
          <button @click="buttonClickA" onclick="{{ 
               base.style.backgroundColor = '#1193d9'
                  headerA.style.color = 'white'
                  headerB.style.color = 'white'
            }}" :disabled="isClicked"   class="bg-[#ffffff] text-[#ffffff] "> x </button>
                  <button @click="buttonClickB" :disabled="isClicked" onclick="{{
                  base.style.backgroundColor = '#AFE1AF'
                  headerA.style.color = 'black'
                  headerB.style.color = 'black'
                 const moji =  document.querySelector('.moji')
                 console.log(moji.src)
                 moji.src = '/src/assets/gradME.png'
                  }}"
                   class="bg-[#ffffff] text-[#ffffff] "> x </button>
                   
                    <button   class="bg-[#ffffff] text-[#ffffff] "> x </button>
                </div>
        <div>

        </div>
      </div>
        <img  src="/src/assets/me.jpeg" alt="" class="moji w-[20vw] ml-[10vw] mt-[10vh] grid-rows-4 ">
      
   
      
      <div id="contact" class="w-[98.5vw] grid grid-cols-2 text-3xl mt-[32vh]  p-40">
      <div id="spaceHero" class="flex w-[100%] items-center" >
<p class="min-w-[30vw] ml-[10vw] mb-[20vh]  text-[#fff] col-span-2">From concept to deployment, 
                                                    starting from scratch, or rebuilding the brand. We deliver tailored solutions that scale with your business,<br> If you can imagine it; <b> We can build it</b>  </p>
      </div>
      
  
   </div >
    </div>
    <div id='workContainer' class="flex flex-col m-0 p-0">
      <p class=" h-[15vh] m-0 bg-[#FFFFFF] text-[#000000]  mt-[]">  Browse Portfolio</p>
    <div class="flex w-[100%] h-[77vh] ">
    
    <ul class="w-[45%] text-xl font-bold ">
      <li @click="projectChange('xbn')" class="cursor-pointer mb-[10vh]"   >
       Xtreme Body Nutrition
      </li>
      <li @click="projectChange('growwr')" class="cursor-pointer mb-[10vh]">
       Growwr
      </li>
      <li @click="projectChange('battleship')" class="cursor-pointer mb-[10vh]"   >
       BattleShip
      </li>
    </ul>
    <div   >
      <img v-if="battleshipVisible" class="  w-[75vw]  " id="battleship" src="./assets/battleship.png" alt="">
      <img v-if="growwrVisible" class=" w-[75vw]" id="growwr" src="./assets/growwr.png" alt="">
      <img v-if="xbnVisible" class="  w-[75vw]" id="xbn" src="./assets/XBN.png" alt="">
    </div>
   </div>
   <div id="wrap" class="  mt-[0vh] left-0 w-[100%] flex bg-[#fff] ">
        <div id="scrollBar" class="w-[100%] flex bg-[#fff] p-[2vw]" >
          <img class="w-[5vw] mr-[5vw] h-[100%] rounded-full" v-for="image in imgList" :src="image.src" :alt="image.alt" />
          <img class="w-[5vw] mr-[5vw] h-[100%] rounded-full" v-for="image in imgList" :src="image.src" :alt="image.alt" />
        </div>
      </div>
      <div class="h-[100vh]" id='options'>
        <p class="text-center">Pricing and Packages </p>
        <div id="appOption" class="flex m-[100px] ml-[10vw] text-[#000000] bg-[#ffffff] w-[75vw] h-[50vh] border-2 border-black border-solid">
            <div class="flex flex-col p-[2vw] ">
              <h1>Overview</h1>
              <p class="text-base">When working with customers, we aim for the <b>smoothest</b> service possible from development through deployment. 
                We can assist with any questions on our packages and what next steps are needed for your application and software needs</p>
                <div id="priceButtons">
                  <button v-for="id in priceOptions" :id="id" class="bg-[#ffffff] text-[#ffffff] "> x </button>
                </div>
            </div>
            <img class="w-[35vw] border-l-2 border-l-solid border-black" src="./assets/options.png" alt="">
        </div>

      </div>
   </div>
       
   <div id="contactForm" class="border-2 border-black border-solid">
    <form  action="" >
      <div class="ml-10">
        <label for="name">Full Name</label>
        <input class="border-2 border-[#000] border-solid" name="name" type="text">
      </div>
      <div>
        <label for="email">Email</label>
        <input name="email" class="border-2 border-[#000] border-solid" type="email">
      </div>
      <div >
        <label for="subject">Subject</label>
        <input name="subject" class="border-2  border-[#000] border-solid" type="text">
      </div>
      <div >
        <label for="text">Message</label>
        <textarea name="text" class="border-2 border-[#000] border-solid" id="messageBox"></textarea>
      </div>
     <button @click="">
      Enter
     </button>
    </form>
   </div>
  
    
  </main>
</template>

<style scoped lang="scss">
 #app{
  margin: 0;
  padding: 0;
 }
 #spaceHero{
  overflow: hidden;
 }
*{
 
  font-size: 24px;
  font-family: 'inter', sans-serif;
}
#wrap{
  overflow:hidden;
  #scrollBar{
  transition: all 0.5s ease-in-out;

}
}
#workContainer{
  background: linear-gradient(to bottom, #0b0c10, #1f2833, #45a29e);
  color: white;
  p{
    
  }
}
#contactForm{
  width: auto;
}
#contact{
  
  overflow: hidden;
 // background-image: url(./assets/space.png);
  
  height: 100vh;
}

 html,body{
  margin:0px;
  padding:0px;
 }
#base{
transition: all ease-in-out 0.5s;
  margin:0px;
  padding:0px;
 
  span{
    bottom: -1em;
    opacity:0;
    animation: move-text .75s forwards;
    animation-delay:3s;
  }
  p{
    animation: opacity 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
  }
  .headerA{
    width: 25vw;
  }
img{

  border-radius:5%;
  //bounce animation ***
  animation: user .3s;
    animation-direction: alternate;
    animation-iteration-count: 1;
}
  
}
button{
  
    border-radius: 100%;
  }
#priceButtons{
  button{
    width: 25px;
    border-radius: 100%;
  }
}
@keyframes opacity {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
  
}
@keyframes user{ ///source of bounce
  
    0%{ 
     
  transform: scale3d(0,0,0);

 
  }
 
    100%{
     
      transform: scale3d(1, 1, 1);
  
    
    }  

    
}
@keyframes move-text {
  0% {
    bottom: -0.2em;
    opacity: 1;
   
  }
  
  50% {
    bottom: 0.2em;
   
  }

  100% {
    bottom: 0;
    opacity: 1;
   
  }
}
@media (min-width: 1024px) {

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

   
}
</style>
