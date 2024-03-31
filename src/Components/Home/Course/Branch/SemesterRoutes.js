import { useState } from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import BranchPage from "./Branch";
import EditSemesterPage from "./Semester/EditSemester";
import { SubjectRoutes } from "./Semester/SubjectRoutes";

export const SemesterRoutes = ({ basePath, currentBranch }) => {
  const [currentSemester, setCurrentSemester] = useState();

  const path = `${basePath}/viewBranch`;
  return (
    <>
      <Switch>
        <Route path={path + "/viewSemester"}>
          <SubjectRoutes basePath={path} currentSemester={currentSemester} />
        </Route>
        <Route path={path + "/editSemester"}>
          <EditSemesterPage semesterData={currentSemester} />
        </Route>
        <Route path={`${basePath}`}>
          <BranchPage
            basePath={path}
            branch={currentBranch}
            setCurrentSemester={setCurrentSemester}
          />
        </Route>

        <Route path={`${basePath}/*`}>
          <Redirect to={`${basePath}`} />
        </Route>
      </Switch>
    </>
  );
};
