import { Button, Row } from "react-bootstrap"
import SingleCard from "../components/SingleCard"
import { useDispatch, useSelector } from "react-redux"
import { movieAddAction } from "../tools/actions/movieAction";

const Movies = () => {
  const moviedata = useSelector(p=>p.movie);
  const dispatch = useDispatch();
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