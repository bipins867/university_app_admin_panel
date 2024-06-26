import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import globalController from "../../GlobalController";

const AddStudent = () => {
  // State variables for form fields
  const history = useHistory();
  const [formData, setFormData] = useState({
    collegeId: "",
    password: "",
    name: "",
    fathersName: "",
    yearOfJoining: "",
    email: "",
    phone: "",
    address: "",
    courseId: "",
    profilePic: null,
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const fileFormData = new FormData();

    for (const key in formData) {
      fileFormData.append(key, formData[key]);
    }

    globalController
      .postData("user/create/student", fileFormData, {})
      .then((data) => {
        history.push("/students");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="mt-5">
      <h2>Student Registration Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="collegeId">
          <Form.Label>College ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter College ID"
            name="collegeId"
            value={formData.collegeId}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="fathersName">
          <Form.Label>Father's Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Father's Name"
            name="fathersName"
            value={formData.fathersName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="courseId">
          <Form.Label>Course Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter CourseId"
            name="courseId"
            value={formData.courseId}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="yearOfJoining">
          <Form.Label>Year of Joining</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Year of Joining"
            name="yearOfJoining"
            value={formData.yearOfJoining}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
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
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddStudent;
