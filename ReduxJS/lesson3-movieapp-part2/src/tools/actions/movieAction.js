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