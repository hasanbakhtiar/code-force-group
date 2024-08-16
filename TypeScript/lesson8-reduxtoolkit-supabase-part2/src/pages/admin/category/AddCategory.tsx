import { useRef } from "react";
import { Button } from "react-bootstrap";
import { add } from "../../../tools/slices/categorySlice";
import { AppUseDispatch } from "../../../tools/store";

const AddCategory: React.FC = () => {
  const iconRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  
  const dispatch = AppUseDispatch();
  const sendData = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(add({
      icon:iconRef.current!.value,
      title:titleRef.current!.value,
    }));
    
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Category Add</h1>
      <form className="col-4" onSubmit={sendData}>
        <div className="mb-3">
          <label className="form-label">Icon</label>
          <input ref={iconRef} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input ref={titleRef} type="text" className="form-control" />
        </div>
  

        <Button type="submit" variant="success">Add</Button>
      </form>
    </div>
  );
};

export default AddCategory;
