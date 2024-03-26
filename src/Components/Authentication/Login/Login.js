import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import globalController from "../../GlobalController";
import { useDispatch } from "react-redux";

import { authAction } from "../../../Store/index";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleUserNameChange = (e) => setUserName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await globalController.postData(
        "admin/verify",
        { userName: userName, password: password },
        {}
      );
      dispatch(authAction.setToken(result.token));
      dispatch(authAction.login());
      setUserName("");
      setPassword("");
    } catch (e) {
      alert(e.error);
    }
  };

  return (
    <Switch>
      <Route path="/login">
        <Container style={{ maxWidth: "500px" }} className="mt-5">
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicuserName">
              <Form.Label>UserName </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter userName"
                value={userName}
                onChange={handleUserNameChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Container>
      </Route>
      <Route path="/*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};

export default Login;
