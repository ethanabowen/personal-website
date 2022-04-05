import { createContext, Dispatch, SetStateAction } from "react";

interface ColorThemeContextInterface {
    colorTheme: string,
    setColorTheme: Dispatch<SetStateAction<string>>
}

export const initialColorThemeState: ColorThemeContextInterface = {
  colorTheme: "light",
  setColorTheme: () => null,
};

const ColorThemeContext = createContext<ColorThemeContextInterface>(initialColorThemeState);
export default ColorThemeContext;
