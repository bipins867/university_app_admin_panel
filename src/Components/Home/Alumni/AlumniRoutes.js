import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import { useEffect, useState } from "react";

import Alumni from "./Alumni";
import ViewAlumni from "./ViewAlumni";
import EditAlumni from "./EditAlumni";
import AddAlumni from "./AddAlumni";

export const AlumniRoutes = (props) => {
  const [currentAlumni, setCurrentAlumni] = useState();

  return (
    <>
      <Switch>
        <Route path="/alumnis/addAlumni">
          <AddAlumni />
        </Route>
        <Route path="/alumnis/viewAlumni">
          <ViewAlumni currentAlumni={currentAlumni} />
        </Route>
        <Route path="/alumnis/editAlumni">
          <EditAlumni currentAlumni={currentAlumni} />
        </Route>
        <Route path="/alumnis">
          <Alumni setCurrentAlumni={setCurrentAlumni} />
        </Route>
        <Route path="/alumnis/*">
          <Redirect to="/alumnis" />
        </Route>
      </Switch>
    </>
  );
};
