import React, { useState, useEffect } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Modal } from "react-bootstrap";
import AssignCourseForm from "./AssignCourseFrom";
import "../../../style/userTable.css";
import ProfCourseRow from "./ProfCourseRow";

const ProfRow = ({ professor, fetchProfData }) => {
  const [show, setShow] = useState(false);
  const [courses, setCourses] = useState([]);

  const handleDeleteProf = () => {
    console.log("Delete professor");
    try {
      // make api call to delete prof
      fetch("https://winter2022-comp307-group8.cs.mcgill.ca/prof/delete/" + professor.email, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTimeout(() => {
        fetchProfData();
      }, 250);

      console.log("Delete professor");
    } catch (e) { }
  };

  const fetchProfsCourses = async () => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/prof/courses/" + professor.email);
      const data = await res.json();
      console.log("profs courses loaded");
      console.log(data.users)
      setCourses(data.users);
    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    console.log("ProfRow useEffect");
    fetchProfsCourses();
  }, []);

  return (
    <tr className="body">
      <td className="column0">
        <button className="btn btn-secondary" onClick={handleDeleteProf}>
          <RemoveIcon />
        </button>
      </td>
      <td className="column1">{professor.email}</td>
      <td className="column2">{professor.firstName}</td>
      <td className="column3">{professor.lastName}</td>
      <td className="column4">{professor.faculty}</td>
      <td className="column5">{professor.department}</td>
      <td className="column6 course-button">
        {/**Create VIEW COURSES modal button */}
        <>
          <button className="courses" onClick={() => setShow(true)}>
            <OpenInFullIcon fontSize="small" /> View Courses
          </button>

          <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-lg" aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">{`${professor.firstName} ${professor.lastName}'s Courses`}</Modal.Title>
            </Modal.Header>
            {/** Display each course name of this current prof */}
            <Modal.Body>
              {courses.map((course: any, i: number) => (
                <ProfCourseRow key={i}
                  professor={professor}
                  course={course}
                  fetchProfsCourses={fetchProfsCourses}
                />
              ))}
              <AssignCourseForm
                professor={professor}
                fetchProfsCourses={fetchProfsCourses}
              />
            </Modal.Body>
          </Modal>
        </>
      </td>
    </tr >
  );
};

export default ProfRow;
