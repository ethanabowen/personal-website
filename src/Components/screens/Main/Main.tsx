import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDraftingCompass,
  faFileLines,
  faRobot,
  faStairs,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import "./Main.css";

let constrain = 20;

function transforms(x: number, y: number, el: any) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - box.height / 2) / constrain;
  let calcY = (x - box.x - box.width / 2) / constrain;

  return (
    "perspective(100px) " +
    "   rotateX(" +
    calcX +
    "deg) " +
    "   rotateY(" +
    calcY +
    "deg) "
  );
}

function transformElement(el: any, xyEl: any) {
  el.style.transform = transforms.apply(null, xyEl);
}

function onMouseOver(e: any) {
  let xy = [e.clientX, e.clientY];

  let resumeLink = document.getElementById("resume-link");
  console.log("e", e);
  console.log("resumeLink: ", resumeLink);
  let position = xy.concat([resumeLink]);

  window.requestAnimationFrame(function() {
    transformElement(resumeLink, position);
  });
}

export default function Main() {
  return (
    <div id="main-container" className="main" onMouseOver={onMouseOver}>
      <Link id="resume-link" className="box" to="/resume">
        <FontAwesomeIcon icon={faFileLines} className="box--icon" />
        <div className="text">Resume</div>
      </Link>
      <Link className="box" to="/projects">
        <FontAwesomeIcon icon={faDraftingCompass} className="box--icon" />
        <div className="text">Projects</div>
      </Link>
      <Link className="box" to="/blog">
        <FontAwesomeIcon icon={faStairs} className="box--icon" />
        <div className="text">Blog</div>
      </Link>
      <Link className="box" to="/about">
        <FontAwesomeIcon icon={faRobot} className="box--icon" />
        <div className="text">About Me</div>
      </Link>
    </div>
  );
}
