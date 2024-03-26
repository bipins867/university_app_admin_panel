import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getAllAlumni } from "../controller"; // Assuming you have a function to fetch alumni

const Alumni = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    getAllAlumni()
      .then((result) => {
        setAlumni(result.alumnis);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  // Handle form submission to add new alumni
  const handleAddAlumni = () => {};

  // Handle deletion of alumni
  const handleDeleteAlumni = (id) => {};

  // Handle search term change
  const handleSearchTermChange = (e) => {};

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
          {alumni.map((alumnus) => (
            <tr key={alumnus.id}>
              <td>{alumnus.id}</td>
              <td>{alumnus.name}</td>
              <td>{alumnus.email}</td>
              <td>{alumnus.yearOfPassing}</td>
              <td>
                <Button variant="secondary" size="sm" className="me-2">
                  View
                </Button>
                <Button variant="primary" size="sm" className="me-2">
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteAlumni(alumnus.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <NavLink to="/alumni/addAlumni" className="btn btn-primary">
        Add Alumni
      </NavLink>
    </Container>
  );
};

export default Alumni;
