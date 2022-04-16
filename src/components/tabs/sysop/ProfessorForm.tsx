import { useState } from "react";
import { Button, Collapse, Form, Row, Col } from "react-bootstrap";
import React from "react";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="mb-4 mt-2" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
        Add new Professor...
      </button>
      <Collapse in={open}>
        <Form>
          <Row>
            <Col>
              <Form.Control required placeholder="Email" />
            </Col>
            <Col>
              <Form.Control required placeholder="First name" />
            </Col>
            <Col>
              <Form.Control required placeholder="Last name" />
            </Col>
            <Col>
              <Form.Select>
                <option>Select a Faculty...</option>
                <option value="1">Science</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select>
                <option>Select a Department...</option>
                <option value="1">Computer Science</option>
                <option value="2">Mathematics</option>
                <option value="3">Physics</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>
      </Collapse>
    </div>
  );
}

export default Example;
