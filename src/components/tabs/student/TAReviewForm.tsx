import { useContext, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { TA } from "../../../classes/TA";
import { Course } from "../../../classes/Course";
import { UserContext } from "../../../App";

function ReviewTAForm({ ta, status, course, loadAlreadyReviewedTAs }: { ta: TA; status: boolean; course: Course; loadAlreadyReviewedTAs?: () => Promise<void> }) {
  const [show, setShow] = useState(false);
  const [tempRating, setTempRating] = useState<string>("0");
  const [tempComment, setTempComment] = useState<string>("");

  const { user } = useContext(UserContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShow(false);
    console.log(tempRating);
    console.log(tempComment);
    try {
      if (user && user.uuid) {
        const addReviewRes = await fetch(`https://winter2022-comp307-group8.cs.mcgill.ca/student/rateTA`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uuid: user.uuid,
            courseID: course.courseID,
            taRatedEmail: ta.email,
            rating: parseInt(tempRating),
            comment: tempComment,
          }),
        });
        if (addReviewRes.status === 200) {
          console.log("Successfully added review");
          if (loadAlreadyReviewedTAs) {
            setTimeout(() => {
              loadAlreadyReviewedTAs();
            }, 500);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }

    /**
     * @TODO on submit, send this review to the server
     */
  };

  return (
    <div id="ta-review-modal">
      {/** Open review modal */}
      <button disabled={status} className="courses" onClick={() => setShow(true)}>
        <OpenInFullIcon fontSize="small" /> Submit Review
      </button>

      {/** Modal Pop up window*/}
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-lg" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">{`Review ${ta.firstName} ${ta.lastName}`}</Modal.Title>
        </Modal.Header>

        {/** TA Review Form */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Select required onChange={(e) => setTempRating(e.target.value)}>
              <option value="">Rating</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>
            </Form.Select>
            <FormControl className="mt-4 mb-4" required placeholder="Comment" aria-label="Text input with dropdown button" onChange={(e) => setTempComment(e.target.value)} />

            <Button variant="outline-secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ReviewTAForm;
