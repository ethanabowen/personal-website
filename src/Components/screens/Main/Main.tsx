import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDraftingCompass,
  faFileLines,
  faRobot,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import "./Main.css";

export default function Main() {
  return (
    <div id="main-container" className="main">
      <div className="text--name">&lt;Ethan Bowen/&gt;;</div>
      <Link id="resume-link" className="box box--first" to="/resume">
        <FontAwesomeIcon icon={faFileLines} className="box--icon" />
        <span className="text">Resume</span>
      </Link>
      <Link id="projects-link" className="box" to="/projects">
        <FontAwesomeIcon icon={faDraftingCompass} className="box--icon" />
        <span className="text">Projects</span>
      </Link>
      <Link id="blog-link" className="box" to="/blog">
        <FontAwesomeIcon icon={faLightbulb} className="box--icon" />
        <span className="text">Blog</span>
      </Link>
      <Link id="about-link" className="box" to="/about">
        <FontAwesomeIcon icon={faRobot} className="box--icon" />
        <span className="text">About Me</span>
      </Link>
    </div>
  );
}
