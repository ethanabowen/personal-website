import { createContext, Dispatch, SetStateAction } from "react";

interface CssThemeContextInterface {
    cssTheme: string,
    setCssTheme: Dispatch<SetStateAction<string>>
}

export const initialCssThemeState: CssThemeContextInterface = {
  cssTheme: "none",
  setCssTheme: () => null,
};

const CssThemeContext = createContext<CssThemeContextInterface>(initialCssThemeState);
export default CssThemeContext;
