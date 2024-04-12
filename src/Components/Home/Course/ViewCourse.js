import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import globalController from "../../GlobalController";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const CourseViewPage = ({ basePath, course, setCurrentBranch }) => {
  const [branches, setBranches] = useState([]);
  const [count, setCount] = useState(0);

  const [branchData, setBranchData] = useState({
    title: "",
    subTitle: "",
  });

  const onAddBranch = (info) => {
    globalController
      .postData(
        "studyMaterials/create/branch",
        { ...info, courseId: course.id },
        {}
      )
      .then((result) => {
        alert("Branched Added!");
        setCount(count + 1);
      })
      .catch((e) => {
        alert(e);
      });
  };

  useEffect(() => {
    globalController
      .postData("studyMaterials/get/branches", { courseId: course.id }, {})
      .then((result) => {
        setBranches(result.branches);
      })
      .catch((e) => {
        alert(e);
      });
  }, [count]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBranchData({ ...branchData, [name]: value });
  };
  const handleDeleteBranch = (id) => {
    globalController
      .postData("studyMaterials/delete/branch", { branchId: id }, {})
      .then((data) => {
        setCount(count + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBranch(branchData);
    // Reset form fields
    setBranchData({
      title: "",
      subTitle: "",
    });
  };

  return (
    <Container className="mt-5">
      <h2>View Course</h2>
      <h3>Course Details</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>No. of Years</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{course.id}</td>
            <td>{course.title}</td>
            <td>{course.subTitle}</td>
            <td>{course.noOfYears}</td>
          </tr>
        </tbody>
      </Table>

      <h3>Branches</h3>
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
          {branches.map((branch) => (
            <tr key={branch.id}>
              <td>{branch.id}</td>
              <td>{branch.title}</td>
              <td>{branch.subTitle}</td>
              <td>
                <NavLink
                  to={`${basePath}/viewBranch`}
                  className="btn btn-secondary"
                  onClick={() => {
                    setCurrentBranch(branch);
                  }}
                >
                  View
                </NavLink>
                <NavLink
                  to={`${basePath}/editBranch`}
                  className="btn btn-primary"
                  onClick={() => {
                    setCurrentBranch(branch);
                  }}
                >
                  Edit
                </NavLink>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDeleteBranch(branch.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>Add Branch</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={branchData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subTitle"
            value={branchData.subTitle}
            onChange={handleChange}
            placeholder="Enter subtitle"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Branch
        </Button>
      </Form>
    </Container>
  );
};

export default CourseViewPage;
