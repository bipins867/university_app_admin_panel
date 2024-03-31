import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { updateInfo } from "../updateController";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const EditClubSociety = ({ currentClubAndSociety }) => {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const [editedClubSociety, setEditedClubSociety] = useState(
    currentClubAndSociety
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedClubSociety({ ...editedClubSociety, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInfo(
      "clubAndSociety/update/clubAndSocietyInfo",
      { clubAndSocietyInfo: editedClubSociety },
      token
    )
      .then((response) => {
        alert("Info Updated!");
        history.push("/clubAndSocieties");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <Container className="mt-5">
      <h2>Edit Club & Society</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={editedClubSociety.id}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={editedClubSociety.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subTitle"
            value={editedClubSociety.subTitle}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>No. of Years</Form.Label>
          <Form.Control
            type="text"
            name="noOfYears"
            value={editedClubSociety.noOfYears}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>About</Form.Label>
          <Form.Control
            as="textarea"
            name="about"
            value={editedClubSociety.about}
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

export default EditClubSociety;
