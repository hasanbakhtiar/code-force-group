import { useState } from "react"
import swal from "sweetalert";

const Search = ({callkeyword}) => {
  const [keyword,setKeyword] = useState(null);
  const formSubmited  = e =>{
      e.preventDefault();
      if (!keyword) {
        swal('Please, fill input','','warning')
      }else{
        callkeyword(keyword);
      }
  }
  return (
    <div className="d-flex align-items-center justify-content-center my-5">

      <div className="col-6">

        <form onSubmit={formSubmited} className="input-group mb-3">
          <input onChange={e=>setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter username" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button className="btn btn-dark" type="submit" id="button-addon2">Search</button>
        </form>

      </div>

    </div>
  )
}

export default Search