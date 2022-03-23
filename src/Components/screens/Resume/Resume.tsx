import "./Resume.css";

import Personal from "../../atoms/Personal/Personal";
import Schools from "../../organisms/Schools/Schools";
import Certifications from "../../organisms/Certifications/Certifications";
import Skills from "../../organisms/Skills/Skills";
import Jobs from "../../organisms/Jobs/Jobs";
import { personal } from "../../../Constants";

function Resume() {
  return (
    <>
      <Personal />

      <div className="section-header">Education</div>
      <div className="row justify-content-center">
        <Schools />
      </div>

      <div className="section-header">Certificates</div>
      <div className="row justify-content-center">
        <Certifications />
      </div>

      <div className="section-header">Tech Skills</div>
      <div className="row">
        <Skills />
      </div>

      <div className="section-header">
        Experience ({personal.yearsExperience}+ years)
      </div>
      <div className="row justify-content-center">
        <Jobs />
      </div>

      <div className="section-header">Projects</div>
      <div className="row col justify-content-center pb-5">
        I highly encourage visiting the Projects page on my website and my
        GitHub page.
      </div>
    </>
  );
}

export default Resume;
