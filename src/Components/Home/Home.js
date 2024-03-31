import React from "react";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import {
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Students from "./Student/Student";
import UniversityHomepage from "./UniversityHomePage/UniversityHomePage";
import { StudentRoutes } from "./Student/StudentRoutes";
import { FacultyRoutes } from "./Faculty/FacultyRoutes";
import { AlumniRoutes } from "./Alumni/AlumniRoutes";
import { NotificationRoutes } from "./Notifications/NotificationRoute";
import { ClubAndSocietyRoutes } from "./ClubAndSocieties/ClubAndSocietyRoutes";
import { DepartmentRoutes } from "./Departments/DepartmentRoutes";
import { CourseRoutes } from "./Course/CourseRoutes";

const Homepage = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={3} md={2} className="bg-light">
          <Nav className="flex-column">
            <NavLink to="/students">Students</NavLink>
            <NavLink to="/faculties">Faculty</NavLink>
            <NavLink to="/alumnis">Alumni</NavLink>
            <NavLink to="/notifications">Event & Noticice</NavLink>
            <NavLink to="/clubAndSocieties">Clubs & Societies</NavLink>
            <NavLink to="/courses">Course</NavLink>
            <NavLink to="/departments">Departments</NavLink>
          </Nav>
        </Col>
        <Col sm={9} md={10}>
          <Switch>
            <Route path="/students">
              <StudentRoutes />
            </Route>
            <Route path="/faculties">
              <FacultyRoutes />
            </Route>{" "}
            <Route path="/alumnis">
              <AlumniRoutes />
            </Route>{" "}
            <Route path="/notifications">
              <NotificationRoutes />
            </Route>{" "}
            <Route path="/clubAndSocieties">
              <ClubAndSocietyRoutes />
            </Route>{" "}
            <Route path="/departments">
              <DepartmentRoutes />
            </Route>
            <Route path="/courses">
              <CourseRoutes />
            </Route>
            <Route path="/*">
              <Redirect to="/homePage" />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
