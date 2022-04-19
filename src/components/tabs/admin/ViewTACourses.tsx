import React from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { OverlayTrigger, Popover } from "react-bootstrap";
import "../../../style/userTable.css";
import { RealCourse } from "../../../classes/Course";

function ViewTACourses({ courseList }: { courseList: Array<RealCourse> }) {
  return (
    <div id="ta-courses-modal">
      {/** Pop up window*/}
      <OverlayTrigger
        trigger="focus"
        placement="top"
        overlay={
          <Popover id={"wishlist-Popover"}>
            {courseList.map((course: RealCourse, i: number) => (
              <p style={{ margin: "2px 10px" }} key={i}>
                {course.courseCode + " " + course.courseNumber}
              </p>
            ))}
          </Popover>
        }
      >
        {/** Open courses popup */}
        <button className="courses">
          <OpenInFullIcon fontSize="small" /> View Courses
        </button>
      </OverlayTrigger>
    </div>
  );
}

export default ViewTACourses;
