import { useRef } from "react";
import { Button } from "react-bootstrap";
import { add } from "../../../tools/slices/productSlice";
import { AppUseDispatch, AppUseSelector } from "../../../tools/store";

const AddProduct: React.FC = () => {
  const imgRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const catRef = useRef<HTMLSelectElement>();
  const descRef = useRef<HTMLInputElement>(null);
  const activeRef = useRef<HTMLInputElement>(null);
  const categoryData = AppUseSelector((p) => p.category);
  const dispatch = AppUseDispatch();
  const sendData = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      add({
        img: imgRef.current!.value,
        title: titleRef.current!.value,
        price: priceRef.current!.value,
        category: catRef.current!.value,
        desc: descRef.current!.value,
        active: true,
      })
    );
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Product Add</h1>
      <form className="col-4" onSubmit={sendData}>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input ref={imgRef} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input ref={titleRef} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input ref={priceRef} type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select className="form-select mb-4" ref={catRef}>
            {categoryData.map(item=>(
              <option  key={item.id} value={item.title}>{item.title}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <input ref={descRef} type="text" className="form-control" />
        </div>
  

        <div className="mb-3">
          <label className="form-label">Active</label>
          <input ref={activeRef} type="checkbox" className="ms-4" />
        </div>

        <Button type="submit" variant="success">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
