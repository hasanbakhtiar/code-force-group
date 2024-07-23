const intialState = [];
export const movieReducer = (state=intialState,action)=>{
    switch (action.type) {
        case "ADD_MOVIE":
            return [...state,action.movie]
        case "REMOVE_MOVIE":
            return state.filter(p=>p.id !== action.id)
        default:
            return state;
    }
}