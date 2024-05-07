"use strict";

// console.log(document.querySelector('h1').style);

// document.querySelector('button').onclick = () => {
//   document.querySelector('h1').style.color = "red";
//   document.querySelector('h1').style.backgroundColor = "green";
// }



// const btn = document.querySelector('button');
// const menu = document.querySelector('menu');
// btn.onclick = ()=>{
//   if (!menu.className ) {
//     document.querySelector('menu').classList.add("open");
//   }else{
//     document.querySelector('menu').classList.remove("open");
//   }
// }
// const text  = document.querySelector('h1');
// const changed = ()=>{
//     text.className = 'info'
// }
// btn.onclick = changed;


// const titleBtn = document.querySelector('.title');
// const accardion = document.querySelector('.accardion');
// titleBtn.onclick = ()=>{
//   if (accardion.style.height === "50px") {
//     accardion.style.height = "350px";
//   }else{
//     accardion.style.height = "50px";
//   }
// }


// document.querySelector('button').onclick=()=>{
//   document.querySelector('h1').classList.toggle('red')
// }



const btn = document.querySelector('#modeBtn');
const nav = document.querySelector('nav');

const mode = ()=>{
        if (btn.innerHTML === "Dark") {
          btn.innerHTML = "Light";
          nav.className = "navbar navbar-expand-lg bg-dark navbar-dark"
        }else{
          nav.className = "navbar navbar-expand-lg bg-light navbar-light"
          
          btn.innerHTML = "Dark";
        }
}

btn.onclick = mode;

const a  = [{a:"a"}];


console.log(...a);