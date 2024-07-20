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
            <SingleCard alldata={item} key={item.id}/>
          ))}
          <Button onClick={()=>{
              dispatch(movieAddAction({
                id: 1,
                row: 1,
                img: "https://www.aceshowbiz.com/images/still/inception_poster19.jpg",
                title: "Inception",
                price: 20,
                desc: "Science and fantastic",
                date: new Date(),
                active: true
              }))
          }}>Add new film</Button>
        </Row>
    </div>
  )
}

export default Movies