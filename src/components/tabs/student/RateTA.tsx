import React from "react";
import { enrolledCourses } from "../../../data/RealData";
import "../../../style/userTable.css";
import StudentCourse from "./StudentCourseTable";
import StudentRegisterCourse from "./StudentRegisterCourse";

const RateTA = () => {
  return (
    <div>
      <StudentRegisterCourse />
      {/**
       * @TODO Retrieve this information from the actual global user state
       */}
      {enrolledCourses.map((course, i) => (
        <StudentCourse key={i} course={course} />
      ))}
    </div>
  );
};

export default RateTA;
