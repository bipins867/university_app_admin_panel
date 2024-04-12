import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import globalController from "../../../GlobalController";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const BranchPage = ({ basePath, branch, setCurrentSemester }) => {
  const [count, setCount] = useState(0);
  const [semesters, setSemesters] = useState([]);
  const [semesterData, setSemesterData] = useState({
    title: "",
    subTitle: "",
  });

  const onAddSemester = (info) => {
    globalController
      .postData(
        "studyMaterials/create/semester",
        { ...info, branchId: branch.id },
        {}
      )
      .then((result) => {
        alert("Semester Added!");
        setCount(count + 1);
      })
      .catch((e) => {
        alert(e);
      });
  };

  useEffect(() => {
    globalController
      .postData("studyMaterials/get/semesters", { branchId: branch.id }, {})
      .then((result) => {
        setSemesters(result.semesters);
      })
      .catch((e) => {
        alert(e);
      });
  }, [count]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSemesterData({ ...semesterData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSemester(semesterData);
    // Reset form fields
    setSemesterData({
      title: "",
      subTitle: "",
    });
  };
  const handleSemesterDelete = (id) => {
    globalController
      .postData("studyMaterials/delete/semester", { semesterId: id }, {})
      .then((data) => {
        setCount(count + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="mt-5">
      <h2>View Branch</h2>
      <h3>Branch Details</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Subtitle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{branch.id}</td>
            <td>{branch.title}</td>
            <td>{branch.subTitle}</td>
          </tr>
        </tbody>
      </Table>

      <h3>Semesters</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {semesters.map((semester) => (
            <tr key={semester.id}>
              <td>{semester.id}</td>
              <td>{semester.title}</td>
              <td>{semester.subTitle}</td>
              <td>
                <NavLink
                  to={`${basePath}/viewSemester`}
                  className="btn btn-secondary"
                  onClick={() => {
                    setCurrentSemester(semester);
                  }}
                >
                  View
                </NavLink>
                <NavLink
                  to={`${basePath}/editSemester`}
                  className="btn btn-primary"
                  onClick={() => {
                    setCurrentSemester(semester);
                  }}
                >
                  Edit
                </NavLink>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleSemesterDelete(semester.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>Add Semester</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={semesterData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subTitle"
            value={semesterData.subTitle}
            onChange={handleChange}
            placeholder="Enter subtitle"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Semester
        </Button>
      </Form>
    </Container>
  );
};

export default BranchPage;
