import { useState } from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { TA } from "../../../classes/TA";

function ViewTAInfo({ ta }: { ta: TA }) {
  const [show, setShow] = useState(false);

  return (
    <div className="inline button-spacing" id="ta-review-modal">
      {/** Open TA info modal */}
      <button className="courses" onClick={() => setShow(true)}>
        <OpenInFullIcon fontSize="small" /> View Info
      </button>

      {/** Modal Pop up window*/}
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-md" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">{`${ta.firstName} ${ta.lastName}'s Info`}</Modal.Title>
        </Modal.Header>

        {/** TA Info */}
        {/**
         * @TODO need to fetch this information from the TA cohort from server
         */}
        <Modal.Body>
          <div>
            <span style={{ color: "grey" }}>Faculty: </span>
            {ta.faculty}
          </div>
          <div>
            <span style={{ color: "grey" }}>Department: </span>
            {ta.department}
          </div>
          <div>
            <span style={{ color: "grey" }}>Email: </span>
            {ta.email}
          </div>
          <div>
            <span style={{ color: "grey" }}>Office Hours: </span>
            {ta.officeHoursTime}
          </div>
          <div>
            <span style={{ color: "grey" }}>Office Location: </span>
            {ta.officeHoursLocation}
          </div>
          <div>
            <span style={{ color: "grey" }}>Duties: </span>
            {ta.duties}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ViewTAInfo;
