import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productType } from "../../types/productType";



const productData: productType[] = [];

const productSlice = createSlice({
    name: "products",
    initialState: productData,
    reducers: {
        add: (state, action: PayloadAction<productType>) => {
            const newPorduct: any = { 
                id: crypto.randomUUID(), 
                img:action.payload.img,
                title: action.payload.title, 
                price: action.payload.price,
                desc:action.payload.desc,
                active:action.payload.active
                
            }
            state.push(newPorduct)
        },
        remove:(state, action: PayloadAction<string>) => {
            return state.filter(item=> item.id !== action.payload);
         }
    }
})

export default productSlice.reducer;
export const { add,remove } = productSlice.actions;