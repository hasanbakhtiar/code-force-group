let info = 0;

// while(info>10){ condition
//     info++; //action 
//     console.log("JavaScript"+info); //result
// }

// do{
//     console.log(info); //result
//     info++; //action
// }while(info>10)


// for(let i=0;i<10;i++){
//     console.log(i);
// }


// const phone_brands = ["Apple", "Samsung", "Huawei", "Xiaomi", "Google", "OnePlus", "Sony", "LG", "Motorola", "Nokia", "HTC", "BlackBerry", "Lenovo", "OPPO", "Vivo", "Realme"];


// for(let a of phone_brands){
//     console.log(a);
// }



// for(let i in phone_brands){
//     console.log(phone_brands[i]);
// }





// console.log(phone_brands.length);


// for(let i=0;i<phone_brands.length;i++){
//     console.log(phone_brands[i]);
// }




// const phone_models = [
//     {
//       brand: "Apple",
//       model: "iPhone 13 Pro"
//     },
//     {
//       brand: "Samsung",
//       model: "Galaxy S21 Ultra"
//     },
//     {
//       brand: "Huawei",
//       model: "Mate 40 Pro"
//     },
//     {
//       brand: "Xiaomi",
//       model: "Mi 11"
//     },
//     {
//       brand: "Google",
//       model: "Pixel 6 Pro"
//     },
//     {
//       brand: "OnePlus",
//       model: "9 Pro"
//     },
//     {
//       brand: "Sony",
//       model: "Xperia 1 III"
//     },
//     {
//       brand: "LG",
//       model: "Wing"
//     },
//     {
//       brand: "Motorola",
//       model: "Edge+"
//     },
//     {
//       brand: "Nokia",
//       model: "8.3 5G"
//     }
//   ]


//   for(let i of phone_models){
//     console.log(i.brand+":"+i.model);
//   }



const phone_models_ad = [
    {
      "brand": "Apple",
      "model": "iPhone 13 Pro",
      "price": 999,
      "category": "Flagship"
    },
    {
      "brand": "Samsung",
      "model": "Galaxy S21 Ultra",
      "price": 1199,
      "category": "Flagship"
    },
    {
      "brand": "Huawei",
      "model": "Mate 40 Pro",
      "price": 1099,
      "category": "Mid-range"
    },
    {
      "brand": "Xiaomi",
      "model": "Mi 11",
      "price": 799,
      "category": "Mid-range"
    },
    {
      "brand": "Google",
      "model": "Pixel 6 Pro",
      "price": 899,
      "category": "Flagship"
    },
    {
      "brand": "OnePlus",
      "model": "9 Pro",
      "price": 969,
      "category": "Flagship"
    },
    {
      "brand": "Sony",
      "model": "Xperia 1 III",
      "price": 1299,
      "category": "Flagship"
    },
    {
      "brand": "LG",
      "model": "Wing",
      "price": 999,
      "category": "Innovative"
    },
    {
      "brand": "Motorola",
      "model": "Edge+",
      "price": 999,
      "category": "Flagship"
    },
    {
      "brand": "Nokia",
      "model": "8.3 5G",
      "price": 699,
      "category": "Mid-range"
    }
  ]
   

  const filter = window.prompt();

for(let i of phone_models_ad){
    if (i.price<Number(filter)) {
        console.log(i.brand+":"+i.model);
    }
}



  
