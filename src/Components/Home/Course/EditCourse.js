import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import globalController from "../../GlobalController";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const EditCoursePage = ({ currentCourse }) => {
  const history = useHistory();
  const onUpdateCourse = (info) => {
    globalController
      .postData("studyMaterials/update/course", { courseData: info }, {})
      .then((response) => {
        alert("Information UPDATED!");

        history.push("/courses/viewCourse");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };
  const courseId = currentCourse.id;
  const courseData = currentCourse;
  const [formData, setFormData] = useState({
    id: courseId,
    title: courseData.title,
    subTitle: courseData.subTitle,
    noOfYears: courseData.noOfYears,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateCourse(formData);
  };

  return (
    <Container className="mt-5">
      <h2>Edit Course</h2>
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
          <Form.Label>No. of Years</Form.Label>
          <Form.Control
            type="text"
            name="noOfYears"
            value={formData.noOfYears}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Course
        </Button>
      </Form>
    </Container>
  );
};

export default EditCoursePage;
