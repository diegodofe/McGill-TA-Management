import React from "react";
import TARow from "./TARow";
import TARowUnassign from "./TARowUnassign";

const TAList = ({ tas, fetchTAData, kind }) => {
  return (
    <div id="profTable">
      <table style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th className="column2">Teaching Assistant</th>
            <th className="column3">Performance</th>
            <th className="column4">Current Courses</th>
            <th className="column5">Previous Courses</th>
          </tr>
        </thead>
        <tbody>
          {tas.map((ta, i) => {
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
