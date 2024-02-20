import Timeline from "../../atoms/Timeline/Timeline";
import "./Main.css";

import { jobs } from "../../../Constants";
import { Job } from "../../../types";

export default function Main() {
  return (
    <div className="main container justify-content-center">
      <div className="row col-6">
        <div className="main--statement m-5">
          Passionate, Driven, Concept-focused technologist eager to
          <div className="main--aboutme" />
          meaningful products that impact lives.
        </div>
      </div>

      <div className="row">
        <Timeline>
          {Object.keys(jobs).map((jobName) => {
            return jobs[jobName].map((job: Job, index) => (
              <Timeline.JobEntry key={`${jobName}_${index}`} job={job} />
            ));
          })}
        </Timeline>
        {/* <div className="main-timeline">
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">2 Years</span>
                  <span className="year">2013</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">Visual Art &amp; Design</h5>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur ex sit amet massa scelerisque scelerisque. Aliquam
                erat volutpat. Aenean interdum finibus efficitur. Praesent
                dapibus dolor felis, eu ultrices elit molestie.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">1 Years</span>
                  <span className="year">2015</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">Product Designer</h5>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur ex sit amet massa scelerisque scelerisque. Aliquam
                erat volutpat. Aenean interdum finibus efficitur. Praesent
                dapibus dolor felis, eu ultrices elit molestie.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">2 Years</span>
                  <span className="year">2016</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">Web Designer</h5>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur ex sit amet massa scelerisque scelerisque. Aliquam
                erat volutpat. Aenean interdum finibus efficitur. Praesent
                dapibus dolor felis, eu ultrices elit molestie.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">2 Years</span>
                  <span className="year">2018</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">Graphic Designer</h5>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur ex sit amet massa scelerisque scelerisque. Aliquam
                erat volutpat. Aenean interdum finibus efficitur. Praesent
                dapibus dolor felis, eu ultrices elit molestie.
              </p>
            </div>
          </div> */
        /* </div> */}
      </div>
    </div>
  );
}
