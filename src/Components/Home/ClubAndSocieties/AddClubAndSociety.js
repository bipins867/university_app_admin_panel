import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import globalController from "../../GlobalController";

const AddClubAndSociety = () => {
  const history = useHistory();
  const onAdd = (info) => {
    globalController
      .postData("clubAndSociety/create/clubAndSociety", info, {})
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
        <Button variant="primary" type="submit">
          Add Club & Society
        </Button>
      </Form>
    </Container>
  );
};

export default AddClubAndSociety;
