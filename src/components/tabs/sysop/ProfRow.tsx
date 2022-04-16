import React, { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Modal } from "react-bootstrap";
import AssignCourseForm from "./AssignCourseFrom";
import "../../../style/userTable.css";
import Course from "../../../classes/Course";

const ProfRow = ({ professor, fetchProfData }) => {
  const [show, setShow] = useState(false);
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
    } catch (e) {}
  };

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
              {professor.courses.map((course: Course, i: number) => (
                <h2>{course.name}</h2>
              ))}

              {/** Create form to assign another course */}
              <AssignCourseForm />
            </Modal.Body>
          </Modal>
        </>
      </td>
    </tr>
  );
};

export default ProfRow;
