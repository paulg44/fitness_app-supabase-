// Enter Log Form Component

import { Form, Button } from "react-bootstrap";

function EnterLogForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formEnterDate">
        <Form.Label>Enter Distance</Form.Label>
        <Form.Control type="text" placeholder="Enter Date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEnterDistance">
        <Form.Label>Enter Distance</Form.Label>
        <Form.Control type="text" placeholder="Enter Distance" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEnterDuration">
        <Form.Label>Enter Activity Duration</Form.Label>
        <Form.Control type="text" placeholder="Enter Duration" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEnterSurface">
        <Form.Label>Select Surface</Form.Label>
        <Form.Select aria-label="Select Surface">
          <option></option>
          <option value="1">Road</option>
          <option value="2">Track</option>
          <option value="3">Trail</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEnterDesc">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default EnterLogForm;
