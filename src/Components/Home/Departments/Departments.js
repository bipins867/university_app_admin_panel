import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { getAllDepartments } from "../controller"; // Assuming you have a function to fetch departments
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Departments = (props) => {
  const setCurrentDepartment = props.setCurrentDepartment;

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getAllDepartments()
      .then((result) => {
        setDepartments(result.departments);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);
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
                <NavLink
                  to="/departments/viewDepartment"
                  className="btn btn-secondary"
                  onClick={() => setCurrentDepartment(department)}
                >
                  View
                </NavLink>
                <NavLink
                  to="/departments/editDepartment"
                  className="btn btn-primary"
                  onClick={() => setCurrentDepartment(department)}
                >
                  Edit
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <NavLink to="/departments/addDepartment" className="btn btn-primary">
        Add Department
      </NavLink>
    </Container>
  );
};

export default Departments;
