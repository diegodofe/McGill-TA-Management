import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import "../../../style/userTable.css";
import Course from "../../../classes/Course";
import { TA } from "../../../classes/TA";
import ProfWishlistForm from "../professor/ProfWishlistForm";

function ViewTAWishlist({ course }: { course: Course }) {
  return (
    <div className="view-wishlist" id="ta-wishlist-modal">
      {/** Pop up window*/}
      <OverlayTrigger
        trigger="click"
        placement="top"
        overlay={
          <Popover id={"wishlist-popover"}>
            <Popover.Header as="h3">{"Professor's Wishlist"}</Popover.Header>
            <Popover.Body>
              {/** Render all the TA names on this course list */}
              {course.wishlist.map((ta: TA, i: number) => (
                <h6 key={i}>{`${ta.firstName} ${ta.lastName}`}</h6>
              ))}

              {/** Create the add TA to wishlist form */}
              <ProfWishlistForm />
            </Popover.Body>
          </Popover>
        }
      >
        {/** Open wishlist popup */}
        <button className="courses">
          <OpenInFullIcon fontSize="small" /> View Wishlist
        </button>
      </OverlayTrigger>
    </div>
  );
}

export default ViewTAWishlist;
