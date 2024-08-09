import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";

const store = configureStore({
    reducer:productSlice
})
export default store;