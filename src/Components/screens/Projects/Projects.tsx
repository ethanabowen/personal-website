import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import parse from "html-react-parser";

import "./Projects.css";

import { collegeProjects, hobbyProjects } from "../../../Constants";
import { HobbyProject as HobbyProjectType } from "../../../types";

export default function Projects() {
  return (
    <>
      <div className="section-header">Projects</div>
      <div className="row justify-content-center">
        {hobbyProjects.map((project, index) => {
          return <HobbyProject key={"hobbyProject" + index} {...project} />;
        })}
      </div>

      <div className="section-header">College</div>
      <div className="row justify-content-center pb-5">
        <ul className="col-9">
          {collegeProjects.map((project, index) => {
            return <li key={"collegeProject" + index}>{project}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

function HobbyProject({
  title,
  description,
  lastPublishDate,
  credits,
  gitHubUrl,
}: HobbyProjectType) {
  return (
    <>
      <div className="row-12 pt-5">
        <h1 className="text-center">{parse(title)}</h1>
      </div>
      <div className="row justify-content-center pt-2 pb-2">
        <div className="col-lg-3 col-sm-4">
          <span className="row">Last Publish Date: {lastPublishDate}</span>
          {gitHubUrl && (
            <span className="row">
              <a className="social-icon" href={gitHubUrl}>
                <FontAwesomeIcon icon={faGithub} /> GitHub Repository
              </a>
            </span>
          )}
        </div>
        <div className="col-lg-6 col-sm-10 justify-content-left">
          <div className="row">
            <strong>Description:</strong>
            <div>{parse(description)}</div>
          </div>

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
