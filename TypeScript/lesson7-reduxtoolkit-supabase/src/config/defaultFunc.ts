import { readproduct } from "../tools/slices/productSlice";
import store from "../tools/store";
import { productType } from "../types/productType";
import supabase from "./supabase/supabase"

export const defaultFunc = async()=>{
    const {error,data} = await supabase.from('product-codeforce').select();
    if (error) {
        console.log(error);
    }else{
        
        store.dispatch((readproduct(data)));
        
    }
    
}