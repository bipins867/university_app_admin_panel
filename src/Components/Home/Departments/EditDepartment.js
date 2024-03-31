import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { updateInfo } from "../updateController";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const EditDepartment = ({ currentDepartment }) => {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const [editedDepartment, setEditedDepartment] = useState(currentDepartment);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDepartment({ ...editedDepartment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInfo(
      "department/update/departmentInfo",
      { departmentInfo: editedDepartment },
      token
    )
      .then((response) => {
        alert("Info Updated!");
        history.push("/departments");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <Container className="mt-5">
      <h2>Edit Department</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={editedDepartment.id}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={editedDepartment.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subTitle"
            value={editedDepartment.subTitle}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>About</Form.Label>
          <Form.Control
            as="textarea"
            name="about"
            value={editedDepartment.about}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>HoD ID</Form.Label>
          <Form.Control
            type="text"
            name="hodId"
            value={editedDepartment.hodId}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default EditDepartment;
