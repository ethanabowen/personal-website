import "./ThemeSetter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";

import { useContext, useState } from "react";

import ThemeContext from "./ThemeContext";

export default function ThemeSetter() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);

  <FontAwesomeIcon icon={faBrush} />;
  return (
    <div
      className="theme--selector dropdown"
      onClick={() => setShowMenu(!showMenu)}
    >
      <FontAwesomeIcon icon={faBrush} className="icon" />
      {showMenu && (
        <div className="dropdown-content">
          {themeOptions.map((option, index) => {
            return (
              <button
                key={`${option}_theme_btn`}
                value={option}
                onClick={(e) => setTheme(e.currentTarget.value)}
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

const themeOptions = ["light", "dark", "poo", "tron", "retro"];
