import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

const TARow = ({ ta, fetchTAData }) => {
  const handleDeleteTA = async () => {
    try {
      console.log("deleting " + ta.email);
      // make api call to delete TA
      fetch(
        "https://winter2022-comp307-group8.cs.mcgill.ca/ta/delete/" + ta.email,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTimeout(() => {
        fetchTAData();
      }, 500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <tr>
      <td className="column0">
        {/* Red button to call handleDeleteTA function with trash can icon */}
        <button className="btn btn-secondary" onClick={handleDeleteTA}>
          <RemoveIcon />
        </button>
      </td>
      <td className="column2" style={{ textTransform: "capitalize" }}>
        {(ta.firstName || ta.backupFirstName) +
          " " +
          (ta.lastName || ta.backupLastName)}
      </td>
      <td className="column3">{ta.performance}</td>
      <td className="column4">{ta.currentCourses}</td>
      <td className="column5">{ta.previousCourses}</td>
    </tr>
  );
};

export default TARow;
