import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { RealCourse } from "../../../classes/Course";
import "../../../style/userTable.css";
import "../../../style/subTopbar.css";
import ViewTAWishlist from "../admin/ViewTAWishlist";
import ProfCourseTable from "./ProfCourseTable";
import { allCourseMcGill, allProfsMcGill, allTAs } from "../../../data/RealData";
import { RealProfessor } from "../../../classes/Professor";

const ProfessorCourses = () => {
  /**
   * @TODO fetch prof user's courses from server, and list of tas in that course
   */
  const currentUserProf: RealProfessor = allProfsMcGill[0];
  const profsCourses: Array<RealCourse> = [...allCourseMcGill]; // list of prof's courses
  const [currentCourse, setCurrentCourse] = useState<RealCourse>(profsCourses[0]); // Default course to render
  const tasInCurrentCourse = [...allTAs]; // list of tas in the current selected course

  return (
    <Container>
      {/**Create Course Selection Button*/}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="courses">
          Select Course
        </Dropdown.Toggle>
        <Dropdown.Menu className="courses">
          {profsCourses.map((course: RealCourse, i: number) => (
            <Dropdown.Item key={i} onClick={() => setCurrentCourse(course)}>
              {`${course.courseCode} ${course.courseNumber} - ${course.term} ${course.year}`}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <h2 className="inline course-name">{`${currentCourse.courseCode} ${currentCourse.courseNumber}: ${currentCourse.courseName}`}</h2>
      <ViewTAWishlist course={currentCourse} isProfessor={true} />
      <div className="inline">
        <ProfCourseTable listToRender={tasInCurrentCourse} />
      </div>
    </Container>
  );
};

export default ProfessorCourses;
