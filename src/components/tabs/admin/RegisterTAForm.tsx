import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import "../../../style/userTable.css";
import { RealTA } from "../../../classes/TA";
import { allTAs } from "../../../data/RealData";

function RegisterTAForm({ courseName }: { courseName: string }) {
  /**
   * @TODO fetch list of all possible TA to add to this course
   */
  const [show, setShow] = useState(false);
  const allPossibleTAs: Array<RealTA> = [...allTAs];
  const [taToAdd, setTaToAdd] = useState<RealTA>(allPossibleTAs[0]); // set a default ta

  /**
   * @TODO send TA to server to be added to current course
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setShow(false);
    e.preventDefault();
    console.log(taToAdd.firstName);
  };

  return (
    <div id="ta-review-modal">
      {/** Open Register modal */}
      <button className="mb-4 mt-2" onClick={() => setShow(true)}>
        <AddIcon />
      </button>

      {/** Modal Pop up window*/}
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-md" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">{`Register TA to ${courseName}`}</Modal.Title>
        </Modal.Header>

        {/** TA Register Form */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Form.Select required onChange={(e) => setTaToAdd(allTAs[e.target.value])}>
                <option value="">Select a TA</option>
                {allPossibleTAs.map((ta: RealTA, i: number) => (
                  <option key={i} value={i}>{`${ta.firstName} ${ta.lastName}`}</option>
                ))}
              </Form.Select>
              <Button variant="outline-secondary" type="submit">
                Register
              </Button>
            </InputGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RegisterTAForm;
