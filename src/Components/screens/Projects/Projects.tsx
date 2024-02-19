import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import parse from "html-react-parser";

import "./Projects.css";

import {
  collegeProjects,
  isometricTileGenerationProject,
} from "../../../Constants";

import { HobbyProject } from "../../../types";

import isometric_tile_generator_image from "./Isometric Tile Generator.png";

export default function Projects() {
  return (
    <div className="main--projects">
      <div className="section-header--projects">Projects</div>
      <div className="row justify-content-center">
        <IsometricTileGeneratorProject {...isometricTileGenerationProject} />;
      </div>

      <div className="section-header">College</div>
      <div className="row justify-content-center pb-5">
        <ul className="col-6">
          {collegeProjects.map((project, index) => {
            return <li key={"collegeProject" + index}>{project}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

function IsometricTileGeneratorProject({
  title,
  description,
  lastPublishDate,
  credits,
  gitHubUrl,
}: HobbyProject) {
  return (
    <>
      <div className="row-12 pt-5">
        <h1 className="text-center">{parse(title)}</h1>

        <div className="text-center">
          <a href="https://ethanabowen.github.io/isometric-terrain-generation-hosting/">
            <img
              src={isometric_tile_generator_image}
              className="isometric-terrain-generation-img--projects"
            />
          </a>
        </div>
      </div>

      <div className="row justify-content-center pt-2 pb-2">
        <div className="col-lg-6 col-sm-6 justify-content-left">
        <div className="row">
            <strong>Description:</strong>
            <div>{parse(description)}</div>
          </div>

          <a className="social-icon" href={gitHubUrl}>
            <FontAwesomeIcon icon={faGithub} /> GitHub Repository
          </a>

          {credits && (
            <div className="">
              <span className="row pt-4">
                <strong>Credits:</strong>
              </span>
              <div className="row justify-content-center">
                <ul className="col-9">
                  {credits.map((credit, index) => {
                    return (
                      <li key={"credit" + index}>
                        <a href={credit.link}>{credit.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
