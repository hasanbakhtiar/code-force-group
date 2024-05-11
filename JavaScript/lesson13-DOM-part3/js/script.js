// localStorage.setItem();
// localStorage.getItem();
// localStorage.clear();
// localStorage.removeItem();



const modeBtn  = document.querySelector('#mode');
const nav = document.querySelector('nav');

const changeMode = ()=>{
  if (modeBtn.innerHTML === 'Dark') {
    nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
    modeBtn.innerHTML = "Light";
    localStorage.setItem('mode','dark');
  }else{
    nav.className = "navbar navbar-expand-lg bg-light navbar-light";
    modeBtn.innerHTML = "Dark";
    localStorage.setItem('mode','light');
  }
}

modeBtn.onclick = changeMode;

if (localStorage.getItem('mode') === null) {
  localStorage.setItem('mode','light')
}else{
  if (localStorage.getItem('mode') === 'light') {
    nav.className = "navbar navbar-expand-lg bg-light navbar-light";
    modeBtn.innerHTML = "Dark"
  }else{
    nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
    modeBtn.innerHTML = "Light"
  }
}









const az = ["Ana Sehife","Haqqimizda","Xidmetlerimiz","Meqale","Elaqe"]
const en = ["Home","About","Serivce","Blog","Contact"]
const navlink = document.querySelectorAll('.nav-link');
const langBtn = document.querySelector('#lang');




// Ashagidaki localdan getirib istifade edilmesi ucundur
if (localStorage.getItem('lang')===null) {
  localStorage.setItem('lang','az');
}else{
  if (localStorage.getItem('lang')==='az') {
    for(let i=0;i<navlink.length;i++){
      navlink[i].innerHTML = az[i];
    }
    langBtn.innerHTML ="EN";
  }else{
    for(let i=0;i<navlink.length;i++){
      navlink[i].innerHTML = en[i];
    }
    langBtn.innerHTML ="AZ";
  }
}






// Ashagidaki click olan zaman istifade edilmesi ucundur
langBtn.onclick = ()=>{
  if (langBtn.innerHTML === 'AZ') {
    for(let i=0;i<navlink.length;i++){
      navlink[i].innerHTML = az[i];
  }
    localStorage.setItem('lang','az');
    langBtn.innerHTML ="EN";
  }else{
    for(let i=0;i<navlink.length;i++){
      navlink[i].innerHTML = en[i];
  }
    localStorage.setItem('lang','en');
    langBtn.innerHTML ="AZ";
  }
}





