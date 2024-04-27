"use strict";

// import {info,test} from './data.js';
// import * as data from './data.js';
// console.log(data.info);
// console.log(data.test());




// phones.map(item=>{
//     return  console.log(item.title);
// });
















import { phones } from "../data/phones.js";
import { laptops } from "../data/laptops.js";


// const calculate=(birthyear)=>{
//       return new Date().getFullYear() - birthyear
// }

// const info = (p) => {
//   let totalYear="";
//   if (p==21) {
//     totalYear = 2000;
//   }else if(p==20){
//     totalYear = 1900;
//   }else{
//     totalYear = NaN;
//   }
//   return calculate(totalYear)
// }


// console.log(info(20));

const priceFilter =(data,value,header,valuta,cupon)=>{
  const filteredData = data.filter(p=>p.price < value);
  console.log(header+"-"+filteredData.length);

      return filteredData.map(item=>{
      switch (cupon) {
        case "Hello20":
          if (valuta ==="AZN") {
            return `titles:${item.title} | price:${parseInt((item.price) - ((item.price*1.7)*20/100))}AZN`
          } else{
            return `titles:${item.title} | price:$${parseInt((item.price) - ((item.price)*20/100))}`
          }
          break;
      
        default:
          if (valuta ==="AZN") {
            return `titles:${item.title} | price:${(item.price*1.7)}AZN`
          } else{
            return `titles:${item.title} | price:$${(item.price)}`
          }
          break;
      }
     })
}

console.log(priceFilter(phones,800,'cheap phones',"AZN"));
console.log(priceFilter(phones,1000,'expensive phone',"AZN","Hello20"));
console.log(priceFilter(phones,900,'mid phones',"Dollar"));
console.log(priceFilter(laptops,2000,'laptops',"Dollar"));
