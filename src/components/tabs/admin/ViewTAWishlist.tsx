import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import React from "react";
import { OverlayTrigger, Popover, Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import Course from "../../../classes/Course";
import { TA } from "../../../classes/TA";
import ProfWishlistForm from "../professor/ProfWishlistForm";

function ViewTAWishlist({ course, isProfessor }: { course: Course,  isProfessor: boolean }) {
  const [show, setShow] = React.useState(false);
  return (
    <div className="view-wishlist" id="ta-wishlist-modal">
      {/** Pop up window*/}
      {/* <OverlayTrigger
        trigger="click"
        placement="top"
        overlay={
          <Popover id={"wishlist-popover"}>
            <Popover.Header as="h3">{"Professor's Wishlist"}</Popover.Header>
            <Popover.Body> */}
      {/** Render all the TA names on this course list */}
      {/* {course.wishlist.map((ta: TA, i: number) => (
                <h6 key={i}>{`${ta.firstName} ${ta.lastName}`}</h6>
              ))} */}

      {/** Create the add TA to wishlist form */}
      {/* <ProfWishlistForm />
            </Popover.Body>
          </Popover>
        }
      > */}
      {/** Open wishlist popup */}

      <button disabled={show} className="courses" onClick={() => setShow(true)}>
        <OpenInFullIcon fontSize="small" /> View Wishlist
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <h2>{`${course.courseID} Wish List`}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <thead>
              <tr>
                <th className="column2">First name</th>
                <th className="column3">Last name</th>
              </tr>
            </thead>
            <tbody>
              {course.wishlist.map((ta: TA, i: number) => (
                <tr>
                  <td className="column2">{ta.firstName}</td>
                  <td className="column3">{ta.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ProfWishlistForm isProfessor={isProfessor} />
        </Modal.Body>
      </Modal>

      {/* </OverlayTrigger> */}
    </div>
  );
}

export default ViewTAWishlist;
