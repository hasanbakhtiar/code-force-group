import {  useState } from "react";
import { Button } from "react-bootstrap";
import { edit } from "../../../tools/slices/categorySlice";
import { AppUseDispatch, AppUseSelector } from "../../../tools/store";
import { useParams } from "react-router-dom";

const EditCategory: React.FC = () => {
  const { id } = useParams();
  const data = AppUseSelector(p=>p.category);
  const uniqueData:any = data.find((p:any)=>p.id.toString() === id);
  const [icon,setIcon] = useState<string>(!uniqueData?"":uniqueData?.icon);
  const [title,setTitle] = useState<string>(!uniqueData?"":uniqueData?.title);
  
  const dispatch:any = AppUseDispatch();
  const sendData = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(edit({id: uniqueData.id,data: [{icon,title}]}));
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Edit Product</h1>
      <form className="col-4" onSubmit={sendData}>
        <div className="mb-3">
          <label className="form-label">Icon</label>
          <input value={icon} onChange={(e:any)=>{setIcon(e.target.value)}} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input value={title} onChange={(e:any)=>{setTitle(e.target.value)}} type="text" className="form-control" />
        </div>


        <Button type="submit" variant="warning">
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditCategory;
