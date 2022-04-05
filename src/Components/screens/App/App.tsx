import "./App.css";

import { welcome } from "../../../Constants";

import ThemeSetter from "../../atoms/Theme/ThemeSetter";
import ThemeProvider from "../../atoms/Theme/ThemeProvider";
import Navigation from "../../atoms/Navigation/Navigation";
import WebRoutes from "../../atoms/WebRoutes/WebRoutes";
import Background from "../../atoms/Background/Background";

export default function App() {
  console.log(welcome);

  return (
    <ThemeProvider>
      <div className="main-theme">
        <Background />
        <ThemeSetter />
        <Navigation />
        <WebRoutes />
      </div>
    </ThemeProvider>
  );
}
