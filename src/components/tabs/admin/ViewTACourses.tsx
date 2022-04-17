import React from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { OverlayTrigger, Popover } from "react-bootstrap";
import "../../../style/userTable.css";

function ViewTACourses({ courseList }: { courseList: Array<string> }) {
  return (
    <div id="ta-courses-modal">
      {/** Pop up window*/}
      <OverlayTrigger
        trigger="focus"
        placement="top"
        overlay={
          <Popover id={"wishlist-Popover"}>
            {courseList.map((courseName: string, i: number) => (
              <p style={{ margin: "2px 10px" }} key={i}>
                {courseName}
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
