import { Link } from "react-router-dom";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <Link className="box" to="/resume">
        <div className="text">Resume</div>
      </Link>
      <Link className="box" to="/projects">
        <div className="text">Projects</div>
      </Link>
      <Link className="box" to="/blog">
        <div className="text">Blog</div>
      </Link>
      <Link className="box" to="/about">
        <div className="text">About Me</div>
      </Link>
    </div>
  );
}
