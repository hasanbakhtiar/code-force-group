const intialState = [];
export const movieReducer = (state=intialState,action)=>{
    switch (action.type) {
        case "GET_MOVIE":
            return action.mdata
        default:
            return state;
    }
}