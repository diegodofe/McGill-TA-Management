import React from "react";
import { Container } from "react-bootstrap";
import "../../../style/userTable.css";
import CourseTable from "./CourseTable";

export interface TA {
  email: string;
  firstName: string;
  lastName: string;
  faculty: string;
  department: string;
}

interface Course {
  name: string;
  numStudents: number;
  currentTAs: Array<TA>;
}

const RateTA = () => {
  function createTA(email: string, firstName: string, lastName: string, faculty: string, department: string): TA {
    return { email, firstName, lastName, faculty, department };
  }

  const allTAs: Array<TA> = [
    createTA("Jennifer.Smith@mail.mcgill.ca", "Jennefer", "Smith", "Science", "Computer Science"),
    createTA("Andrew.Linn@mail.mcgill.ca", "Andrew", "Linn", "Science", "Computer Science"),
    createTA("Thomas.Key@mail.mcgill.ca", "Thomas", "Key", "Science", "Computer Science"),
  ];

  const usersEnrolledCourses: Array<Course> = [
    { name: "COMP202", numStudents: 200, currentTAs: [...allTAs] },
    { name: "COMP206", numStudents: 154, currentTAs: [...allTAs] },
    { name: "COMP330", numStudents: 95, currentTAs: [...allTAs] },
  ];

  return (
    <div>
      {/**Set to hardcoded list of profs for testing purposes */}
      {usersEnrolledCourses.map((course, i) => (
        <Container className="mb-4">
          <h2>{course.name}</h2>
          <CourseTable key={i} currentTAs={course.currentTAs} />
        </Container>
      ))}
    </div>
  );
};

export default RateTA;
