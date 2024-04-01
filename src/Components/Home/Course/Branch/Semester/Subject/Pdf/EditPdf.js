import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import globalController from "../../../../../../GlobalController";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const EditPdfPage = ({ pdfData }) => {
  const pdfId = pdfData.id;
  const history = useHistory();
  const [formData, setFormData] = useState({
    id: pdfId,
    title: pdfData.title,
    subTitle: pdfData.subTitle,
    isQuestionPaper: pdfData.isQuestionPaper,
  });

  const onUpdatePdf = (info) => {
    globalController
      .postData("studyMaterials/update/pdf", { pdfData: info }, {})
      .then((response) => {
        alert("Information UPDATED!");

        history.push("/courses/viewCourse/viewBranch/viewSemester/viewSubject");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdatePdf(formData);
  };

  return (
    <Container className="mt-5">
      <h2>Edit PDF</h2>
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
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            name="isQuestionPaper"
            checked={formData.isQuestionPaper}
            onChange={handleChange}
            label="Is Question Paper"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update PDF
        </Button>
      </Form>
    </Container>
  );
};

export default EditPdfPage;
