import React from "react";
import { Container } from "react-bootstrap";
import { enrolledCourses } from "../../../data/RealData";
import "../../../style/userTable.css";
import StudentCourse from "./StudentCourseTable";
import StudentRegisterCourse from "./StudentRegisterCourse";

const RateTA = () => {
  return (
    <div>
      <StudentRegisterCourse />
      <Container className="mt-3">
        {/**
         * @TODO Retrieve this information from the actual global user state
         */}
        {enrolledCourses.map((course, i) => (
          <StudentCourse key={i} course={course} />
        ))}
      </Container>
    </div>
  );
};

export default RateTA;
