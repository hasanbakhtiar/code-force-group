// const ul = document.querySelector('ul');
// let a = [];


  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=>{
    function pagination (a){
      return a;
    } 
    console.log(pagination(data));
  })



// try{
//   throw('no problem');
//   consolae.log('hello');
// }catch(err){
//   console.log(err);
// }finally{
//   console.log("im running everytime");
// }
