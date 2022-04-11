import "./App.css";

import { welcome } from "../../../Constants";

import ThemeSetter from "../../organisms/Theme/ColorTheme/ColorThemeSetter";
import ThemeProvider from "../../organisms/Theme/ColorTheme/ColorThemeProvider";
import Navigation from "../../atoms/Navigation/Navigation";
import WebRoutes from "../../atoms/WebRoutes/WebRoutes";
import CssThemeSetter from "../../organisms/Theme/CssTheme/CssThemeSetter";
import CssThemeProvider from "../../organisms/Theme/CssTheme/CssThemeProvider";

export default function App() {
  console.log(welcome);

  return (
    <ThemeProvider>
      <CssThemeProvider>
        <div className="main-theme">
          <div className="setters">
            <ul>
              <li>
                <ThemeSetter />
              </li>
              <li>
                <CssThemeSetter />
              </li>
            </ul>
          </div>
          {/*<Navigation />*/}
          <WebRoutes />
        </div>
      </CssThemeProvider>
    </ThemeProvider>
  );
}
