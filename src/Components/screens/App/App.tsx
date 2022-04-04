import "./App.css";

import { welcome } from "../../../Constants";

import ThemeSetter from "../../atoms/Theme/ThemeSetter";
import ThemeProvider from "../../atoms/Theme/ThemeProvider";
import Navigation from "../../atoms/Navigation/Navigation";
import WebRoutes from "../../atoms/WebRoutes/WebRoutes";

export default function App() {
  console.log(welcome);

  return (
    <ThemeProvider>
      <div className="main-theme">
        <ThemeSetter />
        <Navigation />
        <WebRoutes />
      </div>
    </ThemeProvider>
  );
}
