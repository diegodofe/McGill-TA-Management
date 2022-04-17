import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { Edit } from "@mui/icons-material";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";

function EditOHTime({ ta }) {
  const [show, setShow] = useState(false);
  const [officeHours, setOfficeHours] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShow(false);
    console.log(officeHours);

    /**
     * @TODO on submit, send this OH times to the server
     */
  };

  return (
    <div id="ta-review-modal">
      {/** Open review modal */}
      <button className="courses" onClick={() => setShow(true)}>
        {/**
         * @TODO fetch ta's current OH for this course
         */}
        <Edit fontSize="small" /> {"MON: 1-5pm"}
      </button>

      {/** Modal Pop up window*/}
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-md" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">{`Editing ${ta.firstName} ${ta.lastName}'s Office Hours`}</Modal.Title>
        </Modal.Header>

        {/** OH Time Form */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl required placeholder="Days, times, etc..." aria-label="Text input with dropdown button" onChange={(e) => setOfficeHours(e.target.value)} />
              <Button variant="outline-secondary" type="submit">
                Change
              </Button>
            </InputGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditOHTime;
