import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ViewAlumni = ({ currentAlumni }) => {
  const userProfile = currentAlumni;
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
          <strong>Email:</strong> {userProfile.email}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Current Affiliation:</strong> {userProfile.currentAffiliation}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Year of Passing:</strong> {userProfile.yearOfPassing}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Phone:</strong> {userProfile.phone}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Address:</strong> {userProfile.address}
        </Col>
      </Row>
    </Container>
  );
};

export default ViewAlumni;
