import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Users from './components/Users'
import axios from 'axios'

const App = () => {

  const [userdata,setUserdata] = useState([]);
  const [show,setShow] = useState('d-none')
  const searchSubmit = (keyword)=>{
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>setUserdata(res.data.items))
    setShow('d-block')
  }

  
  
  return (
    <div>
      <Header />
      <div className="container">
        <Search  callkeyword = {searchSubmit}/>
        {userdata.length===0?<h1 className={`${show} text-center text-danger`}>No User</h1>:<Users calluser={userdata}  />}
      </div>
    </div>
  )
}

export default App