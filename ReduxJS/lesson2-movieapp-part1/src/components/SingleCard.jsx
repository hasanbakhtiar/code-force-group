import { Button, Card, Col } from "react-bootstrap"

const SingleCard = ({alldata}) => {
    return (
        <Col sm={6} md={3}>
            <Card>
                <Card.Img variant="top" src={alldata.img} height={300} style={{objectFit:"cover"}} />
                <Card.Body>
                    <Card.Title>{alldata.title}</Card.Title>
                    <Card.Subtitle>{alldata.price}$</Card.Subtitle>
                    <Card.Text>
                        {alldata.desc}
                    </Card.Text>
                    <Button variant="success">Add to cart</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleCard