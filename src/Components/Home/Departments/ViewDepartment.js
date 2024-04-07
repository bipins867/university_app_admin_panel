import React, { useEffect, useState } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";
import globalController from "../../GlobalController";

const ViewDepartment = ({ department }) => {
  const [count, setCount] = useState(0);
  const [faculties, setFaculties] = useState([]);
  const [collegeId, setCollegeId] = useState("");

  useEffect(() => {
    globalController
      .postData("department/get/faculties", { departmentId: department.id }, {})
      .then((result) => {
        setFaculties(result.faculties);
      })
      .catch((e) => {
        alert(e);
      });
  }, [count]);

  const onAddFaculty = (collegeId) => {
    globalController
      .postData(
        "department/create/faculty",
        {
          collegeId: collegeId,
          departmentId: department.id,
        },
        {}
      )
      .then((result) => {
        setCount(count + 1);
      })
      .catch((e) => {
        alert(e);
      });
  };
  const handleAddFaculty = () => {
    if (collegeId.trim() !== "") {
      onAddFaculty(collegeId);
      setCollegeId("");
    }
  };

  return (
    <Container className="mt-5">
      <h2>{department.title}</h2>
      <h4>{department.subTitle}</h4>
      <p>About: {department.about}</p>
      <p>HOD ID: {department.hodId}</p>

      <h3>Faculties</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.id}</td>
              <td>{faculty.name}</td>
              <td>{faculty.designation}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>Add Faculty</h3>
      <Form.Group className="mb-3">
        <Form.Label>College ID</Form.Label>
        <Form.Control
          type="text"
          value={collegeId}
          onChange={(e) => setCollegeId(e.target.value)}
          placeholder="Enter College ID"
        />
      </Form.Group>
      <Button variant="primary" onClick={handleAddFaculty}>
        Add Faculty
      </Button>
    </Container>
  );
};

export default ViewDepartment;
