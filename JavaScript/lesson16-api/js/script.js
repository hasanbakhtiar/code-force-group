// const myPromise = new Promise((resolve,reject)=>{
//   const data = true;
//   if (data) {
//       resolve("Successfull!");
//   }else{
//     reject("Something is wrong!")
//   }
// });
// console.log(myPromise);


// fetch("https://fakestoreapi.com/productsa")
// .then(res=>{
//   if (res.status === 200) {
//     console.log('data is running');
//   }else{
//     console.log('somthing is wrong');
//   }
// })
// .catch(err=>console.log(err))


const btnCon = document.querySelector('.btn-con');

// const pagBtn  = document.querySelectorAll(".pag-btn");
const row = document.querySelector(".row");
const fetchApi = (start = 0, end = 5) => {
  fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
      let col = "";
      data.slice(start, end).map((item, c) => {
        col += `
      <div class="col-12 col-sm-6 col-md-4">
            <div class="card">
              <img style="object-fit:cover;height:200px;border-radius:0px" src="${item.flags.png}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.name.common}</h5>
                <p class="card-text">${item.capital}</p>
                <p class="card-text">${start + c + 1}</p>
              </div>
            </div>
          </div>
      `
      })
      row.innerHTML = col;
    })
    .catch(err => console.log(err))

}


// pagBtn[0].onclick=()=>{
//   fetchApi(0,50);
// }

// pagBtn[1].onclick=()=>{
//   fetchApi(50,100);
// }
// pagBtn[2].onclick=()=>{
//   fetchApi(100,150);
// }

// pagBtn[3].onclick=()=>{
//   fetchApi(150,200);
// }
// pagBtn[4].onclick=()=>{
//   fetchApi(200,250);
// }

fetchApi();



const btnCrt = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
      
      
      for (let i = 0; i < data.length / 5; i++) {
        const pagBtnNew = document.createElement('button');
        pagBtnNew.setAttribute('class', 'btn btn-success pag-btn');
        pagBtnNew.innerHTML = i + 1;
        btnCon.appendChild(pagBtnNew);
        
      }

      for (let i = 0; i < data.length / 5; i++) {
        const pagBtn = document.querySelectorAll(".pag-btn");
        pagBtn[i].onclick = () => {
          fetchApi(((i+1)*5)-5,(i+1)*5);
        
        }
      }


      
    
    })

}


btnCrt();