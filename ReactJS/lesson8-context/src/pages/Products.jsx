import React, { useContext, useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard'
import axios from 'axios';
import { ProductContext } from '../context/ProductContext';

const Products = () => {
  const [productData] = useContext(ProductContext);
  return (
    <div>
        <h1 className="text-center my-5">Product List</h1>
        <div className="row g-5">
            {productData.map(item=>(

            <SingleCard alldata={item} key={item.id}  rescount={3}/>
            ))}
        </div>
    </div>
  )
}

export default Products