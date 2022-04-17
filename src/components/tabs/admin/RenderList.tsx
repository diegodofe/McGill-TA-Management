import React from "react";
import { TA } from "../../../classes/TA";
import ManageTARow from "./ManageTARow";
import RegisterTAForm from "./RegisterTAForm";

const RenderList = ({ listToRender, courseName, isHistorical }: { listToRender: Array<TA>; courseName: string; isHistorical: boolean }) => {
  return (
    <div id="profTable">
      <table style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            {/**Only render the nessary parts for appropriate tab */}
            {!isHistorical && <th className="column0"></th>}
            <th className="column1">Term</th>
            <th className="column2">Teaching Assistant</th>
            <th className="column3">Performance</th>
            <th className="column4">Current Courses</th>
            <th className="column5">Previous Courses</th>
            {!isHistorical && <th className="column6">Wishlist Membership</th>}
          </tr>
        </thead>
        <tbody>
          {listToRender.map((ta: TA, i: number) => (
            <ManageTARow key={i} ta={ta} isHistorical={isHistorical} />
          ))}
        </tbody>
      </table>
      {!isHistorical && <RegisterTAForm courseName={courseName} />}
    </div>
  );
};

export default RenderList;
