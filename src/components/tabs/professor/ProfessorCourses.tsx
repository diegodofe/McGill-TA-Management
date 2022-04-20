import React, { useState, useContext, useEffect } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { Course } from "../../../classes/Course";
import "../../../style/userTable.css";
import "../../../style/subTopbar.css";
import ViewTAWishlist from "../admin/ViewTAWishlist";
import ProfCourseTable from "./ProfCourseTable";
import { Professor } from "../../../classes/Professor";
import { allCourseMcGill, allProfsMcGill, allTAs } from "../../../data/RealData";
import { UserContext } from "../../../App";

const ProfessorCourses = () => {
  /**
   * @TODO fetch prof user's courses from server, and list of tas in that course
   */
  const currentUserProf: Professor = allProfsMcGill[0];
  const profsCourses: Array<Course> = [...allCourseMcGill]; // list of prof's courses
  const [currentCourse, setCurrentCourse] = useState<Course>(profsCourses[0]); // Default course to render
  const tasInCurrentCourse = [...allTAs]; // list of tas in the current selected course

  const [allCourses, setAllCourses] = useState<Array<Course>>([]);

  const { user } = useContext(UserContext);

  const loadTAsCourses = async () => {
    try {
      if (user && user.email) {
        const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/prof/courses/" + user.email);
        const json = await res.json();
        if (json && json.courses) {
          setAllCourses(json.courses as Course[]);
          if (json.courses && json.courses.length > 0) {
            setCurrentCourse(json.courses[0]);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          {allCourses.map((course: Course, i: number) => (
            <Dropdown.Item key={i} onClick={() => setCurrentCourse(course)}>
              {`${course.courseCode} ${course.courseNumber} - ${course.term} ${course.year}`}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <h2 className="inline course-name">{`${currentCourse.courseCode} ${currentCourse.courseNumber}: ${currentCourse.courseName}`}</h2>
      <ViewTAWishlist course={currentCourse} isProfessor={true} />
      <div className="inline">
        <ProfCourseTable course={currentCourse} listToRender={tasInCurrentCourse} />
      </div>
    </Container>
  );
};

export default ProfessorCourses;
