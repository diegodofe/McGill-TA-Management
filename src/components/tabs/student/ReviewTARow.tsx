import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";

const ReviewTARow = ({ ta }) => {
  const [show, setShow] = useState(false);

  return (
    <tr className="body">
      <td className="column0">...</td>
      <td className="column1">{ta.email}</td>
      <td className="column2">{ta.firstName}</td>
      <td className="column3">{ta.lastName}</td>
      <td className="column4">{ta.faculty}</td>
      <td className="column5">{ta.department}</td>
      <td className="column6">
        {/**Create VIEW COURSES modal button */}
        <>
          <button className="courses" onClick={() => setShow(true)}>
            View Courses
          </button>

          <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-lg" aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">{`Review ${ta.firstName} ${ta.lastName}`}</Modal.Title>
            </Modal.Header>

            {/** Display each course name of this current prof */}
            <Modal.Body></Modal.Body>
          </Modal>
        </>
      </td>
    </tr>
  );
};

export default ReviewTARow;
