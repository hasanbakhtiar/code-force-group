import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [post,setPost] = useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>setPost(res.data))
    },[])
  return (
    <div>
        <ul>
            {post.map(item=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default FetchApi