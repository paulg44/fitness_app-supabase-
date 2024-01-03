// Sign Up Form Component

import { Button, Form } from "react-bootstrap";
import "./RegisterForm.css";

function RegisterForm() {
  return (
    <Form>
      <Form.Group controlId="createUsername">
        <Form.Label>Create Username</Form.Label>
        <Form.Control type="text" placeholder="username"></Form.Control>
      </Form.Group>
      <Form.Group controlId="enterEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" placeholder="email"></Form.Control>
      </Form.Group>
      <Form.Group controlId="createPassword">
        <Form.Label>Create Password</Form.Label>
        <Form.Control type="password" placeholder="password"></Form.Control>
      </Form.Group>
      <Button type="submit">Register</Button>
    </Form>
  );
}

export default RegisterForm;
