import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ViewClubAndSociety = ({ currentClubAndSociety }) => {
  return (
    <Container className="mt-5">
      <h2>Club & Society Details</h2>
      <Row className="mb-3">
        <Col>
          <strong>ID:</strong> {currentClubAndSociety.id}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Title:</strong> {currentClubAndSociety.title}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Subtitle:</strong> {currentClubAndSociety.subTitle}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>No. of Years:</strong> {currentClubAndSociety.noOfYears}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>About:</strong> {currentClubAndSociety.about}
        </Col>
      </Row>
    </Container>
  );
};

export default ViewClubAndSociety;
