import "./App.css";

import { welcome } from "../../../Constants";

import ThemeProvider from "../../organisms/Theme/ColorTheme/ColorThemeProvider";
import WebRoutes from "../../atoms/WebRoutes/WebRoutes";
import Navigation from "../../atoms/Navigation/Navigation";

export default function App() {
  console.log(welcome);

  return (
    <ThemeProvider>
        <div className="main-theme">
          <Navigation/>
          <WebRoutes />
        </div>
    </ThemeProvider>
  );
}
