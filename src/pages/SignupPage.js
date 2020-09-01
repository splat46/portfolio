// src/pages/signupPage.js
import React, { useState } from "react";
import { signUp } from "../store/user/actions";
import { useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SignupPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(signUp(email, password, firstname, lastname, phone));
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <h1>Signup</h1>

          <div className="box box__padding box--grey">
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={(event) => {
                    setFirstname(event.target.value);
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={(event) => {
                    setLastname(event.target.value);
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                ></Form.Control>
              </Form.Group>
              <Button type="submit" variant="primary" className="mr-4">
                Signup
              </Button>
              <a href="/#" alt="Already a account? Sign in">
                I already have a account
              </a>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
