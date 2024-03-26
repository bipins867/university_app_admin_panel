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
import AddStudent from "./Student/AddStudent";
import { useSelector } from "react-redux";
import Faculties from "./Faculty/Faculty";

const Homepage = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={3} md={2} className="bg-light">
          <Nav className="flex-column">
            <NavLink to="/students">Students</NavLink>
            <NavLink to="/faculties">Faculty</NavLink>
            <NavLink to="/alumnis">Alumni</NavLink>
            <NavLink to="/eventAndNotices">Event & Noticice</NavLink>
            <NavLink to="/clubAndSocieties">Clubs & Societies</NavLink>
            <NavLink to="/homePage">University Homepage</NavLink>
            <NavLink to="/aboutPage">About the University</NavLink>
            <NavLink to="/departments">Departments</NavLink>
            <br />
            <NavLink to="/admins">Admins</NavLink>
          </Nav>
        </Col>
        <Col sm={9} md={10}>
          <Switch>
            <Route path="/students/addStudent">
              <AddStudent />
            </Route>
            <Route path="/students">
              <Students />
            </Route>{" "}
            <Route path="/faculties">
              <Faculties />
            </Route>{" "}
            <Route path="/alumnis">
              <Students />
            </Route>{" "}
            <Route path="/eventAndNotices">
              <Students />
            </Route>{" "}
            <Route path="/clubAndSocieties">
              <Students />
            </Route>{" "}
            <Route path="/homePage">
              <UniversityHomepage />
            </Route>{" "}
            <Route path="/aboutPage">
              <Students />
            </Route>{" "}
            <Route path="/departments">
              <Students />
            </Route>{" "}
            <Route path="/admins">
              <Students />
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
