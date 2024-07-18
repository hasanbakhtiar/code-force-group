const intialState  = [];

export const productReducer = (state=intialState,action)=>{
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state,action.newproduct]

  
    default:
      return state;

  }
}