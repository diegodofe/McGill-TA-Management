import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AddStudentForm from "./AddStudentForm";
import StudentRow from "./StudentRow";

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

  function createData(email: string, firstName: string, lastName: string, studentID: string, courses: Array<string>): Student {
    return { email, firstName, lastName, studentID, courses };
  }

  const hardcoded: Array<Student> = [
    createData("Jennifer.Smith@mail.mcgill.ca", "Jennefer", "Smith", "2600000000", ["COMP202", "COMP206", "COMP330"]),
    createData("Andrew.Linn@mail.mcgill.ca", "Andrew", "Linn", "2600000000", ["COMP202", "COMP206", "COMP330"]),
    createData("Thomas.Key@mail.mcgill.ca", "Thomas", "Key", "2600000000", ["COMP202", "COMP206", "COMP330"]),
    createData("Ruben.Thomas@mail.mcgill.ca", "Ruben", "Thomas", "2600000000", ["COMP202", "COMP206", "COMP330"]),
    createData("Wendy.Allen@mail.mcgill.ca", "Wendy", "Allen", "2600000000", ["COMP202", "COMP206", "COMP330"]),
    createData("Jared.Kim@mail.mcgill.ca", "Jared", "Kim", "2600000000", ["COMP202", "COMP206", "COMP330"]),
  ];

  return (
    <div>
      <Container>
        <table>
          <thead>
            <tr>
              <th className="column1">Email</th>
              <th className="column2">First name</th>
              <th className="column3">Last name</th>
              <th className="column4">Student ID</th>
              <th className="column4">Courses</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows are mapped to a hardcoded Array<Student> above! */}
            {hardcoded.map((row: Student, i) => (
              <StudentRow key={i} row={row} fetchStudentData={fetchStudentData} />
            ))}
          </tbody>
        </table>
      </Container>
      {/* Not sure if this is nessecary because students automatically register */}
      {/* <AddStudentForm /> */}
    </div>
  );
};

export default ManageStudents;
