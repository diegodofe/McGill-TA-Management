import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

const ProfRow = ({ row, fetchProfData }) => {
  const handleDeleteProf = () => {
    console.log("Delete professor");
    try {
      // make api call to delete prof
      fetch(
        "https://winter2022-comp307-group8.cs.mcgill.ca/prof/delete/" +
          row.email,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTimeout(() => {
        fetchProfData();
      }, 250);

      console.log("Delete professor");
    } catch (e) {}
  };

  return (
    <tr className="body">
      <td className="column1">{row.email}</td>
      <td className="column2">{row.firstName}</td>
      <td className="column3">{row.lastName}</td>
      <td className="column4">{row.faculty}</td>
      <td className="column5">{row.department}</td>
      <td className="column0">
        <button className="btn btn-secondary" onClick={handleDeleteProf}>
          <RemoveIcon />
        </button>
      </td>
    </tr>
  );
};

export default ProfRow;
