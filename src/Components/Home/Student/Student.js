import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Students = (props) => {
  const students = props.students;
  const setCurrentStudent = props.setCurrentStudent;

  // Handle form submission to add new student
  const handleAddStudent = () => {};

  // Handle deletion of student
  const handleDeleteStudent = (id) => {};

  // Handle search term change
  const handleSearchTermChange = (e) => {};

  return (
    <Container className="mt-5">
      <h2>Students</h2>
      <Row className="mb-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search by name, email, or ID"
          />
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Course ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Year of Joining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.CourseId}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.yearOfJoining}</td>
              <td>
                <NavLink
                  to="/students/viewStudent"
                  className="btn btn-secondary"
                  onClick={() => setCurrentStudent(student)}
                >
                  View
                </NavLink>
                <NavLink
                  to="/students/editStudent"
                  className="btn btn-primary"
                  onClick={() => setCurrentStudent(student)}
                >
                  Edit
                </NavLink>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteStudent(student.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <NavLink to="/students/addStudent" className="btn btn-primary">
        Add Student
      </NavLink>
    </Container>
  );
};

export default Students;
