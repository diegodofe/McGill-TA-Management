import React, { useEffect } from "react";
import AddProfForm from "./AddProfForm";
import ProfRow from "./ProfRow";
import "../../../style/userTable.css";

export interface Professor {
  email: string;
  firstName: string;
  lastName: string;
  faculty: string;
  department: string;
  courses: Array<Course>;
}

export interface Course {
  name: string;
  numStudents: number;
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

  function createProfessor(email: string, firstName: string, lastName: string, faculty: string, department: string, courses: Array<Course>): Professor {
    return { email, firstName, lastName, faculty, department, courses };
  }

  const hardcoded: Array<Professor> = [
    createProfessor("Jennifer.Smith@mail.mcgill.ca", "Jennefer", "Smith", "Science", "Computer Science", [
      { name: "COMP202", numStudents: 200 },
      { name: "COMP206", numStudents: 154 },
      { name: "COMP330", numStudents: 95 },
    ]),
    createProfessor("Andrew.Linn@mail.mcgill.ca", "Andrew", "Linn", "Science", "Computer Science", [
      { name: "COMP206", numStudents: 154 },
      { name: "COMP330", numStudents: 95 },
    ]),
    createProfessor("Thomas.Key@mail.mcgill.ca", "Thomas", "Key", "Science", "Computer Science", [
      { name: "COMP202", numStudents: 200 },
      { name: "COMP206", numStudents: 154 },
    ]),
    createProfessor("Ruben.Thomas@mail.mcgill.ca", "Ruben", "Thomas", "Science", "Computer Science", [
      { name: "COMP202", numStudents: 200 },
      { name: "COMP206", numStudents: 154 },
      { name: "COMP330", numStudents: 95 },
    ]),
    createProfessor("Wendy.Allen@mail.mcgill.ca", "Wendy", "Allen", "Science", "Computer Science", [
      { name: "COMP202", numStudents: 200 },
      { name: "COMP330", numStudents: 95 },
    ]),
    createProfessor("Jared.Kim@mail.mcgill.ca", "Jared", "Kim", "Science", "Computer Science", [{ name: "COMP330", numStudents: 95 }]),
  ];

  return (
    <div>
      <div id="profTable">
        <table>
          <thead>
            <tr>
              <th className="column0"></th>
              <th className="column1">Email</th>
              <th className="column2">First name</th>
              <th className="column3">Last name</th>
              <th className="column4">Faculty</th>
              <th className="column5">Department</th>
              <th className="column5">Courses</th>
            </tr>
          </thead>
          <tbody>
            {/**Set to hardcoded list of profs for testing purposes */}
            {hardcoded.map((row, i) => (
              <ProfRow key={i} row={row} fetchProfData={fetchProfData} />
            ))}
          </tbody>
        </table>
      </div>
      <AddProfForm fetchProfData={fetchProfData} />
    </div>
  );
};

export default ManageProfessors;
