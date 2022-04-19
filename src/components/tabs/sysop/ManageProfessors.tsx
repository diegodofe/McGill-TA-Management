import React, { useEffect } from "react";
import AddProfForm from "./AddProfForm";
import ProfRow from "./ProfRow";
import "../../../style/userTable.css";
import { RealProfessor } from "../../../classes/Professor";

const ManageProfessors = () => {
  const [profs, setProfs] = React.useState<Array<RealProfessor>>([]);

  const fetchProfData = async () => {
    try {
      console.log("fetching prof data");
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/prof/all");
      const json = await res.json();
      console.log("prof data fetched");
      console.log(json.profs);
      setProfs(json.profs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Load data
    fetchProfData();
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>All Professors</h2>
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
              <th className="column5">Courses</th>
            </tr>
          </thead>
          <tbody>
            {/**Set to hardcoded list of profs for testing purposes */}
            {profs.map((professor: RealProfessor, i: number) => {
              if (professor) {
                return <ProfRow key={i} professor={professor} fetchProfData={fetchProfData} />;
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
      <AddProfForm fetchProfData={fetchProfData} />
    </div>
  );
};

export default ManageProfessors;
