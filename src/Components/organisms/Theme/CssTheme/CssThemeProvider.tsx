import { useEffect, useState } from "react";
import CardFollow from "../../../atoms/CardFollow/CardFollow";
import FloatingShapes from "../../../atoms/FloatingShapes/FloatingShapes";
import CssContext, { initialCssThemeState } from "./CssThemeContext";

function getProviderHMTL(cssTheme: string, children: any) {
  switch (cssTheme) {
    case "floaters":
      return (
        <>
          <FloatingShapes />
          {children}
        </>
      );
    case "card follow":
      return <CardFollow>{children}</CardFollow>;
    default:
      return <>{children}</>;
  }
}

const CssThemeProvider = ({ children }: any) => {
  const [cssTheme, setCssTheme] = useState(initialCssThemeState.cssTheme);

  // Get css theme from local storage and set to local state if it exists
  useEffect(() => {
    const themeFromLocalStorage = window.localStorage.getItem("cssTheme");

    // if css theme exists in Local Storage, set it into this component's state
    // !! is a truthy/falsey case in JS
    !!themeFromLocalStorage && setCssTheme(themeFromLocalStorage);
  }, []);

  // On css theme change, set local storage css theme value
  useEffect(() => {
    window.localStorage.setItem("cssTheme", cssTheme);
  }, [cssTheme]);

  const providerHTML = getProviderHMTL(cssTheme, children);
  return (
    <CssContext.Provider value={{ cssTheme, setCssTheme }}>
      {providerHTML}
    </CssContext.Provider>
  );
};

export default CssThemeProvider;
