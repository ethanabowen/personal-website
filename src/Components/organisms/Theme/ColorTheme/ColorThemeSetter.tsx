import "./ColorThemeSetter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";

import { useContext, useState } from "react";

import ColorThemeContext from "./ColorThemeContext";

export default function ColorThemeSetter() {
  // eslint-disable-next-line
  const { colorTheme, setColorTheme } = useContext(ColorThemeContext);
  const [showMenu, setShowMenu] = useState(false);

  <FontAwesomeIcon icon={faBrush} />;
  return (
    <div
      className="theme--selector dropdown"
      onClick={() => setShowMenu(!showMenu)}
    >
      <FontAwesomeIcon icon={faBrush} className="theme--color--icon" />
      {showMenu && (
        <div className="dropdown-content">
          {colorThemeOptions.map((color, index) => {
            return (
              <button
                key={`${color}_theme_btn`}
                value={color}
                onClick={(e) => setColorTheme(e.currentTarget.value)}
              >
                {color}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

const colorThemeOptions = ["light", "dark", "retro", "sad"];
