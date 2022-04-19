import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { Add } from "@mui/icons-material";
// import { allCourseMcGill } from "../../../data/RealData";
import { RealCourse } from "../../../classes/Course";
import { UserContext } from "../../../App";

function StudentRegisterCourse({ loadMyCourses }) {
  const [show, setShow] = useState(false);
  const [allCourses, setAllCourses] = React.useState<RealCourse[]>([]);
  const [desiredCourse, setDesiredCourse] = useState<string>("");

  const { user } = useContext(UserContext);

  const loadAllCourses = async () => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/course/all");
      const json = await res.json();
      setAllCourses(json.courses as RealCourse[]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadAllCourses();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShow(false);
    console.log(desiredCourse);

    try {
      if (user && user.uuid) {
        const enrollRes = await fetch(`https://winter2022-comp307-group8.cs.mcgill.ca/student/enrollinclass`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            uuid: user.uuid,
            courseID: desiredCourse
          })
        });
        const json = await enrollRes.json();
        console.log(json);

        setTimeout(() => {
          loadMyCourses();
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="ta-review-modal">
      {/** Open Register course modal */}
      <button className="courses" onClick={() => setShow(true)}>
        <Add fontSize="small" /> Add a Course
      </button>

      {/** Modal Pop up window*/}
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-lg" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Add a Course</Modal.Title>
        </Modal.Header>

        {/** Add Course Form */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Select required onChange={(e) => setDesiredCourse(e.target.value)}>
              <option value="">Select a Course</option>
              {allCourses.map((course: RealCourse, i: number) => (
                <option key={i} value={course.courseID}>{`${course.courseCode} ${course.courseNumber} - 
                ${course.year} ${course.term}`}</option>
              ))}
            </Form.Select>

            <Button className="mt-4" variant="outline-secondary" type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StudentRegisterCourse;
