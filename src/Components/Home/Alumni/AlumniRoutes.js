import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import { useEffect, useState } from "react";

import { getAllFaculties } from "../controller";

export const FacultyRoutes = (props) => {
  const [currentFaculty, setCurrentFaculty] = useState();

  const [faculties, setFaculties] = useState([]);

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
      <Switch></Switch>
    </>
  );
};
