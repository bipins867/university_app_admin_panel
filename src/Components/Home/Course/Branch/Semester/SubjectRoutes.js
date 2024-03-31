import { useState } from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import SemestePage from "./Semester";
import EditSubjectPage from "./Subject/EditSubject";
import { PdfRoutes } from "./Subject/PdfRoutes";

export const SubjectRoutes = ({ basePath, currentSemester }) => {
  const [currentSubject, setCurrentSubject] = useState();

  const path = `${basePath}/viewSemester`;
  return (
    <>
      <Switch>
        <Route path={path + "/viewSubject"}>
          <PdfRoutes basePath={path} currentSubject={currentSubject} />
        </Route>
        <Route path={path + "/editSubject"}>
          <EditSubjectPage subjectData={currentSubject} />
        </Route>
        <Route path={`${basePath}`}>
          <SemestePage
            basePath={path}
            semester={currentSemester}
            setCurrentSubject={setCurrentSubject}
          />
        </Route>

        <Route path={`${basePath}/*`}>
          <Redirect to={`${basePath}`} />
        </Route>
      </Switch>
    </>
  );
};
