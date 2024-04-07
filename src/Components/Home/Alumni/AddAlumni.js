import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import globalController from "../../GlobalController";

const AddAlumni = () => {
  const history = useHistory();
  const onAdd = (info) => {
    const fileFormData = new FormData();

    for (const key in info) {
      fileFormData.append(key, info[key]);
    }
    globalController
      .postData("user/create/alumni", fileFormData, {})
      .then((data) => {
        history.push("/alumnis");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  const [alumniData, setAlumniData] = useState({
    collegeId: "",
    courseId: "",
    password: "",
    name: "",
    yearOfPassing: "",
    currentAffiliation: "",
    email: "",
    phone: "",
    address: "",
    profilePic: null,
  });

  const handleFileChange = (e) => {
    setAlumniData({ ...alumniData, profilePic: e.target.files[0] });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumniData({ ...alumniData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(alumniData);
    // Reset form fields
    setAlumniData({
      collegeId: "",
      courseId: "",
      password: "",
      name: "",
      yearOfPassing: "",
      currentAffiliation: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <Container className="mt-5">
      <h2>Add Alumni</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>College ID</Form.Label>
          <Form.Control
            type="text"
            name="collegeId"
            value={alumniData.collegeId}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={alumniData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={alumniData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Course Id</Form.Label>
          <Form.Control
            type="text"
            name="courseId"
            value={alumniData.courseId}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year of Passing</Form.Label>
          <Form.Control
            type="text"
            name="yearOfPassing"
            value={alumniData.yearOfPassing}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Current Affiliation</Form.Label>
          <Form.Control
            type="text"
            name="currentAffiliation"
            value={alumniData.currentAffiliation}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={alumniData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={alumniData.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={alumniData.address}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="profilePic">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            id="custom-file"
            label="Choose file"
            name="profilePic"
            onChange={handleFileChange}
            custom
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Alumni
        </Button>
      </Form>
    </Container>
  );
};

export default AddAlumni;
