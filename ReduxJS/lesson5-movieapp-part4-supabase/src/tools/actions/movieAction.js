import supabase from "../../utils/supabase";

export const movieAddAction =  async(mdata)=>{
    const { error } = await supabase.from('movie-codeforce').insert(mdata)
    if (error) {
        console.log(error);
    }else{
        window.location.assign('/dashboard')
    }
}

export const movieDelAction = async({id})=>{
    const { error } = await supabase.from('movie-codeforce').delete()
    .eq('id', id)
    if (error) {
        console.log(error);
    }else{
        window.location.reload();
    }
}

export const movieEditAction = async(id,update)=>{
    const { error } = await supabase.from('movie-codeforce').update(update)
    .eq('id', id)
    if (error) {
        console.log(error);
    }else{
        window.location.assign('/dashboard')
    }
}


export const movieGetAction =(mdata)=>({
    type:"GET_MOVIE",
    mdata
})