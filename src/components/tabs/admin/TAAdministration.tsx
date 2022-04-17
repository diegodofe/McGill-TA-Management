import React, { useState } from "react";
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
  const [currentCourse, setCurrentCourse] = useState<Course>(
    allCoursesAtMcGill[0]
  );

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
        <h2 className="inline course-name">{currentCourse.name}</h2>
        <ViewTAWishlist course={currentCourse} />
        <div className="inline">
          <Tabs
            defaultActiveKey="0"
            transition={false}
            id="noanim-tab"
            className="sub"
          >
            <Tab
              className="sub"
              eventKey="0"
              title={
                <React.Fragment>
                  Current TAs <LibraryBooksIcon fontSize="small" />
                </React.Fragment>
              }
            >
              <RenderList
                listToRender={currentCourse.currentTAs}
                courseName={currentCourse.name}
                isHistorical={false}
              />
            </Tab>

            <Tab
              className="sub"
              eventKey="1"
              title={
                <React.Fragment>
                  Historical TAs <PeopleAltIcon fontSize="small" />
                </React.Fragment>
              }
            >
              <RenderList
                listToRender={currentCourse.historicalTAs}
                courseName={currentCourse.name}
                isHistorical={true}
              />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default TAAdministration;
