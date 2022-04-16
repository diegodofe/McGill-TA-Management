import React from "react";
import { Button, Collapse, Form, Row, Col } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";

// Form that adds a course with fields: courseCode, courseNumber, courseName, term, year
const AddCourseForm = ({ fetchCourseData }) => {
    const [open, setOpen] = React.useState(false);
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
                    year: year
                }),
            });
            if (res.status === 200) {
                setTimeout(() => {
                    fetchCourseData();
                }, 500);
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <button
        className="mb-4 mt-2"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <AddIcon />
      </button>
      <Collapse in={open}>
            <form onSubmit={handleAddCourse}>
                <div className="form-group">
                    <label htmlFor="courseCode">Course Code</label>
                    <input type="text" className="form-control" id="courseCode" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="courseNumber">Course Number</label>
                    <input type="text" className="form-control" id="courseNumber" value={courseNumber} onChange={(e) => setCourseNumber(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="courseName">Course Name</label>
                    <input type="text" className="form-control" id="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="term">Term</label>
                    <input type="text" className="form-control" id="term" value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input type="text" className="form-control" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="instructor">Instructor email: (optional)</label>
                    <input type="text" className="form-control" id="instructor" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add Course</button>
            </form>
            </Collapse>
        </div>
    )
}

export default AddCourseForm;

