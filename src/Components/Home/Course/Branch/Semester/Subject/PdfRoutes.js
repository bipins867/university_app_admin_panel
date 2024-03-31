import { useState } from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import SubjectPage from "./Subject";

export const PdfRoutes = ({ basePath, currentSubject }) => {
  const [currentPdf, setCurrentPdf] = useState();

  const path = `${basePath}/viewSubject`;
  return (
    <>
      <Switch>
        <Route path={`${basePath}`}>
          <SubjectPage
            basePath={path}
            subject={currentSubject}
            setCurrentPdf={setCurrentPdf}
          />
        </Route>
        <Route path={`${basePath}/*`}>
          <Redirect to={`${basePath}`} />
        </Route>
      </Switch>
    </>
  );
};
