import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateInfo } from "../updateController";

const EditFaculty = ({ currentFaculty }) => {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const [editedProfile, setEditedProfile] = useState(currentFaculty);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInfo("user/update/facultyInfo", { facultyInfo: editedProfile }, token)
      .then((response) => {
        alert("Faculty Info Updated!");
        history.push("/faculties");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <Container className="mt-5">
      <h2>Edit User Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={editedProfile.id}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={editedProfile.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={editedProfile.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Qualification</Form.Label>
          <Form.Control
            type="text"
            name="qualification"
            value={editedProfile.qualification}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Area of Specialization</Form.Label>
          <Form.Control
            type="text"
            name="areaOfSpecialization"
            value={editedProfile.areaOfSpecialization}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            name="designation"
            value={editedProfile.designation}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of Joining</Form.Label>
          <Form.Control
            type="text"
            name="dateOfJoining"
            value={editedProfile.dateOfJoining}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={editedProfile.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default EditFaculty;
