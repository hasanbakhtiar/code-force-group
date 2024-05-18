// console.log(window.navigator);


const h1 = document.querySelector('h1');

// // 1000ms = 1s 
const time = setInterval(()=>{
  h1.innerHTML = new Date();
},1)
document.querySelector('button').onclick = ()=>{
  clearInterval(time);
}

fetch('https://fakestoreapi.com/products')
.then((res)=>{return res.json()})
.then((result)=>{ 
  let li = "";
  result.map(item=>{
    li+=`<li data-aos="fade-up"><img src="${item.image}" width="100" />${item.title}</li>`
  })
  document.querySelector('ul').innerHTML = li;
})
.catch(()=>{})


