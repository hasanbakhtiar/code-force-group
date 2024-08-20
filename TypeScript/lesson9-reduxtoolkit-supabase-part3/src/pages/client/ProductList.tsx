import { Row } from "react-bootstrap";
import SingleCard from "../../components/SingleCard";
import { productType } from "../../types/productType";
import { AppUseSelector } from "../../tools/store";
import { useState } from "react";

const ProductList = () => {
  const [filterData,setFilterData]=useState([]);
  const productdata: any = AppUseSelector((p) => p.product);
  const categorydata: any = AppUseSelector((p) => p.category);
  const filterProduct = (cat:string) => {
    const filternow = productdata.filter((p:any) => p.category === cat);
    setFilterData(filternow);
  }
  return (
    <div>
      <h1 className="text-center my-5">Product List</h1>
      <div className="row mb-3">
      <div className="col-3" >
            <button className="btn btn-danger" onClick={()=>{setFilterData([])}}>All</button>
          </div>
        {categorydata.map((item: any) => (
          <div className="col-3" key={item.id}>
            <button className="btn btn-dark" onClick={()=>{filterProduct(item.title)}}>{item.title}</button>
          </div>
        ))}
      </div>
      <Row className="g-5">
        {filterData.length === 0 ? productdata.map((item: productType, c: number) => {
          return <SingleCard allData={item} key={c} />;
        }) : filterData.map((item: productType, c: number) => {
          return <SingleCard allData={item} key={c} />;
        })}
      </Row>
    </div>
  );
};

export default ProductList;
