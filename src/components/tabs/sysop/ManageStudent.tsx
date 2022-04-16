import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import StudentRow from "./StudentRow";
import "../../../style/userTable.css";

export interface Student {
  email: string;
  firstName: string;
  lastName: string;
  studentID: string;
  courses: Array<string>;
}

const ManageStudents = () => {
  const [students, setStudents] = useState([]);

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

  function createStudent(email: string, firstName: string, lastName: string, studentID: string, courses: Array<string>): Student {
    return { email, firstName, lastName, studentID, courses };
  }

  const hardcoded: Array<Student> = [
    createStudent("Jennifer.Smith@mail.mcgill.ca", "Jennefer", "Smith", "2600000000", ["COMP202", "COMP206", "COMP330"]),
    createStudent("Andrew.Linn@mail.mcgill.ca", "Andrew", "Linn", "2600000000", ["COMP202", "COMP206", "COMP330"]),
    createStudent("Thomas.Key@mail.mcgill.ca", "Thomas", "Key", "2600000000", ["COMP202", "COMP206", "COMP330"]),
    createStudent("Ruben.Thomas@mail.mcgill.ca", "Ruben", "Thomas", "2600000000", ["COMP202", "COMP206", "COMP330"]),
    createStudent("Wendy.Allen@mail.mcgill.ca", "Wendy", "Allen", "2600000000", ["COMP202", "COMP206", "COMP330"]),
    createStudent("Jared.Kim@mail.mcgill.ca", "Jared", "Kim", "2600000000", ["COMP202", "COMP206", "COMP330"]),
  ];

  return (
    <div>
      <Container>
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
              {hardcoded.map((row, i) => (
                <StudentRow key={i} row={row} fetchStudentData={fetchStudentData} />
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default ManageStudents;
