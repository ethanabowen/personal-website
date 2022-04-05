import "./CssThemeSetter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext, useState } from "react";

import CssThemeContext from "./CssThemeContext";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";

export default function CssSetter() {
  const { cssTheme, setCssTheme } = useContext(CssThemeContext);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="csstheme--selector dropdown"
      onClick={() => setShowMenu(!showMenu)}
    >
      <FontAwesomeIcon icon={faCss3Alt} className="theme--css--icon" />
      {showMenu && (
        <div className="dropdown-content">
          {cssOptions.map((option, index) => {
            return (
              <button
                key={`${option}_css_btn`} 
                value={option}
                onClick={(e) => setCssTheme(e.currentTarget.value)}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

const cssOptions = ["floaters", "none"];
