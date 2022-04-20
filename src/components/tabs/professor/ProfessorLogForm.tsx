import React, { useState } from "react";
import { Button, Collapse, Container, Form, InputGroup } from "react-bootstrap";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../../../style/userTable.css";
import AddIcon from "@mui/icons-material/Add";
import { TA } from "../../../classes/TA";
import { allCourseMcGill, allTAs } from "../../../data/RealData";
import { Course } from "../../../classes/Course";

function ProfessorLogForm() {
  const allCourses: Array<Course> = [...allCourseMcGill];
  const [selectedCourseID, setSelectedCourseID] = useState<string>(allCourses[0].courseID);
  const [selectedTerm, setSelectedTerm] = useState<string>("September 2022");
  const [comment, setComment] = useState<string>("September 2022");
  const [addLog, setAddLog] = useState(false);

  /**
   * @TODO send log to server to be added to current course
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(selectedCourseID);
    console.log(selectedTerm);
    console.log(comment);
  };

  return (
    <Container>
      <button className="log-back" onClick={() => setAddLog(false)}>
        <ArrowBackIosIcon />
      </button>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Course</Form.Label>
          <Form.Select required onChange={(e) => setSelectedCourseID(e.target.value)}>
            <option value="">Select a Course</option>
            {allCourses.map((course: Course, i: number) => (
              <option key={i} value={course.courseID}>
                {course.courseID}
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
    </Container>
  );
}

export default ProfessorLogForm;
