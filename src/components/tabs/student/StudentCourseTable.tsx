import React from "react";
import { Container } from "react-bootstrap";
import { RealCourse } from "../../../classes/Course";
import { RealTA } from "../../../classes/TA";
import { allTAs } from "../../../data/RealData";
import "../../../style/userTable.css";
import TAReviewRow from "./TAReviewRow";

const StudentCourse = ({ course }: { course: RealCourse }) => {
  /**
   * @TODO get list of TAs for course
   */
  return (
    <Container className="mb-4">
      <h2>{`${course.courseCode} ${course.courseNumber}: ${course.courseName}`}</h2>
      <div id="profTable">
        <table>
          <thead>
            <tr>
              <th className="column1">Status</th>
              <th className="column2">Review</th>
              <th className="column3">Email</th>
              <th className="column4">First Name</th>
              <th className="column5">Last Name</th>
            </tr>
          </thead>
          <tbody>
            {/**
             * @TODO Retrieve actual list of tas for this course
             */}
            {allTAs.map((ta: RealTA, i: number) => (
              <TAReviewRow key={i} ta={ta} />
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default StudentCourse;
