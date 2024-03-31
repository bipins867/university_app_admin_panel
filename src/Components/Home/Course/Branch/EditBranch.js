import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import globalController from "../../../GlobalController";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const EditBranchPage = ({ branchData }) => {
  const branchId = branchData.id;
  const history = useHistory();
  const [formData, setFormData] = useState({
    id: branchId,
    title: branchData.title,
    subTitle: branchData.subTitle,
  });

  const onUpdateBranch = (info) => {
    globalController
      .postData("studyMaterials/update/branch", { branchData: info }, {})
      .then((response) => {
        alert("Information UPDATED!");

        history.push("/courses/viewCourse");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateBranch(formData);
  };

  return (
    <Container className="mt-5">
      <h2>Edit Branch</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" name="id" value={formData.id} readOnly />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subTitle"
            value={formData.subTitle}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Branch
        </Button>
      </Form>
    </Container>
  );
};

export default EditBranchPage;
