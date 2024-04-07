import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import globalController from "../../GlobalController";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddFaculty = () => {
  const history = useHistory();
  const onAdd = (info) => {
    const fileFormData = new FormData();

    for (const key in info) {
      fileFormData.append(key, info[key]);
    }

    globalController
      .postData("user/create/faculty", fileFormData, {})
      .then((data) => {
        history.push("/faculties");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [facultyData, setFacultyData] = useState({
    collegeId: "",
    name: "",
    email: "",
    password: "",
    qualification: "",
    areaOfSpecialization: "",
    designation: "",
    dateOfJoining: "",
    phone: "",
    profilePic: null,
  });
  const handleFileChange = (e) => {
    setFacultyData({ ...facultyData, profilePic: e.target.files[0] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacultyData({ ...facultyData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(facultyData);
    // Reset form fields
    setFacultyData({
      collegeId: "",
      name: "",
      email: "",
      password: "",
      qualification: "",
      areaOfSpecialization: "",
      designation: "",
      dateOfJoining: "",
      phone: "",
    });
  };

  return (
    <Container className="mt-5">
      <h2>Add Faculty</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>College ID</Form.Label>
          <Form.Control
            type="text"
            name="collegeId"
            value={facultyData.collegeId}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={facultyData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={facultyData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={facultyData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Qualification</Form.Label>
          <Form.Control
            type="text"
            name="qualification"
            value={facultyData.qualification}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Area of Specialization</Form.Label>
          <Form.Control
            type="text"
            name="areaOfSpecialization"
            value={facultyData.areaOfSpecialization}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            name="designation"
            value={facultyData.designation}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of Joining</Form.Label>
          <Form.Control
            type="text"
            name="dateOfJoining"
            value={facultyData.dateOfJoining}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={facultyData.phone}
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
          Add Faculty
        </Button>
      </Form>
    </Container>
  );
};

export default AddFaculty;
