import React, { useEffect, useState } from "react";
import AddTaAdminForm from "./AddTaAdminForm";
import TAAdminRow from "./TAAdminRow";
import "../../../style/userTable.css";
import { Container } from "react-bootstrap";
import ImportForm from "../admin/ImportForm";

const ManageTAAdmins = () => {
  const [taAdmins, setTAAdmins] = useState([]);

  const handleFetchTAAdmins = async () => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/taAdmin/all");
      const data = await res.json();
      console.log("taAdmins loaded");
      setTAAdmins(data.tas);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("ManageTAAdmins useEffect");
    handleFetchTAAdmins();
  }, []);

  return (
    <div>
      <ImportForm taskName="Professor Admins" />
      <Container className="mt-3">
        {/* Table that lists all the TAAdmins */}
        <h2 style={{ marginBottom: "20px" }}>All Admin</h2>
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
              {taAdmins.map((taAdmin, i) => (
                <TAAdminRow key={i} taAdmin={taAdmin} handleFetchTAAdmins={handleFetchTAAdmins} />
              ))}
            </tbody>
          </table>
        </div>

        <AddTaAdminForm handleFetchTAAdmins={handleFetchTAAdmins} />
      </Container>
    </div>
  );
};

export default ManageTAAdmins;
