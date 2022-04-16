import React from "react";
import { Container } from "react-bootstrap";
import AddProfForm from "./AddProfForm";

interface Professor {
  email: string;
  firstName: string;
  lastName: string;
  faculty: string;
  department: string;
}

const ManageProfessors = () => {
  function createData(email: string, firstName: string, lastName: string, faculty: string, department: string): Professor {
    return { email, firstName, lastName, faculty, department };
  }

  const rows = [
    createData("Jennifer.Smith@mail.mcgill.ca", "Jennefer", "Smith", "Science", "Computer Science"),
    createData("Andrew.Linn@mail.mcgill.ca", "Andrew", "Linn", "Science", "Computer Science"),
    createData("Thomas.Key@mail.mcgill.ca", "Thomas", "Key", "Science", "Computer Science"),
    createData("Ruben.Thomas@mail.mcgill.ca", "Ruben", "Thomas", "Science", "Computer Science"),
    createData("Wendy.Allen@mail.mcgill.ca", "Wendy", "Allen", "Science", "Computer Science"),
    createData("Jared.Kim@mail.mcgill.ca", "Jared", "Kim", "Science", "Computer Science"),
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
              <th className="column4">Faculty</th>
              <th className="column5">Department</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="body">
                <td className="column1">{row.email}</td>
                <td className="column2">{row.firstName}</td>
                <td className="column3">{row.lastName}</td>
                <td className="column4">{row.faculty}</td>
                <td className="column5">{row.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>

      <AddProfForm />
    </div>
  );
};

export default ManageProfessors;
