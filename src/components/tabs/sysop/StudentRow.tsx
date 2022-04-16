import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

const StudentRow = ({ row, fetchStudentData }) => {
  const handleDeleteStudent = () => {
    console.log("Delete student");
    try {
      // make api call to delete student
      fetch(
        "https://winter2022-comp307-group8.cs.mcgill.ca/student/delete/" +
          row.uuid,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
      <td className="column1">{row.email}</td>
      <td className="column2">{row.firstName}</td>
      <td className="column3">{row.lastName}</td>
      <td className="column3">{row.studentID}</td>
      <td className="column0">
        <button className="btn btn-secondary" onClick={handleDeleteStudent}>
        <RemoveIcon />
        </button>
      </td>
    </tr>
  );
};

export default StudentRow;
