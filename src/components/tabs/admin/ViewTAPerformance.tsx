import React, { useState } from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Accordion, Container, Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { Review } from "../../../classes/Review";
import { Log } from "../../../classes/Log";
import { TA } from "../../../classes/TA";
import { allLogs, allReviews, allTAs } from "../../../data/RealData";

function ViewTAPerformance({ ta, isProfessor }: { ta: TA; isProfessor: boolean }) {
  const [addLog, setAddLog] = useState(false);
  const ratingToStartMap: Array<string> = ["No Stars", "⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

  const currentTAScore: number = 4;
  const currentTAStudentReviews: Array<Review> = [...allReviews]; // Need to fetch all reviews for this ta
  const currentTAProfessorLogs: Array<Log> = [...allLogs]; // Need to fetch all logs for this ta

  const [show, setShow] = useState(false);

  return (
    <div id="ta-review-modal">
      {/** Open review modal */}
      <button disabled={show} className="courses" onClick={() => setShow(true)}>
        <OpenInFullIcon fontSize="small" /> View Report
      </button>

      {/** Modal Pop up window*/}
      <Modal centered show={show} onHide={() => setShow(false)} dialogClassName="modal-md" aria-labelledby="example-custom-modal-styling-title">
        <Container>
          {/** TA Performance Report Modal */}
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">{`${ta.firstName} ${ta.lastName}'s Report`}</Modal.Title>
          </Modal.Header>
          {/** Modal body show if user not trying to add new log */}
          <Modal.Body>
            <h4>{`Average Rating: ${currentTAScore}/5`}</h4>
            <br />

            {/* <div className="prof-log-add">
                  <h5 className="prof-log-text">Professor Logs</h5>
              {isProfessor && (
                <button className="log-add" onClick={() => setAddLog(true)}>
                  <AddIcon />
                  </button>
                 )}
                </div>

                 <Accordion flush>
                  {currentTAProfessorLogs.map((log: Log, i: number) => (
                <Accordion.Item key={i} eventKey={`${i}`}>
                  <Accordion.Header>{log.courseID}</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {log.comment.map((note: string, i: number) => (
                              <li key={i}>{note}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
                 </Accordion> 
              */}

            <br />
            <h5>Student Reviews</h5>
            <Accordion flush>
              {currentTAStudentReviews.map((review: Review, i: number) => (
                <Accordion.Item key={i} eventKey={`${i}`}>
                  <Accordion.Header>{ratingToStartMap[review.rating]}</Accordion.Header>
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
