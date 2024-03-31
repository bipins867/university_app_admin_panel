import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ViewDepartment = ({ currentDepartment }) => {
  const department = currentDepartment;
  return (
    <Container className="mt-5">
      <h2>Department Details</h2>
      <Row className="mb-3">
        <Col>
          <strong>ID:</strong> {department.id}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Title:</strong> {department.title}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Subtitle:</strong> {department.subTitle}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>About:</strong> {department.about}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>HoD ID:</strong> {department.hodId}
        </Col>
      </Row>
    </Container>
  );
};

export default ViewDepartment;
