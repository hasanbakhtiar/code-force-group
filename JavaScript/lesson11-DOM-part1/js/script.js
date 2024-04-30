"use strict";
// DOM - Document Object Model 

// function changeData(p){
//   if (p=="my data") {
//     for(let a = 0;a<6;a++){
//       document.getElementsByClassName('demo')[a].innerHTML = p;

//     }
//   }else{
//     for(let a = 0;a<6;a++){
//       document.getElementsByClassName('demo')[a].innerHTML = "no result";

//     }
//   }
// }

// changeData("my daata");


// document.querySelectorAll('#li').innerHTML = "test";
// document.querySelector('#li').innerHTML = "test";



// const mytext = document.querySelector('h1');
// const mybtn = document.querySelector('button');

// const changeValue = () => {
//   if (mytext.innerHTML === "England") {
//     mytext.innerHTML = "London";
//     mybtn.innerHTML = "country"
//   } else {
//     mytext.innerHTML = "England";
//     mybtn.innerHTML = "capital"
//   }
// }


// mybtn.onclick = changeValue;

// document.querySelector('button').addEventListener("click",changeValue);


// const mytext = document.querySelector('h1');
// const mybtn = document.querySelector('button');


// mytext.innerText = "<h1>England</h1>";



import { lang } from "./langdata.js";

const navLink = document.querySelectorAll(".nav-link");
const langBtn = document.querySelector('#lang');

const changeLang = () => {
  const dataLang = (data,btnval) => {
    if (langBtn.innerHTML === btnval[0]) {
      data.az.map((item, c) => {
        navLink[c].innerHTML = item;
      })
      langBtn.innerHTML = btnval[1];
    }else if(langBtn.innerHTML === btnval[1]){
      data.en.map((item, c) => {
        navLink[c].innerHTML = item;
      })
      langBtn.innerHTML = btnval[2];
    } else {
      data.tr.map((item, c) => {
        navLink[c].innerHTML = item;
      })
      langBtn.innerHTML = btnval[0];
    }
  }
  dataLang(lang.content,lang.val)
}


langBtn.onclick = changeLang;


document.querySelector('#color').onclick = ()=>{
      document.querySelector('#box').attributes[1].value = "green"
}