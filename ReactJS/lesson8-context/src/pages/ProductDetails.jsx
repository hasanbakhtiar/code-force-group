import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import slugify from 'slugify';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
    const {slug} = useParams();
    const [productData] = useContext(ProductContext);
    const productDetails = productData.find(p=>slugify(p.title) == slug)

  return (
    <>
    {!productDetails?<div className='d-flex align-items-center justify-content-center'>
        <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" alt="" />
    </div>:
<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={productDetails.images[0]} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productDetails.title}</h1>
      <p className="lead">{productDetails.description}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Link to="/products" type="button" className="mt-5 btn btn-dark btn-lg px-4 me-md-2">Back</Link>
      </div>
  </div>
</div>


        </div>}
    </>
  )
}

export default ProductDetails