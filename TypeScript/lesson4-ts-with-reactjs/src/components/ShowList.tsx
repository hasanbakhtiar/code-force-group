import { useState } from "react";
import CreateList from "./CreateList";
import SingleList from "./SingleList";
import { listType } from "../types/listType";

const ShowList: React.FC = () => {
    const [title,setTitle] = useState<string>("");
    const mydatasend = (mydata:listType)=>{
        setTitle(mydata.title)
        
    }
  return <>
  <h4 className="text-center my-5 text-warning">Show List</h4>
  <CreateList sendList = {mydatasend} />
  <ul className="list-group">
    <SingleList  title={title} />
  </ul>
  </>;
};

export default ShowList;
