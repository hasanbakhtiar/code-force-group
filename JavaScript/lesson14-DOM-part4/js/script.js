// const li = document.querySelector('li');
// console.log(li.parentNode.firstChild.firstChild.parentNode.parentNode.lastChild.firstChild.nodeValue);


// const myElem = document.createElement('h1');
// const myText = document.createTextNode("Hello Man");

// myElem.appendChild(myText);
// document.body.appendChild(myElem);



const input = document.querySelector('input');
const form = document.querySelector('form');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');



const todo =  (e) => {
  e.preventDefault();
  console.log(e);
  if (!input.value) {
    alert('please fill input')
  } else {
    const li = document.createElement('li');
    li.innerHTML = `<h1>${input.value} <button>del</button></h1>`;
    ul.appendChild(li);
    input.value = "";
    li.onclick = ()=>{
      li.style.textDecoration = "line-through"
    }
    li.ondblclick = ()=>{
        li.remove();
    }
  }
}

form.onsubmit =todo;
// btn.onmouseup = todo;


input.onkeydown = ()=>{
  input.style.height = "100px";
  input.style.backgroundColor ="black";
  input.style.color ="white";
  input.style.transition = '1s';
}

input.onkeyup = ()=>{
  input.style.height = "20px";
  input.style.backgroundColor ="white";
  input.style.color ="black";
  input.style.transition = '1s';
}