import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Edit } from "@mui/icons-material";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { RealTA } from "../../../classes/TA";

function EditOHTime({ ta }: { ta: RealTA }) {
  const [show, setShow] = useState(false);

  /**
   * @TODO fetch ta's current OH for this course
   */
  const [officeHours, setOfficeHours] = useState<string>("MON: 1-5pm");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShow(false);
    console.log(officeHours);

    /**
     * @TODO on submit, send this OH time to the server
     */
  };

  return (
    <div id="ta-review-modal">
      {/** Open OH time modal */}
      <button className="courses" onClick={() => setShow(true)}>
        <Edit fontSize="small" /> {officeHours}
      </button>

      {/** Modal Pop up window*/}
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-md" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">{`Editing ${ta.firstName}'s Office Hours`}</Modal.Title>
        </Modal.Header>

        {/** OH Time Form */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <FormControl className="mb-3" required placeholder="Days, times, etc..." aria-label="Text input with dropdown button" onChange={(e) => setOfficeHours(e.target.value)} />
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
