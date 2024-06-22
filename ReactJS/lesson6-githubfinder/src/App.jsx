import { useEffect, useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Users from './components/Users'
import axios from 'axios'

const App = () => {

  const [userdata,setUserdata] = useState([]);
  const searchSubmit = (keyword)=>{
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>setUserdata(res.data.items))
  }
  
  
  
  return (
    <div>
      <Header />
      <div className="container">
        <Search  callkeyword = {searchSubmit}/>
        <Users calluser={userdata}  />
      </div>
    </div>
  )
}

export default App