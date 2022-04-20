import React from "react";
import "../../../style/userTable.css";
import { TA } from "../../../classes/TA";
import ViewTAInfo from "../admin/ViewTAInfo";
import ViewTAPerformance from "../admin/ViewTAPerformance";
import EditOHTime from "./EditOHTime";
import EditOHLocation from "./EditOHLocation";
import EditDuties from "./EditDuties";
import { Course } from "../../../classes/Course";

const ProfCourseRow = ({ ta, course, loadTAsOfCourse }: { ta: TA; course: Course; loadTAsOfCourse: () => Promise<void> }) => {
  return (
    <tr className="body">
      {/**
       * @TODO need to fetch the term that this TA was in this course
       */}
      <td className="column1">Fall 2022</td>
      {/** TA Extra Info*/}
      <td className="column2">
        <div className="inline">{`${ta.firstName} ${ta.lastName}`}</div>
        <ViewTAInfo ta={ta} />
      </td>
      <td className="column3">
        <EditOHTime loadTAsOfCourse={loadTAsOfCourse} course={course} ta={ta} />
      </td>
      <td className="column4">
        <EditOHLocation loadTAsOfCourse={loadTAsOfCourse} course={course} ta={ta} />
      </td>
      <td className="column5">
        <EditDuties loadTAsOfCourse={loadTAsOfCourse} course={course} ta={ta} />
      </td>
      <td className="column6">
        <ViewTAPerformance ta={ta} isProfessor={true} />
      </td>
    </tr>
  );
};

export default ProfCourseRow;
