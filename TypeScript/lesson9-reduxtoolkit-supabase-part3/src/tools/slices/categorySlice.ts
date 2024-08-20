import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import supabase from "../../config/supabase/supabase";
import swal from "sweetalert";
import { categoryType } from "../../types/categoryType";



const categoryData: categoryType[] = [];

const categorySlice = createSlice({
    name: "category",
    initialState: categoryData,
    reducers: {
        readcategory: (state, action: PayloadAction<categoryType | any>) => {
            return action.payload;
        },
        add:(state, action: PayloadAction<categoryType | any>) => {
            const categoryadd =async()=>{
                    const {err}:any = await supabase.from('product-category-codeforce').insert(action.payload)
                    if (err) {
                        console.log(err);
                    }else{
                        swal('Category add successfully','','success')
                        setTimeout(()=>{
                            window.location.assign("/dashboard");
                        },2000)
                    }
            }
            categoryadd();
        },
        categoryremove:(state, action: PayloadAction<categoryType | any>) => {
            const categorydelete = async()=>{
                const {err}:any = await supabase.from('product-category-codeforce').delete().eq('id',action.payload)
                    if (err) {
                        console.log(err);
                    }else{
                        swal('Category was deleted','','warning')
                        setTimeout(()=>{
                            window.location.assign("/dashboard");
                        },2000)
                    }
            }
            categorydelete();
         },
         edit:(state, action: PayloadAction<categoryType | any>) => {
            const categoryupdate = async()=>{
                const {err}:any = await supabase.from('product-category-codeforce').update(action.payload.data).eq('id',action.payload.id)
                    if (err) {
                        console.log(err);
                    }else{
                        swal('Category was edit!','','warning')
                        setTimeout(()=>{
                            window.location.assign("/dashboard");
                        },2000)
                    }
            }
            categoryupdate();
         }
    }
})

export default categorySlice.reducer;
export const { add,readcategory,categoryremove,edit } = categorySlice.actions;