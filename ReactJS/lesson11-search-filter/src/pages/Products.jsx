import React, { useContext, useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard'
import axios from 'axios';
import { ProductContext } from '../context/ProductContext';

const Products = () => {
  const [productData] = useContext(ProductContext);
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(res => setCategories(res.data));
  }, [])
  const filterProduct = (cat) => {
    const filternow = productData.filter(p => p.category === cat);
    setFilteredData(filternow);
  }
  return (
    <div>
      <h1 className="text-center my-5">Product List</h1>
      <div className="row g-5">
        <div className="col-12 col-sm-12 col-md-3">
          <ul className="list-group">
            {categories.map((item, index) => (
              <li key={index} className="list-group-item" onClick={() => { filterProduct(item.slug) }}>{item.name}</li>

            ))}

          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-9">
          <div className="row g-3">
            {filteredData.length === 0 ? productData.map(item => (

              <SingleCard alldata={item} key={item.id} rescount={4} />
            )) : filteredData.map(item => (

              <SingleCard alldata={item} key={item.id} rescount={4} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products