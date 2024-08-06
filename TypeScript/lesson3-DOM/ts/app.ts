// const h1 = document.querySelector<HTMLHeadingElement>('h1');
// const h1 = document.querySelector('h1') as HTMLHeadElement;

const btn:any = document.querySelector('button') as HTMLButtonElement;
const ul:any = document.querySelector('ul') as HTMLUListElement;

type productType = {
id:number,
title:string,
price:number,
description:string
category:string,
image:string,
rating:{
    rate:number,
    count:number
}
}

 const  showList = ()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data:productType[])=>{
        let li:string = "";
        data.map((item:productType)=>{
            li+=`<li>${item.title}</li>`
        })
        ul.innerHTML = li;
    })
    
}
btn.onclick = showList;

