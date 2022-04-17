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
          <p>term_month_year</p> <p>TA_name</p> <p>student_ID</p> <p>legal_name</p> <p>email</p> <p>grad_ugrad</p> <p>supervisor_name</p> <p>priority(yes/no)</p> <p>hours(90/180)</p> <p>date_applied</p> <p>location</p> <p>phone</p> <p>degree</p>{" "}
          <p>courses_applied_for</p> <p>open_to_other_courses(yes/no)</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ViewTAInfo;
