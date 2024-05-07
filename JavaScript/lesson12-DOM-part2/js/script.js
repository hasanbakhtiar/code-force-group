"use strict";

// console.log(document.querySelector('h1').style);

// document.querySelector('button').onclick = () => {
//   document.querySelector('h1').style.color = "red";
//   document.querySelector('h1').style.backgroundColor = "green";
// }



const btn = document.querySelector('button');
const menu = document.querySelector('menu');
btn.onclick = ()=>{
  if (!menu.className ) {
    document.querySelector('menu').classList.add("open");
  }else{
    document.querySelector('menu').classList.remove("open");
  }
}
// const text  = document.querySelector('h1');
// const changed = ()=>{
//     text.className = 'info'
// }
// btn.onclick = changed;

