import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import { useState } from "react";
import EditCoursePage from "./EditCourse";
import { BranchRoutes } from "./BranchRoutes";

export const CourseRoutes = (props) => {
  const path = "/courses";

  const [currentCourse, setCurrentCourse] = useState();

  return (
    <>
      <Switch>
        <Route path={`${path}/editCourse`}>
          <EditCoursePage currentCourse={currentCourse} />
        </Route>
        <Route path={`${path}`}>
          <BranchRoutes
            basePath={path}
            setCurrentCourse={setCurrentCourse}
            currentCourse={currentCourse}
          />
        </Route>
        <Route path={`${path}/*`}>
          <Redirect to={path} />
        </Route>
      </Switch>
    </>
  );
};
