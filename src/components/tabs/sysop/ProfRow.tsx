import React, { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import { Modal } from "react-bootstrap";

const ProfRow = ({ row, fetchProfData }) => {
  const [show, setShow] = useState(false);
  const handleDeleteProf = () => {
    console.log("Delete professor");
    try {
      // make api call to delete prof
      fetch(
        "https://winter2022-comp307-group8.cs.mcgill.ca/prof/delete/" +
          row.email,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTimeout(() => {
        fetchProfData();
      }, 250);

      console.log("Delete professor");
    } catch (e) {}
  };

  return (
    <tr className="body">
      <td className="column0">
        <button className="btn btn-secondary" onClick={handleDeleteProf}>
          <RemoveIcon />
        </button>
      </td>
      <td className="column1">{row.email}</td>
      <td className="column2">{row.firstName}</td>
      <td className="column3">{row.lastName}</td>
      <td className="column4">{row.faculty}</td>
      <td className="column5">{row.department}</td>
      <td className="column6">
        <button
          className="courses"
          onClick={() => setShow(true)}
        >
          View Courses
        </button>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-lg"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">{`${row.firstName} ${row.lastName}'s Courses`}</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </Modal>
      </td>
    </tr>
  );
};

export default ProfRow;
