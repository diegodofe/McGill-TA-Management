import React from "react";
import { TA } from "../../../classes/TA";
import TARowUnassign from "./TARowUnassign";

const TAList = ({ tas, fetchTAData }: { tas: Array<TA>; fetchTAData: Function }) => {
  return (
    <div id="profTable">
      <table style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th className="column0"></th>
            <th className="column1">Teaching Assistant</th>
            <th className="column2">Performance</th>
            <th className="column3">Current Courses</th>
            <th className="column4">Previous Courses</th>
          </tr>
        </thead>
        <tbody>
          {tas.map((ta: TA, i: number) => (
            <TARowUnassign key={i} ta={ta} fetchTAData={fetchTAData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TAList;
