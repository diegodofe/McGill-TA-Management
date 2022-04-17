import React, { useState } from "react";
import { Container, Dropdown, Tab, Tabs } from "react-bootstrap";
import Course from "../../../classes/Course";
import { allCoursesAtMcGill } from "../../../data/FakeData";
import "../../../style/userTable.css";
import RenderList from "./RenderList";
import ViewTAWishlist from "./ViewTAWishlist";

const TAAdministration = () => {
  /**
   * @TODO fetch all courses at mcgill from server
   */
  const [currentCourse, setCurrentCourse] = useState<Course>(allCoursesAtMcGill[0]);

  return (
    <div>
      {/**Create Course Selection Button*/}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Select Course
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {allCoursesAtMcGill.map((course: Course, i: number) => (
            <Dropdown.Item key={i} onClick={() => setCurrentCourse(course)}>
              {course.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Container>
        <h2>{currentCourse.name}</h2>
        <ViewTAWishlist course={currentCourse} />
        <Tabs defaultActiveKey="0" transition={false} id="noanim-tab" className="mb-4">
          <Tab eventKey="0" title="Current TAs">
            <RenderList listToRender={currentCourse.currentTAs} courseName={currentCourse.name} isHistorical={false} />
          </Tab>
          <Tab eventKey="1" title="Historical TAs">
            <RenderList listToRender={currentCourse.historicalTAs} courseName={currentCourse.name} isHistorical={true} />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default TAAdministration;
