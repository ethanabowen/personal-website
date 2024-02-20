import "./Timeline.css";
import { Job } from "../../../types";
import React from "react";

interface JobEntryProps {
  job: Job;
}

const Timeline = ({ children }: any) => {
  return <div className="main-timeline">{children}</div>;
};

const JobEntry: React.FC<JobEntryProps> = ({ job }) => {
  return (
    <div className="timeline">
      <div className="icon"></div>
      <div className="date-content">
        <div className="date-outer">
          <span className="date">
            <span className="month">{`${job.durationInYears} Year${
              job.durationInYears == "1" ? "" : "s"
            }`}</span>
            <span className="year">{job.startYear}</span>
          </span>
        </div>
      </div>
      <div className="timeline-content">
        <h5 className="title">{`${job.company} - ${job.title}`}</h5>
        <p className="description">
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
        </p>
      </div>
    </div>
  );
};

Timeline.JobEntry = JobEntry;

export default Timeline;
