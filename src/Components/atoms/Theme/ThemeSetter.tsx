import { useContext } from "react";

import ThemeContext from "./ThemeContext";

export default function ThemeSetter() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
      {themeOptions.map((option, index) => {
        return (
          <option value={option.value} key={index}>
            {option.value}
          </option>
        );
      })}
    </select>
  );
}

const themeOptions = [{ value: "light" }, { value: "dark" }, { value: "poo" }];
