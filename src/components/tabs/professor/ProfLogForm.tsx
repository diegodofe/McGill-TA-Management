import { useState } from "react";
import { Button, Form, Modal, Collapse } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import "../../../style/userTable.css";
import { allCoursesAtMcGill } from "../../../data/FakeData";
import Course from "../../../classes/Course";

function ProfLogForm() {
  const [show, setShow] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>(allCoursesAtMcGill[0].courseID);
  const [selectedTerm, setSelectedTerm] = useState<string>("September 2022");
  const [comment, setComment] = useState<string>("September 2022");

  /**
   * @TODO send log to server to be added to current course
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setShow(false);
    e.preventDefault();
    console.log(selectedCourse);
    console.log(selectedTerm);
    console.log(comment);
  };

  return (
    <div id="ta-review-modal">
      {/** Open TA Log modal */}
      <button className="mb-4 mt-2 prof-log-icon" onClick={() => setShow(!show)}>
        <AddIcon />
      </button>

      {/* <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-md" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">{`Add Log`}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}> */}
      <Collapse in={show}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Course</Form.Label>
              <Form.Select required onChange={(e) => setSelectedCourse(e.target.value)}>
                <option value="">Select a Course</option>
                {allCoursesAtMcGill.map((course: Course, i: number) => (
                  <option key={i} value={course.courseID}>
                    {course.courseID}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Term</Form.Label>
              <Form.Select required onChange={(e) => setSelectedTerm(e.target.value)}>
                <option value="">Select a Term</option>
                <option value="January2022">January 2023</option>
                <option value="September2022">September 2022</option>
                <option value="January2022">January 2022</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Note</Form.Label>
              <Form.Control as="textarea" rows={2} required onChange={(e) => setComment(e.target.value)} />
            </Form.Group>
            <Button variant="outline-secondary" type="submit">
              Log
            </Button>
            </Form >
      </Collapse >
    </div>
  );
}

export default ProfLogForm;
