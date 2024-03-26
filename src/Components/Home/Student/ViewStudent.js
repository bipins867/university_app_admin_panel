import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ViewStudent = (props) => {
  const students = props.students;
  // Placeholder values for user profile
  const userProfile = props.currentStudent;

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
          <strong>Father's Name:</strong> {userProfile.fathersName}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Email:</strong> {userProfile.email}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Year of Joining:</strong> {userProfile.yearOfJoining}
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

export default ViewStudent;
