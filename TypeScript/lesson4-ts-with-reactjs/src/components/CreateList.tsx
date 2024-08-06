import { useRef } from "react"


const CreateList:React.FC<any> = ({sendList}) => {
    
    const listRef = useRef<HTMLInputElement>(null);
    const createNew = (e:React.FormEvent)=>{
            e.preventDefault();
            sendList({
                title:listRef.current!.value
            })
    }
    
  return (
    <div>
        <form onSubmit={createNew} className="col-5">
            <div className="input-group mb-3">
            <input type="text" className="form-control" ref={listRef} placeholder="Add new list"  />
            <button className="btn btn-warning" type="submit" id="button-addon2">Create</button>
            </div>
        </form>
    </div>
  )
}

export default CreateList