import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import AddStudent from "./AddStudent";
import Students from "./Student";
import ViewStudent from "./ViewStudent";

import { getAllStudents } from "../controller";
import { useEffect, useState } from "react";
import EditStudent from "./EditStudent";

export const StudentRoutes = (props) => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState();

  useEffect(() => {
    getAllStudents()
      .then((result) => {
        setStudents(result.students);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);
  return (
    <>
      <Switch>
        <Route path="/students/addStudent">
          <AddStudent />
        </Route>
        <Route path="/students/viewStudent">
          <ViewStudent currentStudent={currentStudent} />
        </Route>
        <Route path="/students/editStudent">
          <EditStudent currentStudent={currentStudent} />
        </Route>
        <Route path="/students/">
          <Students students={students} setCurrentStudent={setCurrentStudent} />
        </Route>
        <Route path="/students/*">
          <Redirect to="/students" />
        </Route>
      </Switch>
    </>
  );
};
