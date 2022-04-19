import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { Add } from "@mui/icons-material";
import { allCourseMcGill } from "../../../data/RealData";
import { RealCourse } from "../../../classes/Course";

function StudentRegisterCourse() {
  const [show, setShow] = useState(false);
  const [desiredCourse, setDesiredCourse] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShow(false);
    console.log(desiredCourse);

    /**
     * @TODO on submit, send this desired course to the server
     */
  };

  return (
    <div id="ta-review-modal">
      {/** Open Register course modal */}
      <button className="courses" onClick={() => setShow(true)}>
        <Add fontSize="small" /> Add a Course
      </button>

      {/** Modal Pop up window*/}
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-lg" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Add a Course</Modal.Title>
        </Modal.Header>

        {/** Add Course Form */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Select required onChange={(e) => setDesiredCourse(e.target.value)}>
              <option value="">Select a Course</option>
              {allCourseMcGill.map((course: RealCourse, i: number) => (
                <option key={i} value={course.courseCode}>{`${course.courseCode} ${course.courseNumber}`}</option>
              ))}
            </Form.Select>

            <Button className="mt-4" variant="outline-secondary" type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StudentRegisterCourse;
