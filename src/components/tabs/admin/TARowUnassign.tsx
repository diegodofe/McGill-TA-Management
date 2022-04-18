import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

const TARowUnassign = ({ ta, fetchTAData }) => {
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
      <td className="column2">
        {ta.email} {ta.lastName || ta.backupLastName}
      </td>
      <td className="column3">{ta.performance}</td>
      <td className="column4">{ta.currentCourses}</td>
      <td className="column5">{ta.previousCourses}</td>
    </tr>
  );
};

export default TARowUnassign;
