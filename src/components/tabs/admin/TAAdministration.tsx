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

  const emptyCourse = {
    courseCode: "",
    courseNumber: "",
    year: "",
    term: "",
    courseName: "",
  }

  const [currentCourse, setCurrentCourse] = useState(emptyCourse);

  const [courses, setCourses] = useState<Course[]>(allCoursesAtMcGill);

  const handleFetchCourses = async (isInitial: boolean = false) => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/course/all");
      const data = await res.json();
      console.log("courses loaded");
      setCourses(data.courses);
      if (data.courses.length > 0 && isInitial) {
        setCurrentCourse(data.courses[0]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    console.log("AssignCourseForm useEffect");
    handleFetchCourses(true);
  }, []);


  return (
    <div>
      {/**Create Course Selection Button*/}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="courses">
          Select Course
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {courses.map((course: any, i: number) => (
            <Dropdown.Item key={i} onClick={() => setCurrentCourse(course)}>
              {course.courseCode + " " + course.courseNumber + " - " + course.term + " " + course.year}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Container>
        <div style={{ display: "flex", alignItems: "center", paddingTop: 10 }}>
          <span style={{ fontSize: 20 }}>
            {currentCourse.courseCode + " " + currentCourse.courseNumber}
          </span>
          <span style={{ fontSize: 15, color: 'grey', paddingLeft: 5 }}>
            {" -   " + currentCourse.term + " " + currentCourse.year}
          </span>
        </div>
        <div>
          <h4>{currentCourse.courseName}</h4>
        </div>
        <div>
          <Tabs defaultActiveKey="0" transition={false} id="noanim-tab" className="mb-4">
            <Tab eventKey="0" title="Current TAs">
              {/* <RenderList
                listToRender={currentCourse.currentTAs}
                courseName={currentCourse.name}
                isHistorical={false} /> */}
            </Tab>
            <Tab eventKey="1" title="Historical TAs">
              {/* <RenderList listToRender={currentCourse.historicalTAs} courseName={currentCourse.name} isHistorical={true} /> */}
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default TAAdministration;

{/* <ViewTAWishlist course={currentCourse} /> */ }

