import { useState } from "react";
import { Button, Collapse, Form, Row, Col } from "react-bootstrap";
import React from "react";
import { Course } from "./ManageProfessors";

/**
 * Hard coded list of courses at mcgill
 * @TODO Fetch real list of courses
 */
const allCoursesAtMcGill: Array<Course> = [
  { name: "COMP155", numStudents: 200 },
  { name: "COMP202", numStudents: 200 },
  { name: "COMP206", numStudents: 154 },
  { name: "COMP330", numStudents: 95 },
  { name: "COMP688", numStudents: 154 },
  { name: "COMP689", numStudents: 95 },
  { name: "COMP800", numStudents: 200 },
  { name: "COMP801", numStudents: 154 },
  { name: "COMP999", numStudents: 95 },
];

function AssignCourseForm() {
  const [open, setOpen] = useState(false);
  const [tempCourse, setTempCourse] = useState<Course>({ name: "", numStudents: 50 });

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
              <Form.Select required onChange={(e) => setTempCourse({ name: `${e.target.value}`, numStudents: 50 })}>
                <option>Select a Course...</option>
                {allCoursesAtMcGill.map((course: Course, i: number) => (
                  <option value={course.name}>{course.name}</option>
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
