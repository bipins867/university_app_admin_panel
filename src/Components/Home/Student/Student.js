import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import { getAllStudents } from "../controller";
import globalController from "../../GlobalController";
const Students = (props) => {
  const [count, setCount] = useState(0);
  const [students, setStudents] = useState([]);
  const setCurrentStudent = props.setCurrentStudent;

  useEffect(() => {
    getAllStudents()
      .then((result) => {
        setStudents(result.students);
      })
      .catch((e) => {
        alert(e);
      });
  }, [count]);

  const handleDeleteStudent = (id) => {
    globalController
      .postData("user/delete/student", { userId: id }, {})
      .then((data) => {
        setCount(count + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                  onClick={() => {
                    handleDeleteStudent(student.UserId);
                  }}
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
