import { useEffect, useState } from "react"
import { productType } from "../types/listType";
import axios from "axios";


const FetchApi:React.FC = () => {
    const [data,setData] = useState<productType[]>([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>setData(res.data))
    },[])
  return (
    <div>
        <ul>
            {data.map(((item:productType)=>(
                <li className="text-light">{item.title}</li>
            )))}
        </ul>
    </div>
  )
}

export default FetchApi