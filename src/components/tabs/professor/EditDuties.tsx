import { useState } from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Button, Collapse, Form, FormControl } from "react-bootstrap";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { Edit } from "@mui/icons-material";

function EditDuties({ ta }) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [dutyToAdd, setDutyToAdd] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShow(false);
    console.log(dutyToAdd);

    /**
     * @TODO on submit, send this OH times to the server
     */
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
          <Modal.Title id="example-custom-modal-styling-title">{`${ta.firstName} ${ta.lastName}'s Duties`}</Modal.Title>
        </Modal.Header>

        {/** OH Time Form */}
        <Modal.Body>
          <h5>Current</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque excepturi soluta qui tempora deserunt autem optio ut praesentium, commodi iste nihil a similique earum officia voluptatibus natus tenetur odio.{" "}
            <button className="courses" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
              <Edit />
            </button>
          </p>

          <Collapse in={open}>
            <Form onSubmit={handleSubmit}>
              <FormControl required as="textarea" rows={3} placeholder={`Please describe ${ta.firstName}'s responsibilities...`} aria-label="Text input with dropdown button" onChange={(e) => setDutyToAdd(e.target.value)} />
              <Button className="mt-2" variant="outlined-secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Collapse>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditDuties;
