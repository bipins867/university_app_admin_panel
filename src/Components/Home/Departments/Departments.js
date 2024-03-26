import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { getAllDepartments } from "../controller"; // Assuming you have a function to fetch departments

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getAllDepartments()
      .then((result) => {
        setDepartments(result.departments);
      })
      .catch((e) => {
        console.error("Error fetching departments:", e);
      });
  }, []);

  // Handle deletion of department
  const handleDeleteDepartment = (id) => {
    // Add logic to delete department
  };

  return (
    <Container className="mt-5">
      <h2>Departments</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>HoD ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.title}</td>
              <td>{department.subTitle}</td>
              <td>{department.hodId}</td>
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
                  onClick={() => handleDeleteDepartment(department.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Departments;
