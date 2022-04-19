import React from "react";
import { RealCourse } from "../../../classes/Course";
import { RealProfessor } from "../../../classes/Professor";

const ProfCourseRow = ({ course, fetchProfsCourses, professor }: { course: RealCourse; fetchProfsCourses: Function; professor: RealProfessor }) => {
  const removeProfFromCourse = async () => {
    console.log("Remove professor from course");
    //
    try {
      const unassignRes = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/prof/unassignbyemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: professor.email,
          courseID: course.courseID,
        }),
      });
      if (unassignRes.status === 200) {
        setTimeout(() => {
          fetchProfsCourses();
        }, 500);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <tr>
      <td>
        <button className="btn btn-secondary" onClick={removeProfFromCourse}>
          Unassign
        </button>
      </td>
      <td>{course.courseCode + " " + course.courseNumber}</td>
      <td>{course.term + " " + course.year}</td>
    </tr>
  );
};

export default ProfCourseRow;
