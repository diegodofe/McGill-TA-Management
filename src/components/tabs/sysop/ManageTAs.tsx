import React, { useEffect, useState } from "react";
import AddTAForm from "./AddTAForm";
import TARow from "./TARow";
import "../../../style/userTable.css";

const ManageTAs = () => {
  const [tas, setTas] = useState([]);

  const fetchTAData = async () => {
    try {
      const res = await fetch(
        "https://winter2022-comp307-group8.cs.mcgill.ca/ta/all"
      );
      const data = await res.json();
      setTas(data.tas);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTAData();
  }, []);

  return (
    <div>
      {/* Table that lists all the TAAdmins */}
      <div id="profTable">
        <table>
          <thead>
            <tr>
              <th className="column0"></th>
              <th className="column1">Email</th>
              <th className="column2">First name</th>
              <th className="column3">Last name</th>
              <th className="column4">Faculty</th>
              <th className="column5">Department</th>
            </tr>
          </thead>
          <tbody>
          {tas.map((ta, i) => (
              <TARow
                key={i}
                ta={ta}
                fetchTAData={fetchTAData}
              />
            ))}
          </tbody>
        </table>
      </div>
      <AddTAForm fetchTAData={fetchTAData} />
    </div>
  );
};

export default ManageTAs;
