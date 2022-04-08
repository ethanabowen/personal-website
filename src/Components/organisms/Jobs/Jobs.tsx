import "./Jobs.css";
import { jobs } from "../../../Constants";
import { Job as JobType } from "../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faStore,
  faTrain,
  faFighterJet,
  faUniversity,
  faDna,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

function getIcon(icon: string | undefined) {
  var faIcon = faBriefcase;

  /*if(icon == undefined) {
    return faIcon;
  }*/

  switch (icon) {
    case "university":
      faIcon = faUniversity;
      break;
    case "fighter-jet":
      faIcon = faFighterJet;
      break;
    case "store":
      faIcon = faStore;
      break;
    case "train":
      faIcon = faTrain;
      break;
    case "dna":
      faIcon = faDna;
      break;
    default:
      faIcon = faBriefcase;
  }

  return faIcon;
}

export default function Jobs() {
  return (
    <>
      {Object.keys(jobs).map((jobName) => {
        return jobs[jobName].map((job, index) => {
          /* Couldn't come up with cleaner TS way here */
          let showTitle = "false";
          if (index === 0) {
            showTitle = "true";
          }

          let showDivider = "false";
          if (jobs[jobName].length - 1 === index) {
            showDivider = "true";
          }

          return job.title === "Intern" ? (
            <div key={"intern" + index} />
          ) : (
            <Job
              key={job.company + index}
              showTitle={showTitle}
              showDivider={showDivider}
              job={job}
            />
          );
        });
      })}
    </>
  );
}

function Job(params: { showTitle: string; showDivider: string; job: JobType }) {
  const job = params.job;
  return (
    <div className={"card col-sm-10 col-xs-12"}>
      <div className="card-body">
        {params.showTitle && (
          <div className="card-title">
            <FontAwesomeIcon
              className="company-icon mr-3"
              icon={getIcon(job.icon)}
            />
            <a className="company" href={job.site}>
              {job.company}
            </a>
          </div>
        )}
        <div className="card-subtitle">
          <div className="row">
            <span className="col">
              <strong>{job.title}</strong>
            </span>
            <span className="col text-right">
              {job.startDate} - {job.endDate}
            </span>
          </div>
        </div>
        <div className="card-text">
          <ul>
            {job.details != null &&
              job.details.map((detail: string, index: number) => {
                return (
                  <li key={job.company + ",detail" + String(index)}>
                    {detail}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      {job.company !== "BNSF Railway" && params.showDivider && (
        <hr className="divider" />
      )}
    </div>
  );
}
