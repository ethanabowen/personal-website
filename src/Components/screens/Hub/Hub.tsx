import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBucket, faCamera } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import "./Hub.css";
import { Auth } from "aws-amplify";

export default function Hub() {
  return (
    <div className="main--hub">
      <div className="text--title">Bowen Hub</div>
      <Link id="security-link" className="box box--hub box--first" to="/hub/security">
        <FontAwesomeIcon icon={faCamera} className="box--icon" />
        <span className="text">Security</span>
      </Link>
      <Link id="storage-link" className="box box--hub" to="/hub/storage">
        <FontAwesomeIcon icon={faBucket} className="box--icon" />
        <span className="text">Storage</span>
      </Link>

      <button onClick={() => Auth.signOut()}>Sign Out</button>
    </div>
  );
}
