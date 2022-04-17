import React, { useState } from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Accordion, Container, Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { TA } from "../../../classes/TA";
import Review from "../../../classes/Review";
import Log from "../../../classes/Log";
import ProfLogForm from "../professor/ProfLogForm";
import Course from "../../../classes/Course";

function ViewTAPerformance({
  ta,
  isProfessor,
}: {
  ta: TA;
  isProfessor: boolean;
}) {
  const ratingToStartMap: Array<string> = [
    "No Stars",
    "⭐",
    "⭐⭐",
    "⭐⭐⭐",
    "⭐⭐⭐⭐",
    "⭐⭐⭐⭐⭐",
  ];
  const [show, setShow] = useState(false);

  return (
    <div id="ta-review-modal">
      {/** Open review modal */}
      <button disabled={show} className="courses" onClick={() => setShow(true)}>
        <OpenInFullIcon fontSize="small" /> View Report
      </button>

      {/** Modal Pop up window*/}
      <Modal
        centered
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Container>
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">{`${ta.firstName} ${ta.lastName}'s Report`}</Modal.Title>
          </Modal.Header>
          {/** TA Performance Report Modal */}
          <Modal.Body>
            <h4>{`Average Rating: ${ta.averageRating}/5`}</h4>
            <br />

            <div className="prof-log-add">
              <h5 className="prof-log-text">Professor Logs</h5>
              <h5> {isProfessor && <ProfLogForm />}</h5>
            </div>
            <Accordion flush>
              {ta.allLogs.map((log: Log, i: number) => (
                <Accordion.Item key={i} eventKey={`${i}`}>
                  <Accordion.Header>{log.courseName}</Accordion.Header>

                  <Accordion.Body>
                    <ul>
                      {log.professorNotes.map((note: string, i: number) => (
                        <li key={i}>{note}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <br />
            <h5>Student Reviews</h5>
            <Accordion flush>
              {ta.allReviews.map((review: Review, i: number) => (
                <Accordion.Item key={i} eventKey={`${i}`}>
                  <Accordion.Header>
                    {ratingToStartMap[review.rating]}
                  </Accordion.Header>
                  <Accordion.Body>{review.comment}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Modal.Body>
        </Container>
      </Modal>
    </div>
  );
}

export default ViewTAPerformance;
