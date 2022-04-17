import { useState } from "react";
import { Button, Collapse, Form, Row, Col } from "react-bootstrap";
import React from "react";
import Course from "../../../classes/Course";
import { allCoursesAtMcGill } from "../../../data/FakeData";

/**
 * Hard coded list of courses at mcgill
 * @TODO Fetch real list of courses
 */
function AssignCourseForm() {
  const [open, setOpen] = useState(false);
  const [tempCourse, setTempCourse] = useState<Course>({ name: "", numStudents: 0, currentTAs: [], wishlist: [], historicalTAs: [] });

  /**
   * @TODO Properly submit form to server
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(tempCourse);
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
              {/** At the moment value prop from option can only pass in strings...
               * It would be nice if we could set value to an actual course object.
               */}
              <Form.Select required onChange={(e) => setTempCourse({ name: `${e.target.value}`, numStudents: 0, currentTAs: [], wishlist: [], historicalTAs: [] })}>
                <option value="">Select a Course...</option>
                {allCoursesAtMcGill.map((course: Course, i: number) => (
                  <option key={i} value={course.name}>
                    {course.name}
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
