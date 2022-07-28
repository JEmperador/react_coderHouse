import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/images/A.svg";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="p-0 m-0">
          <img alt="logo" src={logo} className="d-inline-block align-text-top navbarLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="collapse navbar-collapse justify-content-center navListMenu show">
            <Nav.Link className="font" href="#">CPU</Nav.Link>
            <Nav.Link className="font" href="#">GPU</Nav.Link>
            <Nav.Link className="font" href="#">MOTHER</Nav.Link>
            <Nav.Link className="font" href="#">RAM</Nav.Link>
            <Nav.Link className="font" href="#">PSU</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
