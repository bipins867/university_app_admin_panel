import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import { useEffect, useState } from "react";

import { getAllNotifications } from "../controller";
import Notifications from "./Notifications";
import ViewNotification from "./ViewNotification";
import AddNotification from "./AddNotification";

export const NotificationRoutes = (props) => {
  const [currentNotifiction, setCurrentNotifiction] = useState();

  return (
    <>
      <Switch>
        <Route path="/notifications/addNotification">
          <AddNotification />
        </Route>
        <Route path="/notifications/viewNotification">
          <ViewNotification currentNotifiction={currentNotifiction} />
        </Route>
        <Route path="/notifications">
          <Notifications setCurrentNotifiction={setCurrentNotifiction} />
        </Route>
        <Route path="/notifications/*">
          <Redirect to="/notifications" />
        </Route>
      </Switch>
    </>
  );
};
