import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

const TAAdminRow = ({ taAdmin, handleFetchTAAdmins }) => {
  const handleDeleteTAAdmin = async () => {
    try {
      const deleteRes = await fetch(
        "https://winter2022-comp307-group8.cs.mcgill.ca/taAdmin/delete/" +
          taAdmin.email,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (deleteRes.status === 200) {
        setTimeout(() => {
          handleFetchTAAdmins();
        }, 500);
      } else {
        console.log("Error deleting TAAdmin");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <tr>
      <td className="column0">
        {/* Red button to call handleDeleteTAAdmin function with trash can icon */}
        <button className="btn btn-secondary" onClick={handleDeleteTAAdmin}>
          <RemoveIcon />
        </button>
      </td>
      <td className="column1">{taAdmin.email}</td>
      <td className="column2">
        {taAdmin.firstName || taAdmin.backupFirstName}
      </td>
      <td className="column3">{taAdmin.lastName || taAdmin.backupLastName}</td>
      <td className="column4">{taAdmin.faculty}</td>
      <td className="column5">{taAdmin.department}</td>
    </tr>
  );
};

export default TAAdminRow;
