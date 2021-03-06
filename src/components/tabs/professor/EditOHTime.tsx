import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Edit } from "@mui/icons-material";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { TA } from "../../../classes/TA";
import { Course } from "../../../classes/Course";

function EditOHTime({ ta, course, loadTAsOfCourse }: { ta: TA; course: Course; loadTAsOfCourse: () => Promise<void> }) {
  const [show, setShow] = useState(false);

  /**
   * @TODO fetch ta's current OH for this course
   */
  const currentHours: string = ta.officeHoursTime;
  const [officeHours, setOfficeHours] = useState<string>(ta.officeHoursTime);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShow(false);
    console.log(officeHours);
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/prof/updateTADuties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: ta.email,
          courseID: course.courseID,
          officeHoursTime: officeHours,
          officeHoursLocation: ta.officeHoursLocation,
          duties: ta.duties,
        }),
      });
      const json = await res.json();
      console.log(json);

      setTimeout(() => {
        loadTAsOfCourse();
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="ta-review-modal">
      {/** Open OH time modal */}
      <button className="courses" onClick={() => setShow(true)}>
        <Edit fontSize="small" /> {currentHours}
      </button>

      {/** Modal Pop up window*/}
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-md" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">{`Editing ${ta.firstName}'s Office Hours`}</Modal.Title>
        </Modal.Header>

        {/** OH Time Form */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <FormControl className="mb-3" required placeholder="Days, times, etc..." aria-label="Text input with dropdown button" onChange={(e) => setOfficeHours(e.target.value)} value={officeHours} />
            <Button variant="outline-secondary" type="submit">
              Change
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditOHTime;
