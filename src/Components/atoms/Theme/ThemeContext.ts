import { createContext, Dispatch, SetStateAction } from "react";

interface ThemeContextInterface {
    theme: string,
    setTheme: Dispatch<SetStateAction<string>>
}

export const initialThemeState: ThemeContextInterface = {
  theme: "light",
  setTheme: () => null,
};

const ThemeContext = createContext<ThemeContextInterface>(initialThemeState);
export default ThemeContext;
