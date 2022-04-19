import React from "react";
import { RealTA } from "../../../classes/TA";
import TARow from "./TARow";
import TARowUnassign from "./TARowUnassign";

const TAList = ({ tas, fetchTAData, kind }: { tas: Array<RealTA>; fetchTAData: Function; kind: string }) => {
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
          {tas.map((ta: RealTA, i: number) => {
            if (kind === "all") {
              return <TARow key={i} ta={ta} fetchTAData={fetchTAData} />;
            } else {
              return <TARowUnassign key={i} ta={ta} fetchTAData={fetchTAData} />;
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TAList;
