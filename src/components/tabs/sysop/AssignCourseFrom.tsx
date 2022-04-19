import { useEffect, useState } from "react";
import { Button, Collapse, Form, Row, Col } from "react-bootstrap";
import React from "react";
import { RealProfessor } from "../../../classes/Professor";
import { RealCourse } from "../../../classes/Course";

function AssignCourseForm({ professor, fetchProfsCourses }: { professor: RealProfessor; fetchProfsCourses: Function }) {
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourseID, setSelectedCourseID] = useState("");

  const handleFetchCourses = async () => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/course/all");
      const data = await res.json();
      console.log("courses loaded");
      setCourses(data.courses);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("AssignCourseForm useEffect");
    handleFetchCourses();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedCourseID === "") {
      alert("Please select a course");
      return;
    }
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/prof/assignbyemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: professor.email,
          courseID: selectedCourseID,
        }),
      });
      if (res.status === 200) {
        // alert("Course assigned successfully");
        setOpen(false);
        setTimeout(() => {
          fetchProfsCourses();
        }, 500);
      } else {
        alert("Error assigning course, prof may already be assigned to this course");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button className="mb-4 mt-2" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
        Assign another course...
      </button>
      <Collapse in={open}>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Select required onChange={(e) => setSelectedCourseID(e.target.value)}>
                <option value="">Select a Course</option>
                {courses.map((course: RealCourse, i: number) => (
                  <option key={i} value={course.courseID}>
                    <span className="text-muted">
                      {course.courseCode + " " + course.courseNumber}
                      <span color="grey">{" - " + course.term + " " + course.year}</span>
                    </span>
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
          <Button className="mt-3" variant="light" type="submit">
            Add
          </Button>
        </Form>
      </Collapse>
    </div>
  );
}

export default AssignCourseForm;
