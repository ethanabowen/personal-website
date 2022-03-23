import "./Skills.css";
import {Skill as SkillType } from "../../../types";
import { skills } from "../../../Constants";

export default function Skills() {
  return (
    <>
      {Object.keys(skills).map((techDomain: string) => {
        return (
          <div key={techDomain} className="col-auto skill-center-horizontally">
            <div className="techdomain">{techDomain}</div>
            {skills[techDomain]
              .sort((a, b) => (a.proficiency > b.proficiency ? -1 : 1))
              .map((skill: SkillType, index: number) => {
                return <Skill key={skill.technology + index} {...skill} />;
              })}
          </div>
        );
      })}
    </>
  );
}

function Skill({ technology, proficiency }: SkillType) {
  //scaled to 12 for bootstrap
  //const proficiencyScaled = Math.floor(12 * proficiency / 10);
  return (
    <div className="col-auto">
      <div className="pl-4">
        <span>{technology}</span>
      </div>
      {/*
      <div className="row col">
        <div className={"proficiency-bar mb-1 text-center col-" + proficiencyScaled}>{proficiency}</div>
        <div className={"proficiency-bar-nil mb-1 col-" + (12 - proficiencyScaled)} />
      </div>
      */}
    </div>
  );
}
