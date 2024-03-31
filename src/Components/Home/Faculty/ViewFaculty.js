import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ViewFaculty = (props) => {
  const userProfile = props.currentFaculty;

  return (
    <Container className="mt-5">
      <h2>User Profile</h2>
      <Row className="mb-3">
        <Col>
          <strong>ID:</strong> {userProfile.id}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Name:</strong> {userProfile.name}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Qualification:</strong> {userProfile.qualification}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Area of Specialization:</strong>{" "}
          {userProfile.areaOfSpecialization}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Email:</strong> {userProfile.email}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Date of Joining:</strong> {userProfile.dateOfJoining}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Phone:</strong> {userProfile.phone}
        </Col>
      </Row>
    </Container>
  );
};

export default ViewFaculty;
