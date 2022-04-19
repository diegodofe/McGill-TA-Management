import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import { RealTA } from "../../../classes/TA";
import ViewTAPerformance from "./ViewTAPerformance";
import { allCourseMcGill } from "../../../data/RealData";
import { RealCourse } from "../../../classes/Course";
import ViewTACourses from "./ViewTACourses";

const TARowUnassign = ({ ta, fetchTAData }: { ta: RealTA; fetchTAData: Function }) => {
  /**
   * @TODO fetch current list of assigned courses for this ta
   */

  const taCurrentAssigned: Array<RealCourse> = [allCourseMcGill[0], allCourseMcGill[1]];
  const taPreviousAssigned: Array<RealCourse> = [...allCourseMcGill];

  const handleUnassignUser = async () => {
    console.log(ta.email);
    const res = await fetch(``, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: ta.email,
        courseID: ta.courseID,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <tr>
      <td className="column0">
        {/* Red button to call handleDeleteTA function with trash can icon */}
        <button className="btn btn-secondary" onClick={handleUnassignUser}>
          <RemoveIcon />
        </button>
      </td>
      <td className="column1">{`${ta.firstName} ${ta.lastName}`}</td>
      <td className="column2">
        <ViewTAPerformance ta={ta} isProfessor={false} />
      </td>
      <td className="column3">
        <ViewTACourses courseList={taCurrentAssigned} />
      </td>
      <td className="column4">
        <ViewTACourses courseList={taPreviousAssigned} />
      </td>
    </tr>
  );
};

export default TARowUnassign;
