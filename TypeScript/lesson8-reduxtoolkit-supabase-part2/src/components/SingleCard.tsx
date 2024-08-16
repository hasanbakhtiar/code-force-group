import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const SingleCard = ({allData}:any) => {
  
  return (
    <Col sm={12} md={3}>
      <Card>
        <Card.Img style={{height:"200px",objectFit:"contain"}} variant="top" src={allData.img} />
        <Card.Body>
          <Card.Title>{allData.title}</Card.Title>
          <Card.Text>
            {allData.price}
          </Card.Text>
          <Card.Text>
            {allData.desc}
          </Card.Text>
        
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
