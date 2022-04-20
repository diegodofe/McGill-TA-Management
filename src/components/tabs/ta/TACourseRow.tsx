import React, { useContext } from "react";
import "../../../style/userTable.css";
import { TA } from "../../../classes/TA";
import ViewTAInfo from "../admin/ViewTAInfo";
import EditOHTime from "../professor/EditOHTime";
import EditOHLocation from "../professor/EditOHLocation";
import EditDuties from "../professor/EditDuties";
import { Course } from "../../../classes/Course";
import { UserContext } from "../../../App";

const TACourseRow = ({ ta, course, loadTAsOfCourse }: { ta: TA; course: Course; loadTAsOfCourse: () => Promise<void> }) => {

  const { user } = useContext(UserContext);

  return (
    <tr className="body">
      {/**
       * @TODO need to fetch the current term
       */}
      <td className="column1">Fall 2022</td>
      <td className="column2">
        <div className="inline">{`${ta.firstName} ${ta.lastName}`}</div>
        {user && user.email == ta.email && <ViewTAInfo ta={ta} />}
      </td>
      <td className="column3">
        {
          user && user.email == ta.email ?
            <EditOHTime loadTAsOfCourse={loadTAsOfCourse} course={course} ta={ta} />
            :
            <div>{ta.officeHoursTime}</div>
        }

      </td>
      <td className="column4">
        {
          user && user.email == ta.email ?
            <EditOHLocation loadTAsOfCourse={loadTAsOfCourse} course={course} ta={ta} />
            :
            <div>{ta.officeHoursLocation}</div>
        }
      </td>
      <td className="column5">
        {
          user && user.email == ta.email ?
            <EditDuties loadTAsOfCourse={loadTAsOfCourse} course={course} ta={ta} />
            :
            <div>{ta.duties}</div>
        }

      </td>
    </tr>
  );
};

export default TACourseRow;
