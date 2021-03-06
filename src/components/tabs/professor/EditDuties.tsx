import { useState } from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Button, Collapse, Form, FormControl } from "react-bootstrap";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { Edit } from "@mui/icons-material";
import { TA } from "../../../classes/TA";
import { Course } from "../../../classes/Course";

function EditDuties({ ta, course, loadTAsOfCourse }: { ta: TA, course: Course, loadTAsOfCourse: () => Promise<void> }) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  /**
   * @TODO fetch current responsibilities of current ta
   */

  const currentDuties: string = ta.duties;
  const [responisbilities, setResponisbilities] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShow(false);
    console.log(responisbilities);

    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/prof/updateTADuties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: ta.email,
          courseID: course.courseID,
          officeHoursTime: ta.officeHoursTime,
          officeHoursLocation: ta.officeHoursLocation,
          duties: responisbilities,
        }),
      });
      const json = await res.json();
      console.log(json);

      setTimeout(() => {
        loadTAsOfCourse();
      }, 500);
    } catch (e) {
      console.error(e);
    }

  };

  return (
    <div id="ta-review-modal">
      {/** Open review modal */}
      <button className="courses" onClick={() => setShow(true)}>
        <OpenInFullIcon fontSize="small" /> View Duties
      </button>

      {/** Modal Pop up window*/}
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-md" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">{`${ta.firstName}'s Responsibilities`}</Modal.Title>
        </Modal.Header>

        {/** Change responisbilities */}
        <Modal.Body>
          <h5>Current</h5>
          <p>{currentDuties}</p>
          <button className="courses" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
            <Edit />
          </button>

          <Collapse in={open}>
            <Form className="mt-2" onSubmit={handleSubmit}>
              <FormControl required as="textarea" rows={3} placeholder={`Please describe ${ta.firstName}'s Responsibilities`} aria-label="Text input with dropdown button" onChange={(e) => setResponisbilities(e.target.value)} />
              <Button className="mt-2" variant="light" type="submit">
                Change
              </Button>
            </Form>
          </Collapse>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditDuties;
