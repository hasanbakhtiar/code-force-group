
import configureStore from "../store/configureStore"
const store = configureStore();
export const movieAddAction = ({row,img,title,price,desc,active,date})=>({
    type:"ADD_MOVIE",
    movie:{
        id:crypto.randomUUID() ,row,img,title,price,desc,date,active
    }
})

export const movieDelAction = ({id})=>({
    type:"REMOVE_MOVIE",
    id
})

export const movieEditAction = (id,update)=>({
    type:"EDIT_MOVIE",
    id,update
})

export const movieSetMovie = (movies)=>({
        type:"GET_MOVIE",
        movies

})



