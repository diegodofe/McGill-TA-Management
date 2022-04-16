import React, { useEffect, useState } from "react";
import AddCourseForm from "./AddCourseForm";
import CourseRow from "./CourseRow";
import "../../../style/userTable.css";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourseData = async () => {
    try {
      const res = await fetch(
        "https://winter2022-comp307-group8.cs.mcgill.ca/course/all"
      );
      const data = await res.json();
      setCourses(data.courses);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <div>
      {/* <table>
                <thead>
                    <tr>
                        <th className="column2">Course Name</th>
                        <th className="column3">Course Description</th>
                        <th className="column5">Course Semester</th>
                        <th className="column6">Course Year</th>
                        <th className="column7">Course Instructor</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((row, i) => (
                        <CourseRow key={i} row={row} fetchCourseData={fetchCourseData} />
                    ))}
                </tbody>
            </table> */}

      <div id="profTable">
        <table>
          <thead>
            <tr>
              <th className="column0"></th>
              <th className="column2">Course Name</th>
              <th className="column3">Course Description</th>
              <th className="column5">Course Semester</th>
              <th className="column6">Course Year</th>
              <th className="column7">Course Instructor</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((row, i) => (
              <CourseRow key={i} row={row} fetchCourseData={fetchCourseData} />
            ))}
          </tbody>
        </table>
      </div>
      <AddCourseForm fetchCourseData={fetchCourseData} />
    </div>
  );
};

export default ManageCourses;
