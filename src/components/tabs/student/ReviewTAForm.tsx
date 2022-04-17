import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";

function ReviewTAForm({ ta }) {
  const [show, setShow] = useState(false);
  const [tempRating, setTempRating] = useState<string>("0");
  const [tempComment, setTempComment] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShow(false);
    console.log(tempRating);
    console.log(tempComment);

    /**
     * @TODO on submit, send this review to the server
     */
  };

  return (
    <div id="ta-review-modal">
      {/** Open review modal */}
      <button className="courses" onClick={() => setShow(true)}>
        <OpenInFullIcon fontSize="small" /> View Review
      </button>

      {/** Modal Pop up window*/}
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-lg" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">{`Review ${ta.firstName} ${ta.lastName}`}</Modal.Title>
        </Modal.Header>

        {/** TA Review Form */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Form.Select required onChange={(e) => setTempRating(e.target.value)}>
                <option value="">Rating</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
              </Form.Select>
              <FormControl required placeholder="Comment" aria-label="Text input with dropdown button" onChange={(e) => setTempComment(e.target.value)} />
              <Button variant="outline-secondary" type="submit">
                Submit
              </Button>
            </InputGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ReviewTAForm;
