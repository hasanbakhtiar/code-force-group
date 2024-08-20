import { readcategory } from "../tools/slices/categorySlice";
import { readproduct } from "../tools/slices/productSlice";
import store from "../tools/store";
import supabase from "./supabase/supabase"

export const callProduct = async()=>{
    const {error,data} = await supabase.from('product-codeforce').select();
    if (error) {
        console.log(error);
    }else{
        
        store.dispatch((readproduct(data)));
        
    }
    
}

export const callCategory = async()=>{
    const {error,data} = await supabase.from('product-category-codeforce').select();
    if (error) {
        console.log(error);
    }else{
        
        store.dispatch((readcategory(data)));
        
    }
    
}


