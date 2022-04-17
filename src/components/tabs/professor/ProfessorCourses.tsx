import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import Course from "../../../classes/Course";
import { allProfessors } from "../../../data/FakeData";
import "../../../style/userTable.css";
import "../../../style/subTopbar.css";
import ViewTAWishlist from "../admin/ViewTAWishlist";
import ProfCourseTable from "./ProfCourseTable";

const ProfessorCourses = () => {
  /**
   * @TODO fetch prof user's courses from server
   */
  const currentProfUser = allProfessors[0];
  const [currentCourse, setCurrentCourse] = useState<Course>(currentProfUser.courses[0]);

  return (
    <Container>
      {/**Create Course Selection Button*/}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="courses">
          Select Course
        </Dropdown.Toggle>

        <Dropdown.Menu className="courses">
          {currentProfUser.courses.map((course: Course, i: number) => (
            <Dropdown.Item key={i} onClick={() => setCurrentCourse(course)}>
              {course.courseID}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <h2 className="inline course-name">{`${currentCourse.courseID}: ${currentCourse.name}`}</h2>
      <ViewTAWishlist course={currentCourse} />
      <div className="inline">
        <ProfCourseTable listToRender={currentCourse.currentTAs} />
      </div>
    </Container>
  );
};

export default ProfessorCourses;
