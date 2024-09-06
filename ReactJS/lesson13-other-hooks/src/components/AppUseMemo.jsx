import { useMemo, useState } from "react"
import { users } from "./data/users";

const AppUseMemo = () => {
  const [count,setCount] = useState(0);
  const [email,setEmail] = useState('');
  const userRows = ()=>{
    console.log('list running');
    return (
      users.map(item=>(
        <li key={item.id} onClick={()=>{setEmail(item.email)}}>{item.name}</li>
      ))
    )
  }
  const userRowsMemo = useMemo(()=>userRows(),[email])
  return (
    <div>
      {email}
      {userRowsMemo}
      <p>Count:{count}</p>
      <button onClick={()=>{
        setCount(count+1);
        console.log('count is running');
        
      }}>increment</button>
    </div>
  )
}

export default AppUseMemo