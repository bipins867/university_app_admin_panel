import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import { useEffect, useState } from "react";
import { getAllClubsAndSocieties } from "../controller";
import ClubAndSocieties from "./ClubsAndSocieties";
import ViewClubAndSociety from "./ViewClubAndSociety";
import EditClubSociety from "./EditClubAndSociety";
import AddClubAndSociety from "./AddClubAndSociety";

export const ClubAndSocietyRoutes = (props) => {
  const [currentClubAndSociety, setCurrentClubAndSociety] = useState();

  return (
    <>
      <Switch>
        <Route path="/clubAndSocieties/addClubAndSociety">
          <AddClubAndSociety />
        </Route>
        <Route path="/clubAndSocieties/viewClubAndSociety">
          <ViewClubAndSociety currentClubAndSociety={currentClubAndSociety} />
        </Route>
        <Route path="/clubAndSocieties/editClubAndSociety">
          <EditClubSociety currentClubAndSociety={currentClubAndSociety} />
        </Route>

        <Route path="/clubAndSocieties">
          <ClubAndSocieties
            setCurrentClubAndSociety={setCurrentClubAndSociety}
          />
        </Route>

        <Route path="/clubAndSocieties/*">
          <Redirect to="/clubAndSocieties" />
        </Route>
      </Switch>
    </>
  );
};
