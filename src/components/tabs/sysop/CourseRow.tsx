import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

const CourseRow = ({ row, fetchCourseData }) => {
  const handleDeleteCourse = () => {
    console.log("Delete course");
  };

  return (
    <tr className="body">
      <td className="column1">{row.courseCode + " " + row.courseNumber}</td>
      <td className="column2">{row.term}</td>
      <td className="column3">{row.year}</td>
      <td className="column4">{row.courseName}</td>
      <td className="column4">profname</td>
      <td className="column0">
        <button className="btn btn-secondary" onClick={handleDeleteCourse}>
          <RemoveIcon />
        </button>
      </td>
    </tr>
  );
};

export default CourseRow;
