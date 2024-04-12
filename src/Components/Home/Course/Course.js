import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import globalController from "../../GlobalController";

const CoursePage = ({ setCurrentCourse }) => {
  const path = "/courses";
  const [count, setCount] = useState();

  const onAddCourse = (courseData) => {
    globalController
      .postData("studyMaterials/create/course", courseData, {})
      .then((data) => {
        setCount(count + 1);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    globalController
      .postData("studyMaterials/get/courses", {}, {})
      .then((result) => {
        setCourses(result.courses);
      })
      .catch((e) => {
        alert(e);
      });
  }, [count]);

  const [courseData, setCourseData] = useState({
    title: "",
    subTitle: "",
    noOfYears: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCourse(courseData);
    // Reset form fields
    setCourseData({
      title: "",
      subTitle: "",
      noOfYears: "",
    });
  };
  const handleDeleteCourse = (id) => {
    globalController
      .postData("studyMaterials/delete/course", { courseId: id }, {})
      .then((data) => {
        setCount(count + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="mt-5">
      <h2>Course List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>No. of Years</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.subTitle}</td>
              <td>{course.noOfYears}</td>
              <td>
                <NavLink
                  to={`${path}/viewCourse`}
                  className="btn btn-secondary"
                  onClick={() => {
                    setCurrentCourse(course);
                  }}
                >
                  View
                </NavLink>
                <NavLink
                  to={`${path}/editCourse`}
                  className="btn btn-primary"
                  onClick={() => {
                    setCurrentCourse(course);
                  }}
                >
                  Edit
                </NavLink>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDeleteCourse(course.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2>Add Course</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subTitle"
            value={courseData.subTitle}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>No. of Years</Form.Label>
          <Form.Control
            type="text"
            name="noOfYears"
            value={courseData.noOfYears}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Course
        </Button>
      </Form>
    </Container>
  );
};

export default CoursePage;
