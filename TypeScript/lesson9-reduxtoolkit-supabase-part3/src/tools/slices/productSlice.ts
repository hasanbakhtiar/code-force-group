import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productType } from "../../types/productType";
import supabase from "../../config/supabase/supabase";
import swal from "sweetalert";



const productData: productType[] = [];

const productSlice = createSlice({
    name: "products",
    initialState: productData,
    reducers: {
        readproduct: (state, action: PayloadAction<productType | any>) => {
            return action.payload;
        },
        add:(state, action: PayloadAction<productType | any>) => {
            const productadd =async()=>{
                    const {err}:any = await supabase.from('product-codeforce').insert(action.payload)
                    if (err) {
                        console.log(err);
                    }else{
                        swal('Product add successfully','','success')
                        setTimeout(()=>{
                            window.location.assign("/dashboard");
                        },2000)
                    }
            }
            productadd();
        },
        productremove:(state, action: PayloadAction<productType | any>) => {
            const productdelete = async()=>{
                const {err}:any = await supabase.from('product-codeforce').delete().eq('id',action.payload)
                    if (err) {
                        console.log(err);
                    }else{
                        swal('Product was deleted','','warning')
                        setTimeout(()=>{
                            window.location.assign("/dashboard");
                        },2000)
                    }
            }
            productdelete();
         },
         edit:(state, action: PayloadAction<productType | any>) => {
            const productupdate = async()=>{
                const {err}:any = await supabase.from('product-codeforce').update(action.payload.data).eq('id',action.payload.id)
                    if (err) {
                        console.log(err);
                    }else{
                        swal('Product was edit!','','warning')
                        setTimeout(()=>{
                            window.location.assign("/dashboard");
                        },2000)
                    }
            }
            productupdate();
         }
    }
})

export default productSlice.reducer;
export const { add,readproduct,productremove,edit } = productSlice.actions;