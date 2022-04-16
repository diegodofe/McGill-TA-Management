import React, { useEffect } from "react";
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
        <div className="course-section">
          <h1>{course.name}</h1>
          <CourseTable key={i} currentTAs={course.currentTAs} />
        </div>
      ))}
    </div>
  );
};

export default RateTA;
