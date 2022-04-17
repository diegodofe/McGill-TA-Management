import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import Course from "../../../classes/Course";
import { allCoursesAtMcGill, allTAs } from "../../../data/FakeData";
import "../../../style/userTable.css";
import "../../../style/subTopbar.css";
import TACourseList from "./TACourseList";
import { TA } from "../../../classes/TA";

const TACourses = () => {
  /**
   * @TODO fetch TA user's info and courses list from server
   */
  const currentUserTA: TA = allTAs[4];
  const usersCourses: Array<Course> = [allCoursesAtMcGill[3], allCoursesAtMcGill[4], allCoursesAtMcGill[5]];
  const [currentCourse, setCurrentCourse] = useState<Course>(usersCourses[0]);

  return (
    <Container>
      {/**Create Course Selection Button*/}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="courses">
          Select Course
        </Dropdown.Toggle>

        <Dropdown.Menu className="courses">
          {usersCourses.map((course: Course, i: number) => (
            <Dropdown.Item key={i} onClick={() => setCurrentCourse(course)}>
              {course.courseID}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <h2 className="inline course-name">{`${currentCourse.courseID}: ${currentCourse.name}`}</h2>
      <div className="inline">
        <TACourseList ta={currentUserTA} />
      </div>
    </Container>
  );
};

export default TACourses;
