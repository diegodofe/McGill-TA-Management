import React from "react";
import "../../../style/userTable.css";
import { TA } from "../../../classes/TA";
import ViewTAInfo from "../admin/ViewTAInfo";
import EditOHTime from "../professor/EditOHTime";
import EditOHLocation from "../professor/EditOHLocation";
import EditDuties from "../professor/EditDuties";
import { Course } from "../../../classes/Course";

const TACourseRow = ({ ta, course, loadTAsOfCourse }: { ta: TA; course: Course; loadTAsOfCourse: () => Promise<void> }) => {
  return (
    <tr className="body">
      {/**
       * @TODO need to fetch the current term
       */}
      <td className="column1">Fall 2022</td>
      <td className="column2">
        <div className="inline">{`${ta.firstName} ${ta.lastName}`}</div>
        <ViewTAInfo ta={ta} />
      </td>
      <td className="column3">
        <EditOHTime loadTAsOfCourse={loadTAsOfCourse} course={course} ta={ta} />
      </td>
      <td className="column4">
        <EditOHLocation ta={ta} />
      </td>
      <td className="column5">
        <EditDuties ta={ta} />
      </td>
    </tr>
  );
};

export default TACourseRow;
