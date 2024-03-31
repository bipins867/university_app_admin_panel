import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { getAllClubsAndSocieties } from "../controller"; // Assuming you have a function to fetch clubs and societies
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const ClubsAndSocieties = (props) => {
  const setCurrentClubAndSociety = props.setCurrentClubAndSociety;
  // Handle deletion of club/society
  const [clubAndSocieties, setClubAndSocieties] = useState([]);

  useEffect(() => {
    getAllClubsAndSocieties()
      .then((result) => {
        setClubAndSocieties(result.clubAndSocieties);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);
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
          {clubAndSocieties.map((clubOrSociety) => (
            <tr key={clubOrSociety.id}>
              <td>{clubOrSociety.id}</td>
              <td>{clubOrSociety.title}</td>
              <td>{clubOrSociety.subTitle}</td>
              <td>{clubOrSociety.noOfYears}</td>
              <td>
                <NavLink
                  to="/clubAndSocieties/viewClubAndSociety"
                  className="btn btn-secondary"
                  onClick={() => setCurrentClubAndSociety(clubOrSociety)}
                >
                  View
                </NavLink>
                <NavLink
                  to="/clubAndSocieties/editClubAndSociety"
                  className="btn btn-primary"
                  onClick={() => setCurrentClubAndSociety(clubOrSociety)}
                >
                  Edit
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <NavLink
        to="/clubAndSocieties/addClubAndSociety"
        className="btn btn-primary"
      >
        Add Club & Society
      </NavLink>
    </Container>
  );
};

export default ClubsAndSocieties;
