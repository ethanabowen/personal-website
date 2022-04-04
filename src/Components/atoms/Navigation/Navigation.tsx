import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
export default function Navigation() {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link className="font-weight-bold" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="font-weight-bold" as={Link} to="/resume">
            Resume
          </Nav.Link>
          <Nav.Link className="font-weight-bold" as={Link} to="/projects">
            Projects
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
