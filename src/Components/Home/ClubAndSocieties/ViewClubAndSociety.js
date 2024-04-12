import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import globalController from "../../GlobalController";

const ClubSocietyPage = ({ clubSociety }) => {
  const [count, setCount] = useState(0);
  const [members, setMembers] = useState([]);
  const [newMemberId, setNewMemberId] = useState("");
  const [newMemberDesignation, setNewMemberDesignation] = useState("");

  useEffect(() => {
    globalController
      .postData(
        "clubAndSociety/get/members",
        { clubAndSocietyId: clubSociety.id },
        {}
      )
      .then((result) => {
        setMembers(result.members);
      })
      .catch((e) => {
        alert(e);
      });
  }, [count]);

  const onUpdateAdminStatus = (id, isAdmin) => {
    const obj = {
      studentId: id,
      clubAndSocietyId: clubSociety.id,
      isAdmin: isAdmin,
    };

    globalController
      .postData("clubAndSociety/update/updateAdmin", obj, {})
      .then((result) => {
        setCount(count + 1);
      })
      .catch((e) => {
        alert(e);
      });
  };
  const onAddMember = (memberId) => {
    globalController
      .postData(
        "clubAndSociety/create/addMember",
        {
          id: memberId,
          clubAndSocietyId: clubSociety.id,
          designation: newMemberDesignation,
        },
        {}
      )
      .then((result) => {
        setCount(count + 1);
      })
      .catch((e) => {
        alert(e);
      });
  };

  const handleUpdateAdminStatus = (id, isAdmin) => {
    onUpdateAdminStatus(id, !isAdmin);
  };

  const handleAddMember = () => {
    if (newMemberId.trim() !== "") {
      onAddMember(newMemberId);
      setNewMemberId("");
    }
  };
  const handleDeleteStudent = (id) => {
    globalController
      .postData(
        "clubAndSociety/delete/student",
        { studentId: id, clubAndSocietyId: clubSociety.id },
        {}
      )
      .then((data) => {
        setCount(count + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="mt-5">
      <h2>{clubSociety.title}</h2>
      <h4>{clubSociety.subTitle}</h4>
      <p>No. of Years: {clubSociety.noOfYears}</p>
      <p>About: {clubSociety.about}</p>

      <h3>Members</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>
                <Button
                  variant={
                    member.ClubAndSocietyMember.isAdmin ? "success" : "danger"
                  }
                  onClick={() =>
                    handleUpdateAdminStatus(
                      member.id,
                      member.ClubAndSocietyMember.isAdmin
                    )
                  }
                >
                  IS Admin
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDeleteStudent(member.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Form.Group className="mb-3">
        <Form.Label>Add Member</Form.Label>
        <Form.Control
          type="text"
          value={newMemberId}
          onChange={(e) => setNewMemberId(e.target.value)}
          placeholder="Enter Student College ID"
        />
        <br />
        <Form.Control
          type="text"
          value={newMemberDesignation}
          onChange={(e) => setNewMemberDesignation(e.target.value)}
          placeholder="Enter Student Designation"
        />
      </Form.Group>
      <Button variant="primary" onClick={handleAddMember}>
        Add Member
      </Button>
    </Container>
  );
};

export default ClubSocietyPage;
