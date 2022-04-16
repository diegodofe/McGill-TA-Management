import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AddProfForm from "./AddProfForm";
import ProfRow from "./ProfRow";

interface Professor {
  email: string;
  firstName: string;
  lastName: string;
  faculty: string;
  department: string;
  courses: Array<string>;
}

const ManageProfessors = () => {
  const [profs, setProfs] = React.useState([]);

  const fetchProfData = async () => {
    try {
      console.log("fetching prof data");
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/prof/all");
      const json = await res.json();
      setProfs(json.profs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Load data
    fetchProfData();
  }, []);

  function createProfessor(email: string, firstName: string, lastName: string, faculty: string, department: string, courses: Array<string>): Professor {
    return { email, firstName, lastName, faculty, department, courses };
  }

  const hardcoded: Array<Professor> = [
    createProfessor("Jennifer.Smith@mail.mcgill.ca", "Jennefer", "Smith", "Science", "Computer Science", ["COMP202", "COMP206", "COMP330"]),
    createProfessor("Andrew.Linn@mail.mcgill.ca", "Andrew", "Linn", "Science", "Computer Science", ["COMP202", "COMP206", "COMP330"]),
    createProfessor("Thomas.Key@mail.mcgill.ca", "Thomas", "Key", "Science", "Computer Science", ["COMP202", "COMP206", "COMP330"]),
    createProfessor("Ruben.Thomas@mail.mcgill.ca", "Ruben", "Thomas", "Science", "Computer Science", ["COMP202", "COMP206", "COMP330"]),
    createProfessor("Wendy.Allen@mail.mcgill.ca", "Wendy", "Allen", "Science", "Computer Science", ["COMP202", "COMP206", "COMP330"]),
    createProfessor("Jared.Kim@mail.mcgill.ca", "Jared", "Kim", "Science", "Computer Science", ["COMP202", "COMP206", "COMP330"]),
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
            {/* Rows are mapped to a hardcoded Array<Professor> above! */}
            {hardcoded.map((row, i) => (
              <ProfRow key={i} row={row} fetchProfData={fetchProfData} />
            ))}
          </tbody>
        </table>
      </Container>

      <AddProfForm fetchProfData={fetchProfData} />
    </div>
  );
};

export default ManageProfessors;
