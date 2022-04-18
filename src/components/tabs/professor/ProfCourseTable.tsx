import React from "react";
import { TA } from "../../../classes/TA";
import ProfCourseRow from "./ProfCourseRow";

const ProfCourseTable = ({ listToRender }: { listToRender: Array<TA> }) => {
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
            <th className="column6">Performance</th>
            <th className="column7">Add to Wishlist</th>
          </tr>
        </thead>
        <tbody>
          {listToRender.map((ta: TA, i: number) => (
            <ProfCourseRow key={i} ta={ta} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfCourseTable;
