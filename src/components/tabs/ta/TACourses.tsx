import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { RealCourse } from "../../../classes/Course";
import "../../../style/userTable.css";
import "../../../style/subTopbar.css";
import TACourseTable from "./TACourseTable";
import { RealTA } from "../../../classes/TA";
import { allCourseMcGill, allTAs } from "../../../data/RealData";

const TACourses = () => {
  /**
   * @TODO fetch TA user's info and courses list from server
   */
  const currentUserTA: RealTA = allTAs[1];
  const usersCourses: Array<RealCourse> = [...allCourseMcGill];
  const [currentCourse, setCurrentCourse] = useState<RealCourse>(usersCourses[0]);

  return (
    <Container>
      {/**Create Course Selection Button*/}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="courses">
          Select Course
        </Dropdown.Toggle>

        <Dropdown.Menu className="courses">
          {usersCourses.map((course: RealCourse, i: number) => (
            <Dropdown.Item key={i} onClick={() => setCurrentCourse(course)}>
              {course.courseID}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <h2 className="inline course-name">{`${currentCourse.courseCode} ${currentCourse.courseNumber}: ${currentCourse.courseName}`}</h2>
      <div className="inline">
        <TACourseTable ta={currentUserTA} />
      </div>
    </Container>
  );
};

export default TACourses;
