import React, { useState } from "react";
import { Button, Collapse, Container, Form, InputGroup } from "react-bootstrap";
import "../../../style/userTable.css";
import { Add } from "@mui/icons-material";
import { allTAs } from "../../../data/FakeData";
import { TA } from "../../../classes/TA";

function ProfWishlistForm() {
  const [open, setOpen] = useState(false);
  const [taToAdd, setTAtoAdd] = useState(`${allTAs[0].firstName} ${allTAs[0].lastName}`);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(taToAdd);

    /**
     * @TODO on submit, send this ta to the server
     */
  };

  return (
    <Container>
      {/** Open add ta popup */}
      <button className="courses" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
        <Add />
      </button>
      <Collapse in={open}>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <Form.Select required onChange={(e) => setTAtoAdd(e.target.value)}>
              {/** Display all the tas at mcgill */}
              <option value="">Select a TA</option>
              {allTAs.map((ta: TA, i: number) => (
                <option key={i} value={`${ta.firstName} ${ta.lastName}`}>{`${ta.firstName} ${ta.lastName}`}</option>
              ))}
            </Form.Select>
            <Button variant="outline-secondary" type="submit">
              Add
            </Button>
          </InputGroup>
        </Form>
      </Collapse>
    </Container>
  );
}

export default ProfWishlistForm;
