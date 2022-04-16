import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";

function AddProfForm({ fetchProfData }) {
  const [show, setShow] = useState(false);
  const [tempEmail, setTempEmail] = useState<string>("");
  const [tempFirstname, setTempFirstname] = useState<string>("");
  const [tempLastname, setTempLastname] = useState<string>("");
  const [tempFaculty, setTempFaculy] = useState<string>("Science");
  const [tempDep, setTempDep] = useState<string>("Computer Science");
  const [tempCourses, setTempCourses] = useState<Array<string>>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(tempEmail);
    console.log(tempFaculty);
    console.log(tempDep);
    console.log(tempCourses);

    // make api to create prof

    try {
      const res = await fetch(
        "https://winter2022-comp307-group8.cs.mcgill.ca/prof/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: tempEmail,
            firstname: tempFirstname,
            lastname: tempLastname,
            faculty: tempFaculty,
            department: tempDep,
          }),
        }
      );
      setTempEmail("");
      if (res.status === 200) {
        console.log("success");
        const data = await res.json();
        setTimeout(() => {
          fetchProfData();
        }, 500);
      } else {
        alert("error adding prof");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button className="mb-4 mt-2" onClick={() => setShow(true)}>
        <AddIcon />
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add a Professor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Control
                  required
                  placeholder="Email"
                  value={tempEmail}
                  onChange={(e) => setTempEmail(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select
                  required
                  onChange={(e) => setTempFaculy(e.target.value)}
                >
                  <option>Select a Faculty...</option>
                  <option value="Science">Science</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select
                  required
                  onChange={(e) => setTempDep(e.target.value)}
                >
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
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddProfForm;
