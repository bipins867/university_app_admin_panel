import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { getAllNotifications } from "../controller";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import globalController from "../../GlobalController";
import { useSelector } from "react-redux";
// Assuming you have a function to fetch notifications

const Notifications = (props) => {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const setCurrentNotifiction = props.setCurrentNotifiction;

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getAllNotifications()
      .then((result) => {
        setNotifications(result.notifications);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);
  // Handle deletion of notification
  const handleDeleteNotification = (id) => {
    globalController
      .postData(
        "notifications/delete/notification",
        { notificationId: id },
        token
      )
      .then((response) => {
        alert("Notification deleted!");
        history.push("/notifications");
      })
      .catch((e) => {
        alert(e);
        console.log(e);
      });
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
                <NavLink
                  to="/notifications/viewNotification"
                  className="btn btn-secondary"
                  onClick={() => setCurrentNotifiction(notification)}
                >
                  View
                </NavLink>
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
      <NavLink to="/notifications/addNotification" className="btn btn-primary">
        Send Global Notification
      </NavLink>
    </Container>
  );
};

export default Notifications;
