const intialState = [];
export const movieReducer = (state=intialState,action)=>{
    switch (action.type) {
        case "ADD_MOVIE":
            return [...state,action.movie]
    
        default:
            return state;
    }
}