import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { getAllFaculties } from "../controller";
import globalController from "../../GlobalController";

const Faculties = (props) => {
  const setCurrentFaculty = props.setCurrentFaculty;
  const [faculties, setFaculties] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAllFaculties()
      .then((result) => {
        setFaculties(result.faculties);
      })
      .catch((e) => {
        alert(e);
      });
  }, [count]);

  // Handle form submission to add new faculty
  const handleAddFaculty = () => {};

  // Handle deletion of faculty
  const handleDeleteFaculty = (id) => {
    globalController
      .postData("user/delete/faculty", { userId: id }, {})
      .then((data) => {
        setCount(count + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Handle search term change
  const handleSearchTermChange = (e) => {};

  return (
    <Container className="mt-5">
      <h2>Faculties</h2>
      <Row className="mb-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search by name, email, or ID"
            onChange={handleSearchTermChange}
          />
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Date of Joining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.id}</td>
              <td>{faculty.name}</td>
              <td>{faculty.email}</td>
              <td>{faculty.designation}</td>
              <td>{faculty.dateOfJoining}</td>

              <td>
                <NavLink
                  to="/faculties/viewFaculty"
                  className="btn btn-secondary"
                  onClick={() => setCurrentFaculty(faculty)}
                >
                  View
                </NavLink>
                <NavLink
                  to="/faculties/editFaculty"
                  className="btn btn-primary"
                  onClick={() => setCurrentFaculty(faculty)}
                >
                  Edit
                </NavLink>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDeleteFaculty(faculty.UserId);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <NavLink to="/faculties/addFaculty" className="btn btn-primary">
        Add Faculty
      </NavLink>
    </Container>
  );
};

export default Faculties;
