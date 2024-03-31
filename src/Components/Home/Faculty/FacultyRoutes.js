import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import { useEffect, useState } from "react";

import Faculties from "./Faculty";
import ViewFaculty from "./ViewFaculty";
import EditFaculty from "./EditFaculty";
import AddFaculty from "./AddFaculty";

export const FacultyRoutes = (props) => {
  const [currentFaculty, setCurrentFaculty] = useState();

  return (
    <>
      <Switch>
        <Route path="/faculties/addFaculty">
          <AddFaculty />
        </Route>
        <Route path="/faculties/viewFaculty">
          <ViewFaculty currentFaculty={currentFaculty} />
        </Route>
        <Route path="/faculties/editFaculty">
          <EditFaculty currentFaculty={currentFaculty} />
        </Route>
        <Route path="/faculties">
          <Faculties setCurrentFaculty={setCurrentFaculty} />
        </Route>
        <Route path="/faculties/*">
          <Redirect to="/faculties" />
        </Route>
      </Switch>
    </>
  );
};
