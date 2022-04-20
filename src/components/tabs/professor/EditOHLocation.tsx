import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { Edit } from "@mui/icons-material";
import { TA } from "../../../classes/TA";
import { Course } from "../../../classes/Course";

function EditOHLocation({ ta, course, loadTAsOfCourse }: { ta: TA, course: Course, loadTAsOfCourse: () => Promise<void> }) {

  const [show, setShow] = useState(false);

  /**
   * @TODO fetch ta's current OH for this course
   */

  const currentLocation: string = ta.officeHoursLocation;
  const [OHLocation, setOHLocation] = useState<string>(ta.officeHoursLocation);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(OHLocation);

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
          officeHoursLocation: OHLocation,
          duties: ta.duties,
        }),
      });
      const json = await res.json();
      console.log(json);

      setTimeout(() => {
        loadTAsOfCourse();
      }, 500);

      setShow(false);
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div id="ta-review-modal">
      {/** Open OH Location modal */}
      <button className="courses" onClick={() => setShow(true)}>
        <Edit fontSize="small" /> {currentLocation}
      </button>

      {/** Modal Pop up window*/}
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-md" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">{`Editing ${ta.firstName}'s OH Location`}</Modal.Title>
        </Modal.Header>

        {/** OH Location Form */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <FormControl required className="mb-3" placeholder="Location" aria-label="Text input with dropdown button" onChange={(e) => setOHLocation(e.target.value)} />
            <Button variant="outline-secondary" type="submit">
              Change
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditOHLocation;
