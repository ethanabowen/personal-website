import "./Navigation.css";

import { useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import ColorThemeContext from "../../organisms/Theme/ColorTheme/ColorThemeContext";

export default function Navigation() {
  const { colorTheme, setColorTheme } = useContext(ColorThemeContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Ethan Bowen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/resume" className="">
              <span className="">Resume</span>
            </Nav.Link>
            <Nav.Link href="/projects" className="">
              <span className="">Projects</span>
            </Nav.Link>
            <NavDropdown title="Theme" id="basic-nav-dropdown" className="">
              <NavDropdown.Item
                onClick={(e) => setColorTheme(e.currentTarget.innerText.toLowerCase())}
              >
                Light
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e) => setColorTheme(e.currentTarget.innerText.toLowerCase())}
              >
                Dark
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e) => setColorTheme(e.currentTarget.innerText.toLowerCase())}
              >
                Retro
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// <Navbar expand="lg" className="bg-body-tertiary">
//   <Nav className="m-auto">
//     <Nav.Link className="font-weight-bold" as={Link} to="/">
//       Home
//     </Nav.Link>
//     <Nav.Link className="font-weight-bold" as={Link} to="/resume">
//       <FontAwesomeIcon icon={faFileLines} className="box--icon" />
//       <span className="text">Resume</span>
//     </Nav.Link>
//     <Nav.Link className="font-weight-bold" as={Link} to="/projects">
//       <FontAwesomeIcon icon={faDraftingCompass} className="box--icon" />
//       <span className="text">Projects</span>
//     </Nav.Link>
//   </Nav>

//   <div className="setters">
//     <ThemeSetter />
//   </div>
// </Navbar>;
