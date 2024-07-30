import {  Row } from "react-bootstrap"
import SingleCard from "../components/SingleCard"
import {  useSelector } from "react-redux"

const Movies = () => {
  const moviedata = useSelector(p=>p.movie);
  return (
    <div>
        <h1 className="text-center my-5">Movie List</h1>

        <Row className="g-4">
          {moviedata.map(item=>(
            item.active?<SingleCard alldata={item} key={item.id}/>:null
          ))}
        
        </Row>
    </div>
  )
}

export default Movies