import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { FileDownload } from "@mui/icons-material";

function ImportTACohort() {
  const [show, setShow] = useState(false);
  const [tempFile, setTempFile] = useState<string>();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShow(false);
    console.log(tempFile);
  };

  return (
    <div id="ta-review-modal">
      {/** Open review modal */}
      <button className="courses" onClick={() => setShow(true)}>
        <FileDownload /> Import
      </button>

      {/** Modal Pop up window*/}
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-md" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Import TA Cohort</Modal.Title>
        </Modal.Header>

        {/** TA Review Form */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              {/**
               * @TODO need to grab actual file from form
               */}
              <Form.Control required type="file" onChange={(e) => setTempFile(e.target.value)} />
            </Form.Group>

            <Button variant="outline-secondary" type="submit">
              Upload
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ImportTACohort;
