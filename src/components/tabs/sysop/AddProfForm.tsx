import { useState } from "react";
import { Button, Collapse, Form, Row, Col } from "react-bootstrap";
import React from "react";

function AddProfForm() {
  const [open, setOpen] = useState(false);
  const [tempEmail, setTempEmail] = useState<string>("");
  const [tempFirstname, setTempFirstname] = useState<string>("");
  const [tempLastname, setTempLastname] = useState<string>("");
  const [tempFaculty, setTempFaculy] = useState<string>("Science");
  const [tempDep, setTempDep] = useState<string>("Computer Science");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(tempEmail);
    console.log(tempFirstname);
    console.log(tempLastname);
    console.log(tempFaculty);
    console.log(tempDep);

    // make api to create prof

    // try {
    //   const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/prof/add", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: tempEmail,
    //       faculty: tempFaculty,
    //       department: tempDep,
    //       firstName: tempFirstname,
    //       lastName: tempLastname,
    //     }),
    //   ));
  }

  return (
    <div>
      <button className="mb-4 mt-2" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
        New Professor...
      </button>
      <Collapse in={open}>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Control required placeholder="Email" onChange={(e) => setTempEmail(e.target.value)} />
            </Col>
            <Col>
              <Form.Control required placeholder="First name" onChange={(e) => setTempFirstname(e.target.value)} />
            </Col>
            <Col>
              <Form.Control required placeholder="Last name" onChange={(e) => setTempLastname(e.target.value)} />
            </Col>
            <Col>
              <Form.Select required onChange={(e) => setTempFaculy(e.target.value)}>
                <option>Select a Faculty...</option>
                <option value="Science">Science</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select required onChange={(e) => setTempDep(e.target.value)}>
                <option>Select a Department...</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
              </Form.Select>
            </Col>
          </Row>
          <Button className="mt-3" variant="light" type="submit">
            Add
          </Button>
        </Form>
      </Collapse>
    </div>
  );
}

export default AddProfForm;
