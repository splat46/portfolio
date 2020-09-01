// src/pages/LoginPage.js
import React, { useState } from "react";
import { login } from "../store/user/actions";
import { useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login(email, password));
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <h1>Login</h1>
          <Form className="box box__padding box--grey" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email: </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password: </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form.Group>
            <a href="/signup" alt="Make a new account" className="mb-0">
              Or register for a new account
            </a>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
