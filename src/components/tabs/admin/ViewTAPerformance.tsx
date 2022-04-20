import React, { useState } from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Button, Form, Accordion, Container, Modal } from "react-bootstrap";
import "../../../style/userTable.css";

import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { TA } from "../../../classes/TA";
import { allCourseMcGill, allLogs, allReviews } from "../../../data/RealData";
import { Log } from "../../../classes/Log";
import { Review } from "../../../classes/Review";
import { Course } from "../../../classes/Course";

function ViewTAPerformance({ ta, isProfessor }: { ta: TA; isProfessor: boolean }) {
  const [show, setShow] = useState(false);
  const [addLog, setAddLog] = useState(false);
  const ratingToStartMap: Array<string> = ["No Stars", "⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

  const allCoursesList: Array<Course> = [...allCourseMcGill]; // Need to fetch all courses from server
  const [selectedCourseID, setSelectedCourseID] = useState<string>(allCoursesList[0].courseID); // Default hardcoded selected course
  const [selectedTerm, setSelectedTerm] = useState<string>("September 2022"); // Default hardcoded selected course
  const [comment, setComment] = useState<string>("September 2022"); // Default hardcoded selected course

  const currentTAScore: number = 4; // Need to fetch from server
  const currentTAStudentReviews: Array<Review> = [...allReviews]; // Need to fetch all reviews for this ta
  const currentTAProfessorLogs: Array<Log> = [...allLogs]; // Need to fetch all logs for this ta

  /**
   * @TODO send log to server to be added to current course
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setShow(false);
    e.preventDefault();
    console.log(selectedCourseID);
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
      <Modal centered show={show} onHide={() => setShow(false)} dialogClassName="modal-md" aria-labelledby="example-custom-modal-styling-title">
        <Container>
          {/** TA Performance Report Modal */}
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">{`${ta.firstName}'s Report`}</Modal.Title>
          </Modal.Header>

          {/** VIEW TA REPORT */}
          {!addLog && (
            <Modal.Body>
              <h4>{`Average Rating: ${currentTAScore}/5`}</h4>
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
                {currentTAProfessorLogs.map((log: Log, i: number) => (
                  <Accordion.Item key={i} eventKey={`${i}`}>
                    <Accordion.Header>{log.createdAt}</Accordion.Header>

                    <Accordion.Body>
                      <ul>
                        {log.comments.map((note: string, i: number) => (
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
                {currentTAStudentReviews.map((review: Review, i: number) => (
                  <Accordion.Item key={i} eventKey={`${i}`}>
                    <Accordion.Header>{ratingToStartMap[review.rating]}</Accordion.Header>
                    <Accordion.Body>{review.comment}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Modal.Body>
          )}

          {/** VIEW LOG FORM */}
          {addLog && (
            <Modal.Body>
              <button className="log-back" onClick={() => setAddLog(false)}>
                <ArrowBackIosIcon />
              </button>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Course</Form.Label>
                  <Form.Select required onChange={(e) => setSelectedCourseID(e.target.value)}>
                    <option value="">Select a Course</option>
                    {allCoursesList.map((course: Course, i: number) => (
                      <option key={i} value={course.courseID}>
                        {`${course.courseCode} ${course.courseNumber}`}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Term</Form.Label>
                  <Form.Select required onChange={(e) => setSelectedTerm(e.target.value)}>
                    <option value="">Select a Term</option>
                    <option value="January2022">January 2023</option>
                    <option value="September2022">September 2022</option>
                    <option value="January2022">January 2022</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Note</Form.Label>
                  <Form.Control as="textarea" rows={2} required onChange={(e) => setComment(e.target.value)} />
                </Form.Group>
                <Button className="mt-3" variant="light" type="submit">
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
