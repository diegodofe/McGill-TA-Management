import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import React from "react";
import { Modal } from "react-bootstrap";
import "../../../style/userTable.css";
import { FileDownload } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

const ManualTAAdd = ({ fetchTAData }) => {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [faculty, setFaculty] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Add TA");
    try {
      // make api call to add TA
      fetch("https://winter2022-comp307-group8.cs.mcgill.ca/ta/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          faculty: faculty,
          department: department,
          firstName: firstName,
          lastName: lastName,
        }),
      });
      setTimeout(() => {
        fetchTAData();
        setEmail("");
        setFaculty("");
        setDepartment("");
        setFirstName("");
        setLastName("");
      }, 500);
    } catch (e) {
      console.log(e);
      console.error();
    }
  };

  return (
    <div>
      <button className="courses" onClick={() => setShow(true)}>
        <AddIcon /> Add TA
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add a TA
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="faculty">Faculty</label>
              <input
                type="text"
                className="form-control"
                id="faculty"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
              />
              <label htmlFor="department">Department</label>
              <input
                type="text"
                className="form-control"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div style={{ height: "10px" }}></div>
            <Button className="mt-3" variant="light" type="submit">
              Add
            </Button>{" "}
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ManualTAAdd;
