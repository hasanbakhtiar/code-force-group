import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children})=>{

    const [productData,setProductData] = useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=>setProductData(res.data.products))
    },[])
    return <ProductContext.Provider value={[productData,setProductData]}>{children}</ProductContext.Provider>
}