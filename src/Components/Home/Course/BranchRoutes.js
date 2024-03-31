import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import CoursePage from "./Course";
import EditCoursePage from "./EditCourse";
import CourseViewPage from "./ViewCourse";
import EditBranchPage from "./Branch/EditBranch";
import { SemesterRoutes } from "./Branch/SemesterRoutes";

export const BranchRoutes = ({ basePath, setCurrentCourse, currentCourse }) => {
  const [currentBranch, setCurrentBranch] = useState();

  const path = `${basePath}/viewCourse`;

  return (
    <>
      <Switch>
        <Route path={path + "/viewBranch"}>
          <SemesterRoutes basePath={path} currentBranch={currentBranch} />
        </Route>

        <Route path={path + "/editBranch"}>
          <EditBranchPage branchData={currentBranch} />
        </Route>
        <Route path={path}>
          <CourseViewPage
            basePath={path}
            course={currentCourse}
            setCurrentBranch={setCurrentBranch}
          />
        </Route>
        <Route path={`${basePath}`}>
          <CoursePage setCurrentCourse={setCurrentCourse} />
        </Route>

        <Route path={`${basePath}/*`}>
          <Redirect to={`${basePath}`} />
        </Route>
      </Switch>
    </>
  );
};
