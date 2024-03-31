import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { updateAlumniInfo, updateInfo } from "../updateController";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const EditAlumni = ({ currentAlumni }) => {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const [editedProfile, setEditedProfile] = useState(currentAlumni);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInfo("user/update/alumniInfo", { alumniInfo: editedProfile }, token)
      .then((response) => {
        alert("Alumni Info Updated!");
        history.push("/alumnis");
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
          <Form.Label>Current Affiliation</Form.Label>
          <Form.Control
            type="text"
            name="currentAffiliation"
            value={editedProfile.currentAffiliation}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year of Passing</Form.Label>
          <Form.Control
            type="text"
            name="yearOfPassing"
            value={editedProfile.yearOfPassing}
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
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={editedProfile.address}
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

export default EditAlumni;
