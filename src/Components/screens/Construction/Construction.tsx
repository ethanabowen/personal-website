import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

import "./Construction.css";

export default function Construction() {
  return (
    <div className="main--construction">
      <FontAwesomeIcon icon={faPersonDigging} className="construction--icon"/>
      <span className="text--name">Check back soon...</span>
    </div>
  );
}
