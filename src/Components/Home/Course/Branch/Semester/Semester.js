import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import globalController from "../../../../GlobalController";

const SemestePage = ({ basePath, semester, setCurrentSubject }) => {
  const [count, setCount] = useState(0);
  const [subjects, setSubjects] = useState([]);
  const [subjectData, setSubjectData] = useState({
    title: "",
    subTitle: "",
  });

  const onAddSubject = (info) => {
    globalController
      .postData(
        "studyMaterials/create/subject",
        { ...info, semesterId: semester.id },
        {}
      )
      .then((result) => {
        alert("Subject Added!");
        setCount(count + 1);
      })
      .catch((e) => {
        alert(e);
      });
  };

  useEffect(() => {
    globalController
      .postData("studyMaterials/get/subjects", { semesterId: semester.id }, {})
      .then((result) => {
        setSubjects(result.subjects);
      })
      .catch((e) => {
        alert(e);
      });
  }, [count]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubjectData({ ...subjectData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSubject(subjectData);
    // Reset form fields
    setSubjectData({
      title: "",
      subTitle: "",
    });
  };
  const handleDeleteSubject = (id) => {
    globalController
      .postData("studyMaterials/delete/subject", { subjectId: id }, {})
      .then((data) => {
        setCount(count + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="mt-5">
      <h2>View Semester</h2>
      <h3>Semester Details</h3>
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
            <td>{semester.id}</td>
            <td>{semester.title}</td>
            <td>{semester.subTitle}</td>
          </tr>
        </tbody>
      </Table>

      <h3>Subjects</h3>
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
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <td>{subject.id}</td>
              <td>{subject.title}</td>
              <td>{subject.subTitle}</td>
              <td>
                <NavLink
                  to={`${basePath}/viewSubject`}
                  className="btn btn-secondary"
                  onClick={() => {
                    setCurrentSubject(subject);
                  }}
                >
                  View
                </NavLink>
                <NavLink
                  to={`${basePath}/editSubject`}
                  className="btn btn-primary"
                  onClick={() => {
                    setCurrentSubject(subject);
                  }}
                >
                  Edit
                </NavLink>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDeleteSubject(subject.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>Add Subject</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={subjectData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subTitle"
            value={subjectData.subTitle}
            onChange={handleChange}
            placeholder="Enter subtitle"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Subject
        </Button>
      </Form>
    </Container>
  );
};

export default SemestePage;
