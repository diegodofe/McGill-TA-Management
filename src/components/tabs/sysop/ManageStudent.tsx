import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AddStudentForm from "./AddStudentForm";
import StudentRow from "./StudentRow";

interface Student {
  email: string;
  firstName: string;
  lastName: string;
  faculty: string;
  department: string;
}

const ManageStudents = () => {

  const [students, setStudents] = useState([]);

  const fetchStudentData = async () => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/getallstudents");
      const data = await res.json();
      setStudents(data.users);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchStudentData();
  }, []);

  // function createData(email: string, firstName: string, lastName: string, faculty: string, department: string): Student {
  //   return { email, firstName, lastName, faculty, department };
  // }

  // const rows = [
  //   createData("Jennifer.Smith@mail.mcgill.ca", "Jennefer", "Smith", "Science", "Computer Science"),
  //   createData("Andrew.Linn@mail.mcgill.ca", "Andrew", "Linn", "Science", "Computer Science"),
  //   createData("Thomas.Key@mail.mcgill.ca", "Thomas", "Key", "Science", "Computer Science"),
  //   createData("Ruben.Thomas@mail.mcgill.ca", "Ruben", "Thomas", "Science", "Computer Science"),
  //   createData("Wendy.Allen@mail.mcgill.ca", "Wendy", "Allen", "Science", "Computer Science"),
  //   createData("Jared.Kim@mail.mcgill.ca", "Jared", "Kim", "Science", "Computer Science"),
  // ];

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
            </tr>
          </thead>
          <tbody>
            {students.map((row, i) => (
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
