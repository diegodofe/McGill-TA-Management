import React from "react";
import { Container } from "react-bootstrap";
import { TA } from "../../../classes/TA";
import { usersEnrolledCourses } from "../../../data/FakeData";
import "../../../style/userTable.css";
import TAReviewRow from "./TAReviewRow";

const RateTA = () => {
  return (
    <div>
      {/**
       * @TODO Retrieve this information from the actual global user state
       */}
      {usersEnrolledCourses.map((course, i) => (
        <Container key={i} className="mb-4">
          <h2>{course.name}</h2>
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
                {/**Set to hardcoded list of profs for testing purposes */}
                {course.currentTAs.map((ta: TA, i: number) => (
                  <TAReviewRow key={i} ta={ta} />
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      ))}
    </div>
  );
};

export default RateTA;
