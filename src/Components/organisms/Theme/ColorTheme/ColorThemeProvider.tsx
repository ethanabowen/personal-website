import { useEffect, useState } from "react";
import ColorThemeContext, { initialColorThemeState } from "./ColorThemeContext";

const ThemeProvider = ({ children }: any) => {
  const [colorTheme, setColorTheme] = useState(
    initialColorThemeState.colorTheme
  );

  // Get theme from local storage and set to local state if it exists
  useEffect(() => {
    const themeFromLocalStorage = window.localStorage.getItem("theme");

    // if theme exists in Local Storage, set it into this component's state
    // !! is a truthy/falsey case in JS
    !!themeFromLocalStorage && setColorTheme(themeFromLocalStorage);
  }, []);

  // On theme change, set local storage theme value
  useEffect(() => {
    window.localStorage.setItem("theme", colorTheme);
  }, [colorTheme]);

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      <div className={`theme-${colorTheme}`}>{children}</div>
    </ColorThemeContext.Provider>
  );
};

export default ThemeProvider;
