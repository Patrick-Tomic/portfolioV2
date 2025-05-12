<script setup lang="ts">

import node from './assets/node.png'
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
wrap?.addEventListener('mouseover', () => {
  clearInterval(scrollInterval);
});
const xbnVisible = ref(true); // Define 'type' as a reactive property
const growwrVisible = ref(false)
const battleshipVisible = ref(false)
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
const apiCall = async () => {
  const email: any = document.querySelector('input[name="email"]')?.value;
  const name:any = document.querySelector('input[name="name"]')?.value;
  const subject:any = document.querySelector('input[name="subject"]')?.value;
  const message:any = document.querySelector('textarea[name="text"]')?.value;
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
</script>
 
 

<template class="bg-[#12CFCF] m-0 p-0" >
  <main class="  m-0">
    <div id="base" class=" border-2 border-black border-solid font-bold bg-[#1193d9] text-white grid-cols-2 grid grid-rows-3   h-[100%]  text-4xl ">
      
        <div class="p-40">
        <p class="headerA mb-10"> Hi, my name is Patrick Emanuel Tomic. </p>
        <p class="text-2xl w-[30vw]">
        I'm an Independent Software Engineer Consultant from Tampa, Fl
        </p>
      </div>
        <img src="./assets/me.jpeg" alt="" class="w-[20vw] ml-40 mt-40  grid-rows-4 ">
      
      <div class="absolute top-[40%] left-[10%]">
        <p class="text-2xl p-40 ml-40">
         <span  v-bind:style ="{animationDelay: (0.5+0/10)+'s'}">S</span>
         <span v-bind:style ="{animationDelay: (0.5+1/10)+'s'}">C</span>
         <span v-bind:style ="{animationDelay: (0.5+2/10)+'s'}">R</span>
         <span v-bind:style ="{animationDelay: (0.5+3/10)+'s'}">O</span>
         <span v-bind:style ="{animationDelay: (0.5+4/10)+'s'}">L</span>
         <span v-bind:style ="{animationDelay: (0.5+5/10)+'s'}">L</span>
      </p></div>
      <hr id="firstHR" class="border-2 w-[100%] absolute top-[100%] left-0">
      <div id="contact" class="w-[100vw] grid grid-cols-2 text-3xl mt-[20vh] p-40">
      
      <p class="w-[40vw] col-span-2">From single-page websites to cloud-based applications, starting from scratch, or rebuilding the brand. I help anyone needing assistance with web projects; whatever your imagination thinks,<b> I can build it</b>  </p>
      <div id="wrap" class="absolute top-[190vh]  left-0 w-[100%] flex bg-white p-5">
        <div id="scrollBar" class="w-[100%] flex bg-white p-5" >
          <img class="w-[5vw] mr-[5vw] h-[100%] rounded-full" v-for="image in imgList" :src="image.src" :alt="image.alt" />
          <img class="w-[5vw] mr-[5vw] h-[100%] rounded-full" v-for="image in imgList" :src="image.src" :alt="image.alt" />
        </div>
      </div>
   </div>
   <div>
    <h1>
      
    </h1>
   </div>
   <hr class="w-[100%] p-0 col-span-2 border-black">
    
  
    </div>
    <div class="flex border-2 border-black border-solid w-[100%] h-[65vh] ">
    
    <ul class="w-[25%] text-xl font-bold ">
      <li @click="()=> {
        
      }" class="cursor-pointer mb-16"   >
       Xtreme Body Nutrition
      </li>
      <li @click="projectChange('growwr')" class="cursor-pointer mb-16">
       Growwr
      </li>
      <li @click="projectChange('battleship')" class="cursor-pointer mb-16"   >
       BattleShip
      </li>
    </ul>
    <div >
      <img v-if="battleshipVisible" class="  w-[75vw]" id="battleship" src="./assets/battleship.png" alt="">
      <img v-if="growwrVisible" class=" w-[75vw]" id="growwr" src="./assets/growwr.png" alt="">
      <img v-if="xbnVisible" class="  w-[75vw]" id="xbn" src="./assets/XBN.png" alt="">
    </div>
   </div>
   <div id="contactForm" class="border-2 border-black border-solid">
    <form action="">
      <div>
        <label for="name">Full Name</label>
        <input name="name" type="text">
      </div>
      <div >
        <label for="email">Email</label>
        <input name="email" type="email">
      </div>
      <div >
        <label for="subject">Subject</label>
        <input name="subject" type="text">
      </div>
      <div >
        <label for="text">Message</label>
        <textarea name="text" id="messageBox"></textarea>
      </div>
     <button @click="">
      Enter
     </button>
    </form>
    
   </div>
  </main>
</template>

<style scoped lang="scss">
#wrap{
  overflow:hidden;
  #scrollBar{
  transition: all 0.5s ease-in-out;

}
}

 html,body{
  margin:0px;
  padding:0px;
 }
#base{
  margin:0px;
  padding:0px;
  #firstHR{
    box-shadow:0px 5px 5px yellow;
  }
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
    width: 20vw;
  }
img{

  border-radius:5%;
  //bounce animation ***
  animation: user .3s;
    animation-direction: alternate;
    animation-iteration-count: 1;
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
