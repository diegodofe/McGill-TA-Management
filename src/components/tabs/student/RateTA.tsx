import React from "react";
import { Container } from "react-bootstrap";
import { usersEnrolledCourses } from "../../../data/FakeData";
import "../../../style/userTable.css";
import CourseTable from "./CourseTable";

const RateTA = () => {
  return (
    <div>
      {/**
       * @TODO Retrieve this information from the actual global user state
       */}
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
