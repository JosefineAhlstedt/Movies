import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Awesome movies
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} end to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/popular">
              Popular
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/top">
              Top
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/cinema">
              Cinema
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
