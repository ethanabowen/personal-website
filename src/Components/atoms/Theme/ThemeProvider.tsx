import { useEffect, useState } from "react";
import ThemeContext, { initialThemeState } from "./ThemeContext";

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(initialThemeState.theme);

  // Get theme from local storage and set to local state if it exists
  useEffect(() => {
    const themeFromLocalStorage = window.localStorage.getItem("theme");

    // if theme exists in Local Storage, set it into this component's state
    // !! is a truthy/falsey case in JS
    !!themeFromLocalStorage && setTheme(themeFromLocalStorage);
  }, []);

  // On theme change, set local storage theme value
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
