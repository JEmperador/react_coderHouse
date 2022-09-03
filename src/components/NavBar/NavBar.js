import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/images/A.svg";
import "./NavBar.css";

function NavBar() {
  const listaCategorias = [
    {
      id: "1",
      name: "CPU",
      nameButton: "CPU",
    },
    {
      id: "2",
      name: "GPU",
      nameButton: "GPU",
    },
    {
      id: "3",
      name: "MOTHER",
      nameButton: "MOTHER",
    },
    {
      id: "4",
      name: "RAM",
      nameButton: "RAM",
    },
    {
      id: "5",
      name: "PSU",
      nameButton: "PSU",
    },
  ];

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="nav-link d-flex align-items-center">
            <img alt="" src={logo} className="d-inline-block align-text-top navbarLogo" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="collapse navbar-collapse justify-content-center navListMenu show">
              <Nav>
                {listaCategorias.map((value) => (
                  <Link key={value.id} to={`/category/${value.name}`} className="nav-link font">
                    {value.nameButton}
                  </Link>
                ))}
              </Nav>
            </div>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
