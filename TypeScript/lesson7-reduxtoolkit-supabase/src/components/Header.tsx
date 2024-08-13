import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
  return (
        <Navbar expand="lg" className="bg-dark navbar-dark">
          <Container>
            <Navbar.Brand href="#home">Shoping</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <LinkContainer to="/"><Nav.Link>Product List</Nav.Link></LinkContainer>
                <LinkContainer to="/addproduct"><Nav.Link>Add Product</Nav.Link></LinkContainer>
            
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default Header