import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Meny() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/tooted">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">Haldama</Nav.Link>
            <Nav.Link as={Link} to="/ostukorv">Ostukorvi</Nav.Link>            
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/logi-sisse">Login</Nav.Link>
            <Nav.Link as={Link} to="/registreeru">Signup</Nav.Link>
            <Nav.Link as={Link} to="/shops">Meie poed</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Meny;