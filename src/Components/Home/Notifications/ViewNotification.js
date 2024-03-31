import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ViewNotification = ({ currentNotifiction }) => {
  const notification = currentNotifiction;
  return (
    <Container className="mt-5">
      <h2>Notification Details</h2>
      <Row className="mb-3">
        <Col>
          <strong>ID:</strong> {notification.id}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Title:</strong> {notification.title}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Subtitle:</strong> {notification.subTitle}
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <strong>Event:</strong> {notification.isEvent ? "Yes" : "No"}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Creator Name:</strong> {notification.createrName}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Creator Designation:</strong>{" "}
          {notification.createrDesignation}
        </Col>
      </Row>
    </Container>
  );
};

export default ViewNotification;
