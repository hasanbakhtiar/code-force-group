import React from "react";
import { AppUseDispatch, AppUseSelector } from "../../tools/store";
import { productType } from "../../types/productType";
import { Link } from "react-router-dom";
import { productremove } from "../../tools/slices/productSlice";
import { categoryremove } from "../../tools/slices/categorySlice";
import { Button } from "react-bootstrap";
import { categoryType } from "../../types/categoryType";

const Dashboard: React.FC = () => {
  const productData = AppUseSelector((p) => p.product);
  const categoryData = AppUseSelector((p) => p.category);
  const dispatch = AppUseDispatch();
  console.log(categoryData);
  
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5 ">Dashboard</h1>
      <div className="row">
      <div className="mt-5 col-8" style={{borderRight:"1px solid #000"}}>
      <h3 className="text-danger">Products</h3>

      <Link to="/addproduct" className="btn btn-dark">Add product</Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Photo</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Active</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((item: productType, i: number) => (
              <tr key={i}>
                <th scope="row">{i+1}</th>
                <td><img src={item.img} alt={item.id} width={70} /></td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td>{item.active?<button className="btn btn-success">Active</button>:<button className="btn btn-danger">Deactive</button>}</td>
                <td><Link to={`/editproduct/${item.id}`} className="btn btn-warning">Edit</Link></td>
                <td>  <Button variant="danger ms-3" onClick={()=>{dispatch(productremove(item.id))}}>X</Button></td>
              </tr>
            ))}

        
          </tbody>
        </table>
      </div>
      <div className="mt-5 col-4">
        <h3>Category</h3>
      <Link to="/addcategory" className="btn btn-success">Add</Link>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Photo</th>
              <th scope="col">Title</th>
    
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.map((item: categoryType, i: number) => (
              <tr key={i}>
                <th scope="row">{i+1}</th>
                <td><img src={item.icon} alt={item.id} width={70} /></td>
                <td>{item.title}</td>

                <td><Link to={`/editcategory/${item.id}`} className="btn btn-warning">Edit</Link></td>
                <td>  <Button variant="danger ms-3" onClick={()=>{dispatch(categoryremove(item.id))}}>X</Button></td>
              </tr>
            ))}

        
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
