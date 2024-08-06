import { listType } from "../types/listType";


const SingleList:React.FC<listType> = ({title}) => {
  return <li className="list-group-item col-5">{title}</li>;
};

export default SingleList;