export const addProduct =({id,title})=>({
    type:"ADD_PRODUCT",
    newproduct:{
      id:id,
      title:title
    }
  })