import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./Main.css";

export default function Main() {
  return (
    <div className="main">
          <a className="box" href="/resume"><div className="text">Resume</div></a>
          <a className="box" href="/projects"><div className="text">Projects</div></a>
          <a className="box" href="/blog"><div className="text">Blog</div></a>
          <a className="box" href="/about"><div className="text">About Me</div></a>
    </div>
  );
}
