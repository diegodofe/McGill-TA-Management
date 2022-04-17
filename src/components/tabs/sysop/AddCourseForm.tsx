import React from "react";
import { Button, Modal } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import "../../../style/userTable.css";

// Form that adds a course with fields: courseCode, courseNumber, courseName, term, year
const AddCourseForm = ({ fetchCourseData }) => {
  const [show, setShow] = React.useState(false);
  const [courseCode, setCourseCode] = React.useState("");
  const [courseNumber, setCourseNumber] = React.useState("");
  const [courseName, setCourseName] = React.useState("");
  const [term, setTerm] = React.useState("");
  const [year, setYear] = React.useState("");
  const [instructor, setInstructor] = React.useState("");

  const handleAddCourse = async (e) => {
    e.preventDefault();
    setCourseCode("");
    setCourseNumber("");
    setCourseName("");
    setTerm("");
    setYear("");
    setInstructor("");

    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/course/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseCode: courseCode,
          courseNumber: courseNumber,
          courseName: courseName,
          term: term,
          year: year,
        }),
      });
      if (res.status === 200) {
        setTimeout(() => {
          fetchCourseData();
          setShow(false);
        }, 500);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <button className="mb-4 mt-2" onClick={() => setShow(true)}>
        <AddIcon />
      </button>

      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-lg" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Add a Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddCourse}>
            <div className="form-group">
              <label htmlFor="courseCode">Course Code</label>
              <input required type="text" className="form-control" id="courseCode" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="courseNumber">Course Number</label>
              <input required type="text" className="form-control" id="courseNumber" value={courseNumber} onChange={(e) => setCourseNumber(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="courseName">Course Name</label>
              <input required type="text" className="form-control" id="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="term">Term</label>
              <input required type="text" className="form-control" id="term" value={term} onChange={(e) => setTerm(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input required type="text" className="form-control" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="instructor">Instructor email: (optional)</label>
              <input type="text" className="form-control" id="instructor" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
            </div>
            <Button className="mt-3" variant="light" type="submit">
              Add
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddCourseForm;
