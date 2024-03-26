import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { getAllClubsAndSocieties } from "../controller"; // Assuming you have a function to fetch clubs and societies

const ClubsAndSocieties = () => {
  const [clubsAndSocieties, setClubsAndSocieties] = useState([]);

  useEffect(() => {
    getAllClubsAndSocieties()
      .then((result) => {
        setClubsAndSocieties(result.clubAndSocieties);
      })
      .catch((e) => {
        console.error("Error fetching clubs and societies:", e);
      });
  }, []);

  // Handle deletion of club/society
  const handleDeleteClubOrSociety = (id) => {
    // Add logic to delete club or society
  };

  return (
    <Container className="mt-5">
      <h2>Clubs & Societies</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>No. of Years</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clubsAndSocieties.map((clubOrSociety) => (
            <tr key={clubOrSociety.id}>
              <td>{clubOrSociety.id}</td>
              <td>{clubOrSociety.title}</td>
              <td>{clubOrSociety.subTitle}</td>
              <td>{clubOrSociety.noOfYears}</td>
              <td>
                <Button variant="secondary" size="sm" className="me-2">
                  View
                </Button>
                <Button variant="primary" size="sm" className="me-2">
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteClubOrSociety(clubOrSociety.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ClubsAndSocieties;
