import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import globalController from "../../../../../GlobalController";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const SubjectPage = ({ basePath, subject, setCurrentPdf }) => {
  const [count, setCount] = useState(0);
  const [pdfs, setPdfs] = useState([]);
  const [pdfData, setPdfData] = useState({
    title: "",
    subTitle: "",
    isQuestionPaper: false,
  });
  const onAddPdf = (info) => {
    globalController
      .postData(
        "studyMaterials/create/pdf",
        { ...info, subjectId: subject.id },
        {}
      )
      .then((result) => {
        alert("Pdf Added!");
        setCount(count + 1);
      })
      .catch((e) => {
        alert(e);
      });
  };

  useEffect(() => {
    globalController
      .postData(
        "studyMaterials/get/pdfs",
        { subjectId: subject.id, all: true },
        {}
      )
      .then((result) => {
        setPdfs(result.pdfs);
      })
      .catch((e) => {
        alert(e);
      });
  }, [count]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setPdfData({ ...pdfData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPdf(pdfData);
    // Reset form fields
    setPdfData({
      title: "",
      subTitle: "",
      isQuestionPaper: false,
    });
  };

  return (
    <Container className="mt-5">
      <h2>View Subject</h2>
      <h3>Subject Details</h3>
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
            <td>{subject.id}</td>
            <td>{subject.title}</td>
            <td>{subject.subTitle}</td>
          </tr>
        </tbody>
      </Table>

      <h3>PDFs</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Is Question Paper</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pdfs.map((pdf) => (
            <tr key={pdf.id}>
              <td>{pdf.title}</td>
              <td>{pdf.subTitle}</td>
              <td>{pdf.isQuestionPaper ? "Yes" : "No"}</td>
              <td>
                <NavLink
                  to={`${basePath}/viewPdf`}
                  className="btn btn-secondary"
                  onClick={() => {
                    setCurrentPdf(pdf);
                  }}
                >
                  View
                </NavLink>
                <NavLink
                  to={`${basePath}/editPdf`}
                  className="btn btn-primary"
                  onClick={() => {
                    setCurrentPdf(pdf);
                  }}
                >
                  Edit
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>Add PDF</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={pdfData.title}
            onChange={handleChange}
            placeholder="Enter title"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subTitle"
            value={pdfData.subTitle}
            onChange={handleChange}
            placeholder="Enter subtitle"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            name="isQuestionPaper"
            checked={pdfData.isQuestionPaper}
            onChange={handleChange}
            label="Is Question Paper"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add PDF
        </Button>
      </Form>
    </Container>
  );
};

export default SubjectPage;
