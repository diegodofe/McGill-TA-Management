import React, { useState } from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Button, Form, Accordion, Container, Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { TA } from "../../../classes/TA";
import Review from "../../../classes/Review";
import Log from "../../../classes/Log";
import Course from "../../../classes/Course";

import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { allCoursesAtMcGill } from "../../../data/FakeData";

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

  const [addLog, setAddLog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>(
    allCoursesAtMcGill[0].courseID
  );
  const [selectedTerm, setSelectedTerm] = useState<string>("September 2022");
  const [comment, setComment] = useState<string>("September 2022");

  /**
   * @TODO send log to server to be added to current course
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setShow(false);
    e.preventDefault();
    console.log(selectedCourse);
    console.log(selectedTerm);
    console.log(comment);
  };

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
        dialogClassName="modal-md"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Container>
          {/** TA Performance Report Modal */}
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">{`${ta.firstName} ${ta.lastName}'s Report`}</Modal.Title>
          </Modal.Header>
          {/** Modal body show if user not trying to add new log */}
          {!addLog && (
            <Modal.Body>
              <h4>{`Average Rating: ${ta.averageRating}/5`}</h4>
              <br />
              <div className="prof-log-add">
                <h5 className="prof-log-text">Professor Logs</h5>
                {isProfessor && (
                  <button className="log-add" onClick={() => setAddLog(true)}>
                    <AddIcon />
                  </button>
                )}
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
          )}
          {/** Modal body show if user trying to add new log */}
          {addLog && (
            <Modal.Body>
              <button className="log-back" onClick={() => setAddLog(false)}>
                <ArrowBackIosIcon />
              </button>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Course</Form.Label>
                  <Form.Select
                    required
                    onChange={(e) => setSelectedCourse(e.target.value)}
                  >
                    <option value="">Select a Course</option>
                    {allCoursesAtMcGill.map((course: Course, i: number) => (
                      <option key={i} value={course.courseID}>
                        {course.courseID}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Term</Form.Label>
                  <Form.Select
                    required
                    onChange={(e) => setSelectedTerm(e.target.value)}
                  >
                    <option value="">Select a Term</option>
                    <option value="January2022">January 2023</option>
                    <option value="September2022">September 2022</option>
                    <option value="January2022">January 2022</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Note</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    required
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Form.Group>
                <Button variant="outline-secondary" type="submit">
                  Log
                </Button>
              </Form>
            </Modal.Body>
          )}
        </Container>
      </Modal>
    </div>
  );
}

export default ViewTAPerformance;
