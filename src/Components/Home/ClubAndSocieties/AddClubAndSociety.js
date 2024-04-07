import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import globalController from "../../GlobalController";

const AddClubAndSociety = () => {
  const history = useHistory();
  const onAdd = (info) => {
    const fileFormData = new FormData();

    for (const key in info) {
      fileFormData.append(key, info[key]);
    }
    globalController
      .postData("clubAndSociety/create/clubAndSociety", fileFormData, {})
      .then((data) => {
        history.push("/clubAndSocieties");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };
  const [clubSocietyData, setClubSocietyData] = useState({
    title: "",
    subTitle: "",
    about: "",
    noOfYears: "",
  });
  const handleFileChange = (e) => {
    setClubSocietyData({ ...clubSocietyData, profilePic: e.target.files[0] });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubSocietyData({ ...clubSocietyData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(clubSocietyData);
    // Reset form fields
    setClubSocietyData({
      title: "",
      subTitle: "",
      about: "",
      noOfYears: "",
      profilePic: null,
    });
  };

  return (
    <Container className="mt-5">
      <h2>Add Club & Society</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={clubSocietyData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subTitle"
            value={clubSocietyData.subTitle}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>About</Form.Label>
          <Form.Control
            as="textarea"
            name="about"
            value={clubSocietyData.about}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>No. of Years</Form.Label>
          <Form.Control
            type="text"
            name="noOfYears"
            value={clubSocietyData.noOfYears}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="profilePic">
          <Form.Label>Background Picture</Form.Label>
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
          Add Club & Society
        </Button>
      </Form>
    </Container>
  );
};

export default AddClubAndSociety;
