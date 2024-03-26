import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import { useEffect, useState } from "react";

import { getAllFaculties } from "../controller";
import Faculties from "./Faculty";

export const FacultyRoutes = (props) => {
  const [currentFaculty, setCurrentFaculty] = useState();

  const [faculties, setFaculties] = useState([]);
  console.log("Are you leasioning me");
  useEffect(() => {
    getAllFaculties()
      .then((result) => {
        setFaculties(result.faculties);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  return (
    <>
      <Switch>
        <Route path="/faculties">
          <Faculties faculties={faculties} />
        </Route>
        <Route path="/faculties/*">
          <Redirect to="/faculties" />
        </Route>
      </Switch>
    </>
  );
};
