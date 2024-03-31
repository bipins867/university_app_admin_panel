import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getAllAlumni } from "../controller";

const Alumni = (props) => {
  const [alumnis, setAlumnis] = useState([]);

  const setCurrentAlumni = props.setCurrentAlumni;

  // Handle form submission to add new alumni
  const handleAddAlumni = () => {};

  // Handle deletion of alumni
  const handleDeleteAlumni = (id) => {};

  // Handle search term change
  const handleSearchTermChange = (e) => {};
  useEffect(() => {
    getAllAlumni()
      .then((result) => {
        setAlumnis(result.alumnis);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);
  return (
    <Container className="mt-5">
      <h2>Alumni</h2>
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
            <th>Year Of Passing</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {alumnis.map((alumnus) => (
            <tr key={alumnus.id}>
              <td>{alumnus.id}</td>
              <td>{alumnus.name}</td>
              <td>{alumnus.email}</td>
              <td>{alumnus.yearOfPassing}</td>
              <td>
                <NavLink
                  to="/alumnis/viewAlumni"
                  className="btn btn-secondary"
                  onClick={() => setCurrentAlumni(alumnus)}
                >
                  View
                </NavLink>
                <NavLink
                  to="/alumnis/editAlumni"
                  className="btn btn-primary"
                  onClick={() => setCurrentAlumni(alumnus)}
                >
                  Edit
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <NavLink to="/alumnis/addAlumni" className="btn btn-primary">
        Add Alumni
      </NavLink>
    </Container>
  );
};

export default Alumni;
