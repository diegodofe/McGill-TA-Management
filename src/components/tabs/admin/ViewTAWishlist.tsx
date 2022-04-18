import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import React from "react";
import { Modal, OverlayTrigger, Popover } from "react-bootstrap";
import "../../../style/userTable.css";
import Course from "../../../classes/Course";
import { TA } from "../../../classes/TA";
import ProfWishlistForm from "../professor/ProfWishlistForm";

function ViewTAWishlist({ course, isProfessor }: { course: Course; isProfessor: boolean }) {
  const [show, setShow] = React.useState(false);
  return (
    <div className="view-wishlist" id="ta-wishlist-modal">
      {/** Pop up window*/}
      <OverlayTrigger
        trigger="focus"
        placement="top"
        overlay={
          <Popover id={"wishlist-popover"}>
            <Popover.Header as="h3">{"Professor's Wishlist"}</Popover.Header>
            <Popover.Body>
              {/* {course.wishlist.map((ta: TA, i: number) => (
                <h6 key={i}>{`${ta.firstName} ${ta.lastName}`}</h6>
              ))} */}
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
