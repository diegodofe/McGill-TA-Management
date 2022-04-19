import React, { useEffect, useState } from "react";
import StudentRow from "./StudentRow";
import "../../../style/userTable.css";
import RealStudent from "../../../classes/Student";

const ManageStudents = () => {
  const [students, setStudents] = useState<Array<RealStudent>>([]);

  const fetchStudentData = async () => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/getallstudents");
      const data = await res.json();
      setStudents(data.users);
      console.log("Deleted student");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>All Students</h2>
      <div id="profTable">
        <table>
          <thead>
            <tr>
              <th className="column0"></th>
              <th className="column1">Email</th>
              <th className="column2">First name</th>
              <th className="column3">Last name</th>
              <th className="column4">Student ID</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student: RealStudent, i: number) => (
              <StudentRow key={i} student={student} fetchStudentData={fetchStudentData} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStudents;
