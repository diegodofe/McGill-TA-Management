import React from "react";
import { TA } from "../../../classes/TA";
import "../../../style/userTable.css";
import ReviewTARow from "./ReviewTARow";

const CourseTable = ({ currentTAs }) => {
  return (
    <div>
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
            {currentTAs.map((ta: TA, i: number) => (
              <ReviewTARow key={i} ta={ta} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;
