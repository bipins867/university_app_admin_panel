import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import { useEffect, useState } from "react";

import { getAllDepartments } from "../controller";
import Departments from "./Departments";
import ViewDepartment from "./ViewDepartment";
import EditDepartment from "./EditDepartment";
import AddDepartment from "./AddDepartment";

export const DepartmentRoutes = (props) => {
  const [currentDepartment, setCurrentDepartment] = useState();

  return (
    <>
      <Switch>
        <Route path="/departments/addDepartment">
          <AddDepartment />
        </Route>
        <Route path="/departments/viewDepartment">
          <ViewDepartment currentDepartment={currentDepartment} />
        </Route>
        <Route path="/departments/editDepartment">
          <EditDepartment currentDepartment={currentDepartment} />
        </Route>
        <Route path="/departments">
          <Departments setCurrentDepartment={setCurrentDepartment} />
        </Route>
        <Route path="/departments/*">
          <Redirect to="/departments" />
        </Route>
      </Switch>
    </>
  );
};
