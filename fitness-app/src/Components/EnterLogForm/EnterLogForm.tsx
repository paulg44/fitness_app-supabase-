// Enter Log Form Component

import { ChangeEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";

function EnterLogForm() {
  // States
  const [enterDate, setEnterDate] = useState("");
  // Possibly change these 2 states from a string
  const [enterDistance, setEnterDistance] = useState("");
  const [enterDuration, setEnterDuration] = useState("");
  const [selectedSurface, setSelectedSurface] = useState("");
  const [enterDescription, setEnterDescription] = useState("");

  // Function
  // Handle Date
  function handleDate(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEnterDate(e.target.value);
    console.log(enterDate);
  }

  // Handle Distance
  function handleDistance(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEnterDistance(e.target.value);
    console.log(enterDistance);
  }

  // Handle Duration
  function handleDuration(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEnterDuration(e.target.value);
    console.log(enterDuration);
  }

  // Handle Surface
  function handleSurface(e: ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    setSelectedSurface(e.target.value);
    console.log(selectedSurface);
  }

  // Handle Description
  function handleDescription(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEnterDescription(e.target.value);
    console.log(enterDescription);
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formEnterDate">
        <Form.Label>Enter Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Date"
          onChange={handleDate}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEnterDistance">
        <Form.Label>Enter Distance</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Distance"
          onChange={handleDistance}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEnterDuration">
        <Form.Label>Enter Activity Duration</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Duration"
          onChange={handleDuration}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEnterSurface">
        <Form.Label>Select Surface</Form.Label>
        <Form.Select aria-label="Select Surface" onChange={handleSurface}>
          <option></option>
          <option value="1">Road</option>
          <option value="2">Track</option>
          <option value="3">Trail</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEnterDesc">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="" onChange={handleDescription} />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default EnterLogForm;
