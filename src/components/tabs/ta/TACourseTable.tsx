import React from "react";
import { RealTA } from "../../../classes/TA";
import TACourseRow from "./TACourseRow";

const TACourseTable = ({ ta }: { ta: RealTA }) => {
  return (
    <div id="profTable">
      <table style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th className="column1">Term</th>
            <th className="column2">Teaching Assistant</th>
            <th className="column3">OH Time</th>
            <th className="column4">OH Location</th>
            <th className="column5">Duties</th>
          </tr>
        </thead>
        <tbody>
          <TACourseRow ta={ta} />
        </tbody>
      </table>
    </div>
  );
};

export default TACourseTable;
