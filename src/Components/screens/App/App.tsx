import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Hub from "../Hub/Hub";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import WebsiteAuth from "../../atoms/WebsiteAuth/WebsiteAuth";

import { welcome } from "../../../Constants";
import Security from "../../atoms/Security/Security";
import Storage from "../../atoms/Storage/Storage";

export default function App() {
  console.log(welcome);

  return (
    <div className="container">
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

      {/* <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/hub"
          element={
            <WebsiteAuth>
              <Hub />
            </WebsiteAuth>
          }
        />
        <Route path="/" element={<Resume />} />
        <Route path="/hub/security" element={<Security/>} />
        <Route path="/hub/storage" element={<Storage/>} />
      </Routes>
    </div>
  );
}
