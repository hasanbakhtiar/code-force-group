import {  useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { edit } from "../../../tools/slices/productSlice";
import { AppUseDispatch, AppUseSelector } from "../../../tools/store";
import { useParams } from "react-router-dom";

const EditProduct: React.FC = () => {
  const { id } = useParams();
  const data = AppUseSelector(p=>p.product);
  const uniqueData:any = data.find((p:any)=>p.id.toString() === id);
  const [img,setImg] = useState<string>(!uniqueData?"":uniqueData?.img);
  const [title,setTitle] = useState<string>(!uniqueData?"":uniqueData?.title);
  const [price,setPrice] = useState<string>(!uniqueData?"":uniqueData?.price);
  const [desc,setDesc] = useState<string>(!uniqueData?"":uniqueData?.desc);
  const [category,setCategory] = useState<string>(!uniqueData?"":uniqueData?.category);
  const categoryData = AppUseSelector((p) => p.category);
  const dispatch:any = AppUseDispatch();
  const sendData = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(edit({id: uniqueData.id,data: [{img,title,price,desc,active:true,category}]}));
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Edit Product</h1>
      <form className="col-4" onSubmit={sendData}>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input value={img} onChange={(e:any)=>{setImg(e.target.value)}} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input value={title} onChange={(e:any)=>{setTitle(e.target.value)}} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input value={price} onChange={(e:any)=>{setPrice(e.target.value)}} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select className="form-select mb-4" onChange={(e)=>{setCategory(e.target.value)}} defaultValue={category}>
            {categoryData.map(item=>(
              <option  key={item.id} value={item.title}>{item.title}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input value={desc} onChange={(e:any)=>{setDesc(e.target.value)}} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Active</label>
          <input  type="checkbox" className="ms-4" />
        </div>

        <Button type="submit" variant="warning">
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditProduct;
