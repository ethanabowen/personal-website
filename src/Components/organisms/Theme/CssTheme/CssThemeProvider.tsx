import { useEffect, useState } from "react";
import FloatingShapes from "../../../atoms/FloatingShapes/FloatingShapes";
import CssContext, { initialCssThemeState } from "./CssThemeContext";

const CssThemeProvider = ({ children }: any) => {
  const [cssTheme, setCssTheme] = useState(initialCssThemeState.cssTheme);

  // Get css theme from local storage and set to local state if it exists
  useEffect(() => {
    const themeFromLocalStorage = window.localStorage.getItem("cssTheme");

    // if css theme exists in Local Storage, set it into this component's state
    // !! is a truthy/falsey case in JS
    //!!themeFromLocalStorage && setCssTheme(themeFromLocalStorage);
  }, []);

  // On css theme change, set local storage css theme value
  useEffect(() => {
    window.localStorage.setItem("cssTheme", cssTheme);
  }, [cssTheme]);

  return (
    <CssContext.Provider value={{ cssTheme, setCssTheme }}>
      {cssTheme === "floaters" && <FloatingShapes />}
      {children}
    </CssContext.Provider>
  );
};

export default CssThemeProvider;
