import React, { useState, useEffect } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { Course } from "../../../classes/Course";
import "../../../style/userTable.css";
import "../../../style/subTopbar.css";
import ViewTAWishlist from "./ViewTAWishlist";
import TAsForCourse from "./TAsForCourse";
import { allCourseMcGill } from "../../../data/RealData";

const TAAdministration = () => {
  /**
   * Fetch
   */
  const [allCourses, setAllCourse] = useState<Array<Course>>([...allCourseMcGill]);
  const [currentCourse, setCurrentCourse] = useState<Course>(allCourses[0]); // Set to default course

  const handleFetchCourses = async (isInitial: boolean = false) => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/course/all");
      const data = await res.json();
      console.log("courses loaded");
      setAllCourse(data.courses);
      if (data.courses.length > 0 && isInitial) {
        setCurrentCourse(data.courses[0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("AssignCourseForm useEffect");
    handleFetchCourses(true);
  }, []);

  return (
    <Container>
      {/**Create Course Selection Button*/}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="courses">
          Select Course
        </Dropdown.Toggle>
        <Dropdown.Menu className="courses">
          {allCourses.map((course: Course, i: number) => (
            <Dropdown.Item key={i} onClick={() => setCurrentCourse(course)}>
              {course.courseCode + " " + course.courseNumber + " - " + course.term + " " + course.year}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <h2 className="inline course-name">{`${currentCourse.courseCode} ${currentCourse.courseNumber}: ${currentCourse.courseName}`}</h2>
      <ViewTAWishlist course={currentCourse} isProfessor={false} />
      <div className="inline">
        <TAsForCourse course={currentCourse} />
      </div>
    </Container>
  );
};

export default TAAdministration;
