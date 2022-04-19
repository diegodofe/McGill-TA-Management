import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { RealCourse } from "../../../classes/Course";
import ProfWishlistForm from "../professor/ProfWishlistForm";
import { RealTA } from "../../../classes/TA";
import { allTAs } from "../../../data/RealData";

function ViewTAWishlist({ course, isProfessor }: { course: RealCourse; isProfessor: boolean }) {
  const [show, setShow] = React.useState(false);

  /**
   * @TODO fetch wish list for this specific course
   */
  const wishListForCourse: Array<RealTA> = [...allTAs];

  return (
    <div className="view-wishlist" id="ta-wishlist-modal">
      <button disabled={show} className="courses" onClick={() => setShow(true)}>
        <OpenInFullIcon fontSize="small" /> View Wishlist
      </button>

      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-md" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <h2>{`${course.courseCode} ${course.courseNumber} Wish List`}</h2>
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
              {wishListForCourse.map((ta: RealTA, i: number) => (
                <tr key={i}>
                  <td className="column2">{ta.firstName}</td>
                  <td className="column3">{ta.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ProfWishlistForm course={course} isProfessor={isProfessor} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ViewTAWishlist;
