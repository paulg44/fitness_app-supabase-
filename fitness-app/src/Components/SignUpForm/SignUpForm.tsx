// Sign Up Form Component

import { Form } from "react-bootstrap";
import "./SignUpForm.css";

function SignUpForm() {
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
    </Form>
  );
}

export default SignUpForm;
