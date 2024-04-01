import { useState } from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import SubjectPage from "./Subject";
import EditPage from "./Pdf/EditPdf";
import EditPdfPage from "./Pdf/EditPdf";

export const PdfRoutes = ({ basePath, currentSubject }) => {
  const [currentPdf, setCurrentPdf] = useState();

  const path = `${basePath}/viewSubject`;
  return (
    <>
      <Switch>
        <Route path={path + "/editPdf"}>
          <EditPdfPage pdfData={currentPdf} />
        </Route>
        <Route path={`${basePath}`}>
          <SubjectPage
            basePath={path}
            subject={currentSubject}
            setCurrentPdf={setCurrentPdf}
          />
        </Route>
        <Route path={`${basePath}/*`}>
          <Redirect to={`${basePath}`} />
        </Route>
      </Switch>
    </>
  );
};
