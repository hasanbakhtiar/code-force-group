import React from 'react'
import ReactDOM from 'react-dom/client';
import { addProduct } from './actions/productAction';
import configureStore from './store/configureStore';

const store = configureStore();




store.subscribe(()=>{
  console.log(store.getState());
});



store.dispatch(addProduct({id:1,title:'phone'}));
store.dispatch(addProduct({id:2,title:'laptop'}));









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Hello Redux JS</h1>
  </React.StrictMode>,
)















// import { createStore } from 'redux';

// const counterReducer = (state=0,action)=>{
//   switch(action.type){
//     case "increment":
//       return state+1

//       case "decrement":
//       return state-1
//     default:
//       return state;
//   }
// }

// const store = createStore(counterReducer);

// const addCountAction = {
//   type:"increment"
// }

// const deleteCountAction = {
//   type:"decrement"
// }

// store.subscribe(()=>{
//   console.log(store.getState());
// })



// store.dispatch(addCountAction);
// store.dispatch(addCountAction);
// store.dispatch(addCountAction);
// store.dispatch(deleteCountAction);






