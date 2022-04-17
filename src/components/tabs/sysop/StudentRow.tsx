import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

const StudentRow = ({ student, fetchStudentData }) => {
  const handleDeleteStudent = () => {
    console.log("Delete student");
    try {
      // make api call to delete student
      fetch("https://winter2022-comp307-group8.cs.mcgill.ca/student/delete/" + student.uuid, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTimeout(() => {
        fetchStudentData();
        console.log("Deleted student");
      }, 500);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <tr className="body">
      <td className="column0">
        <button className="btn btn-secondary" onClick={handleDeleteStudent}>
          <RemoveIcon />
        </button>
      </td>
      <td className="column1">{student.email}</td>
      <td className="column2">{student.firstName}</td>
      <td className="column3">{student.lastName}</td>
      <td className="column3">{student.studentID}</td>
    </tr>
  );
};

export default StudentRow;
