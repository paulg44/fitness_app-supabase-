// Sign In Form Component

import { Form } from "react-bootstrap";
import "./SignInForm.css";

function SignInForm() {
  return (
    <Form>
      <Form.Group controlId="enterUsername">
        <Form.Label>Enter Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="Enter Username"
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="enterPassword">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
        ></Form.Control>
      </Form.Group>
    </Form>
  );
}

export default SignInForm;
