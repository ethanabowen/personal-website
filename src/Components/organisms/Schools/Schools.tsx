import "./School.css";
import { schools } from "../../../Constants";
import { School as SchoolType } from "../../../types";

export default function Schools() {
  return (
    <>
      {schools.map((school: SchoolType, index: number) => {
        return <School key={school.school + index} {...school} />;
      })}
    </>
  );
}

function School({ school, degree, year }: SchoolType) {
  return (
    <div className="col-md-6 col-sm-12 col-xs-12 text-center pt-3">
      <div>
        {school} - {year}
      </div>
      <div>{degree}</div>
    </div>
  );
}
