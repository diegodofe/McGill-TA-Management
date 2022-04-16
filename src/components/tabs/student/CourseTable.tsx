import React from "react";
import "../../../style/userTable.css";
import ReviewTARow from "./ReviewTARow";

const CourseTable = ({ currentTAs }) => {
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
            {currentTAs.map((ta, i) => (
              <ReviewTARow key={i} ta={ta} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;
