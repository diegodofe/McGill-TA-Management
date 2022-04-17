import React, { useState, useEffect } from "react";
import { Container, Dropdown, Tab, Tabs } from "react-bootstrap";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Course from "../../../classes/Course";
import { allCoursesAtMcGill } from "../../../data/FakeData";
import "../../../style/userTable.css";
import "../../../style/subTopbar.css";
import RenderList from "./RenderList";
import ViewTAWishlist from "./ViewTAWishlist";

const TAAdministration = () => {
  /**
   * @TODO fetch all courses at mcgill from server
   */
  const [currentCourse, setCurrentCourse] = useState(allCoursesAtMcGill[0]);

  const [courses, setCourses] = useState<Course[]>(allCoursesAtMcGill);

  const handleFetchCourses = async () => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/course/all");
      const data = await res.json();
      console.log("courses loaded");
      setCourses(data.courses);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    console.log("AssignCourseForm useEffect");
    handleFetchCourses();
  }, []);


  return (
    <div>
      {/**Create Course Selection Button*/}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="courses">
          Select Course
        </Dropdown.Toggle>
        <Dropdown.Menu className="courses">
          {courses.map((course: any, i: number) => (
            <Dropdown.Item key={i} onClick={() => setCurrentCourse(course)}>
              {course.courseCode + " " + course.courseNumber + " - " + course.term + " " + course.year}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Container>
        <h2 className="inline course-name">{`${currentCourse.courseID}: ${currentCourse.name}`}</h2>
        {/* <ViewTAWishlist course={currentCourse} /> */}
        <div className="inline">
        <Tabs defaultActiveKey="0" transition={false} id="noanim-tab" className="sub">
          <Tab className="sub" eventKey="0"  title={
                <React.Fragment>
                  Current TAs <LibraryBooksIcon fontSize="small" />
                </React.Fragment>
              }>
            <RenderList listToRender={currentCourse.currentTAs} courseName={currentCourse.name} isHistorical={false} />
          </Tab>
          <Tab className="sub" eventKey="1"  title={
                <React.Fragment>
                  Historical TAs <PeopleAltIcon fontSize="small" />
                </React.Fragment>
              }>
            <RenderList listToRender={currentCourse.historicalTAs} courseName={currentCourse.name} isHistorical={true} />
          </Tab>
        </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default TAAdministration;
