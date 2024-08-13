import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { remove } from "../tools/slices/productSlice";
import { Link } from "react-router-dom";

const SingleCard = ({allData}:any) => {
  const dispatch = useDispatch();
  return (
    <Col sm={12} md={3}>
      <Card>
        <Card.Img style={{height:"200px",objectFit:"contain"}} variant="top" src={allData.img} />
        <Card.Body>
          <Card.Title>{allData.title}</Card.Title>
          <Card.Text>
            ${allData.price}
          </Card.Text>
          <Card.Text>
            {allData.desc}
          </Card.Text>
          <Link to={`/editproduct/${allData.id}`} className="btn btn-dark">Edit</Link>
          <Button variant="danger ms-3" onClick={()=>{dispatch(remove(allData.id))}}>X</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
