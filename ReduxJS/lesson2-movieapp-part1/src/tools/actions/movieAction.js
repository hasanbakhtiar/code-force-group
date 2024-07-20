export const movieAddAction = ({row,img,title,price,desc,active})=>({
    type:"ADD_MOVIE",
    movie:{
        id:crypto.randomUUID() ,row,img,title,price,desc,date:new Date().getFullYear(),active
    }
})