import React, { useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard'
import axios from 'axios';

const Products = () => {
    const [productData,setProductData] = useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=>setProductData(res.data.products))
    },[])
  return (
    <div>
        <h1 className="text-center my-5">Product List</h1>
        <div className="row g-5">
            {productData.map(item=>(

            <SingleCard alldata={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default Products