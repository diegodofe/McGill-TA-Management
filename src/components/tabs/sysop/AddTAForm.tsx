import React, { useState } from "react";

const AddTAForm = ({ fetchTAData }) => {
  const [email, setEmail] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
      }, 250);
    } catch (e) {
      console.log(e);
      console.error();
    }
  };

  return (
    <div>
      <h3>Add TA Form (Needs styling)</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input required type="text" className="form-control" id="firstName" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <label htmlFor="lastName">Last name</label>
          <input required type="text" className="form-control" id="lastName" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input required type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="faculty">Faculty</label>
          <input required type="text" className="form-control" id="faculty" placeholder="Enter faculty" value={faculty} onChange={(e) => setFaculty(e.target.value)} />
          <label htmlFor="department">Department</label>
          <input required type="text" className="form-control" id="department" placeholder="Enter department" value={department} onChange={(e) => setDepartment(e.target.value)} />
        </div>
        <div style={{ height: "10px" }}></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTAForm;
