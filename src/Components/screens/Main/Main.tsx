import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDraftingCompass,
  faFileLines,
  faRobot,
  faStairs,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import "./Main.css";

export default function Main() {
  return (
    <div id="main-container" className="main">
      <Link id="resume-link" className="box" to="/resume">
        <FontAwesomeIcon icon={faFileLines} className="box--icon" />
        <div className="text">Resume</div>
      </Link>
      <Link id="projects-link" className="box" to="/projects">
        <FontAwesomeIcon icon={faDraftingCompass} className="box--icon" />
        <div className="text">Projects</div>
      </Link>
      <Link id="blog-link" className="box" to="/blog">
        <FontAwesomeIcon icon={faStairs} className="box--icon" />
        <div className="text">Blog</div>
      </Link>
      <Link id="about-link" className="box" to="/about">
        <FontAwesomeIcon icon={faRobot} className="box--icon" />
        <div className="text">About Me</div>
      </Link>
    </div>
  );
}
