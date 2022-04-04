import { Routes, Route } from "react-router-dom";

import Main from "../../screens/Main/Main";
import Hub from "../../screens/Hub/Hub";
import Projects from "../../screens/Projects/Projects";
import Resume from "../../screens/Resume/Resume";
import WebsiteAuth from "../../atoms/WebsiteAuth/WebsiteAuth";

import Security from "../../atoms/Security/Security";
import Storage from "../../atoms/Storage/Storage";

export default function WebRoutes() {
/* <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */
  return (
   
          <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/hub"
              element={
                <WebsiteAuth>
                  <Hub />
                </WebsiteAuth>
              }
            />
            <Route path="/" element={<Main />} />
            <Route path="/hub/security" element={<Security />} />
            <Route path="/hub/storage" element={<Storage />} />
          </Routes>
  );
}
