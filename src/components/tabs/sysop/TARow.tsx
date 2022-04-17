import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

const TARow = ({ ta, fetchTAData }) => {
  const handleDeleteTA = async () => {
    try {
      const deleteRes = await fetch(
        "https://winter2022-comp307-group8.cs.mcgill.ca/ta/delete/" + ta.email,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (deleteRes.status === 200) {
        setTimeout(() => {
          fetchTAData();
        }, 500);
      } else {
        console.log("Error deleting TA");
      }
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
      <td className="column1">{ta.email}</td>
      <td className="column2">{ta.firstName || ta.backupFirstName}</td>
      <td className="column3">{ta.lastName || ta.backupLastName}</td>
      <td className="column4">{ta.faculty}</td>
      <td className="column5">{ta.department}</td>
    </tr>
  );
};

export default TARow;
