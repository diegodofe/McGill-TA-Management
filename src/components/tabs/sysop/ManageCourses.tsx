import React, { useEffect, useState } from "react";
import AddCourseForm from "./AddCourseForm";
import CourseRow from "./CourseRow";
import "../../../style/userTable.css";
import { Course } from "../../../classes/Course";
import ImportForm from "../admin/ImportForm";
import { Container } from "react-bootstrap";

const ManageCourses = () => {
  const [courses, setCourses] = useState<Array<Course>>([]);

  const fetchCourseData = async () => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/course/all");
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
      <ImportForm taskName="Import Courses" />

      <Container className="mt-3">
        <h2 style={{ marginBottom: "20px" }}>All Courses</h2>
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
              {courses.map((course: Course, i: number) => (
                <CourseRow key={i} course={course} fetchCourseData={fetchCourseData} />
              ))}
            </tbody>
          </table>
        </div>
        <AddCourseForm fetchCourseData={fetchCourseData} />
      </Container>
    </div>
  );
};

export default ManageCourses;
