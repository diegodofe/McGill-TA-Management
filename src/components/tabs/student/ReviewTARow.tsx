import React, { useState } from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";

const ReviewTARow = ({ ta }) => {
  const [show, setShow] = useState(false);

  return (
    <tr className="body">
      <td className="column1">✔️</td>
      <td className="column2 course-button">
        {/**Create VIEW REVIEW modal button */}
        <>
          <button className="courses" onClick={() => setShow(true)}>
            <OpenInFullIcon fontSize="small" /> View Review
          </button>

          <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-lg" aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">{`Review ${ta.firstName} ${ta.lastName}`}</Modal.Title>
            </Modal.Header>

            {/** Display user's review */}
            <Modal.Body></Modal.Body>
          </Modal>
        </>
      </td>
      <td className="column3">{ta.email}</td>
      <td className="column4">{ta.firstName}</td>
      <td className="column5">{ta.lastName}</td>
    </tr>
  );
};

export default ReviewTARow;
