import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import { RealCourse } from "../../../classes/Course";

const CourseRow = ({ course, fetchCourseData }: { course: RealCourse; fetchCourseData: Function }) => {
  const handleDeleteCourse = () => {
    console.log("Delete course");
  };

  return (
    <tr className="body">
      <td className="column0">
        <button className="btn btn-secondary" onClick={handleDeleteCourse}>
          <RemoveIcon />
        </button>
      </td>
      <td className="column1">{course.courseCode + " " + course.courseNumber}</td>
      <td className="column2">{course.term}</td>
      <td className="column3">{course.year}</td>
      <td className="column5">{course.courseName}</td>
      <td className="column6">profname</td>
    </tr>
  );
};

export default CourseRow;
