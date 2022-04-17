import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { Edit } from "@mui/icons-material";

function EditOHLocation({ ta }) {
  const [show, setShow] = useState(false);

  /**
   * @TODO fetch ta's current OH for this course
   */
  const [OHLocation, setOHLocation] = useState<string>("Trottier: 351");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShow(false);
    console.log(OHLocation);

    /**
     * @TODO on submit, send this OH times to the server
     */
  };

  return (
    <div id="ta-review-modal">
      {/** Open OH Location modal */}
      <button className="courses" onClick={() => setShow(true)}>
        <Edit fontSize="small" /> {OHLocation}
      </button>

      {/** Modal Pop up window*/}
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-md" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">{`Editing ${ta.firstName} ${ta.lastName}'s OH Location`}</Modal.Title>
        </Modal.Header>

        {/** OH Location Form */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl required placeholder="Location" aria-label="Text input with dropdown button" onChange={(e) => setOHLocation(e.target.value)} />
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

export default EditOHLocation;