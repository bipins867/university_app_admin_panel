import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import globalController from "../../GlobalController";

const AddNotification = () => {
  const history = useHistory();
  const onAdd = (info) => {
    globalController
      .postData("notifications/create/global", info, {})
      .then((data) => {
        history.push("/notifications");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [notificationData, setNotificationData] = useState({
    title: "",
    subTitle: "",
    isEvent: false,
    createrName: "",
    createrDesignation: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setNotificationData({
      ...notificationData,
      [name]: name === "isEvent" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(notificationData);
    // Reset form fields
    setNotificationData({
      title: "",
      subTitle: "",
      isEvent: false,
      createrName: "",
      createrDesignation: "",
    });
  };

  return (
    <Container className="mt-5">
      <h2>Add Notification</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={notificationData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subTitle"
            value={notificationData.subTitle}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Is Event"
            name="isEvent"
            checked={notificationData.isEvent}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Creator Name</Form.Label>
          <Form.Control
            type="text"
            name="createrName"
            value={notificationData.createrName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Creator Designation</Form.Label>
          <Form.Control
            type="text"
            name="createrDesignation"
            value={notificationData.createrDesignation}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Notification
        </Button>
      </Form>
    </Container>
  );
};

export default AddNotification;
