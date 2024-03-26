import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { getAllNotifications } from "../controller";
// Assuming you have a function to fetch notifications

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getAllNotifications()
      .then((result) => {
        setNotifications(result.notifications);
      })
      .catch((e) => {
        console.error("Error fetching notifications:", e);
      });
  }, []);

  // Handle deletion of notification
  const handleDeleteNotification = (id) => {
    // Add logic to delete notification
  };

  return (
    <Container className="mt-5">
      <h2>Notifications</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Event</th>
            <th>Creator Name</th>
            <th>Creator Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification.id}>
              <td>{notification.id}</td>
              <td>{notification.title}</td>
              <td>{notification.isEvent ? "Yes" : "No"}</td>
              <td>{notification.createrName}</td>
              <td>{notification.createrDesignation}</td>
              <td>
                <Button variant="secondary" size="sm" className="me-2">
                  View
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteNotification(notification.id)}
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

export default Notifications;
