import React, { useState, useEffect, useContext } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { RealCourse } from "../../../classes/Course";
import "../../../style/userTable.css";
import "../../../style/subTopbar.css";
import TACourseTable from "./TACourseTable";
import { RealTA } from "../../../classes/TA";
import { allTAs } from "../../../data/RealData";
import { UserContext } from "../../../App";

// create empty RealCourse
const emptyCourse: RealCourse = {
  courseID: "",
  createdAt: "",
  updatedAt: "",
  term: "",
  year: "",
  courseNumber: "",
  courseName: "",
  courseCode: "",
}

const TACourses = () => {
  const currentUserTA: RealTA = allTAs[1];
  // const usersCourses: Array<RealCourse> = [...allCourseMcGill];
  const [currentCourse, setCurrentCourse] = useState<RealCourse>(emptyCourse);
  const [allCourses, setAllCourses] = useState<Array<RealCourse>>([]);

  const { user } = useContext(UserContext);

  // Load all courses
  const loadTAsCourses = async () => {
    try {
      if (user && user.email) {
        const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/ta/courses/" + user.email);
        const json = await res.json();

        setAllCourses(json.courses as RealCourse[]);
        if (json.courses && json.courses.length > 0) {
          setCurrentCourse(json.courses[0]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadTAsCourses();
  }, []);

  return (
    <Container>
      {/**Create Course Selection Button*/}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="courses">
          Select Course
        </Dropdown.Toggle>

        <Dropdown.Menu className="courses">
          {allCourses.map((course: RealCourse, i: number) => (
            <Dropdown.Item key={i} onClick={() => setCurrentCourse(course)}>
              {`${course.courseCode} ${course.courseNumber} - ${course.term} ${course.year}`}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <h2 className="inline course-name">{`${currentCourse.courseCode} ${currentCourse.courseNumber}: ${currentCourse.courseName}`}</h2>
      <div className="inline">
        <TACourseTable course={currentCourse} ta={currentUserTA} />
      </div>
    </Container>
  );
};

export default TACourses;
