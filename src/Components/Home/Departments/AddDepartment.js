import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import globalController from "../../GlobalController";

const AddDepartment = () => {
  const history = useHistory();
  const onAdd = (info) => {
    globalController
      .postData("department/create/department", info, {})
      .then((data) => {
        history.push("/departments");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [departmentData, setDepartmentData] = useState({
    title: "",
    subTitle: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartmentData({ ...departmentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(departmentData);
    // Reset form fields
    setDepartmentData({
      title: "",
      subTitle: "",
      about: "",
    });
  };

  return (
    <Container className="mt-5">
      <h2>Add Department</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={departmentData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subTitle"
            value={departmentData.subTitle}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>About</Form.Label>
          <Form.Control
            as="textarea"
            name="about"
            value={departmentData.about}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Department
        </Button>
      </Form>
    </Container>
  );
};

export default AddDepartment;
