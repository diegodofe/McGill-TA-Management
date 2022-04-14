import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./usermanagement.css";
import "./table.css";

const Dashboard = () => {
  function createData(
    name: string,
    userType: string,
    email: string,
    mcgillId: string,
    username: string,
    courses: string,
  ) {
    return { name, userType, email, mcgillId, username, courses};
  }

  const rows = [
    createData("Jennifer Smith", "Student", "Jennifer.Smith@mail.mcgill.ca", "260889435", "jennsmith", "COMP 202, COMP 330, ..."),
    createData("Andrew Linn", "Student", "Andrew.Linn@mail.mcgill.ca", "260543210", "alinn", "POLI 213, PSYC 100, ..."),
    createData("Thomas Key", "Professor", "Thomas.Key@mail.mcgill.ca", "302887541", "thomaskey2", "MATH 133, MATH 323, ..."),
    createData("Ruben Thomas", "Professor", "Ruben.Thomas@mail.mcgill.ca", "302765432", "rthomas", "POLI 213, POLI 103, ..."),
    createData("Wendy Allen", "Professor", "Wendy.Allen@mail.mcgill.ca", "302654321", "wendyallen", "COMP 421, COMP 360, ..."),
    createData("Jared Kim", "Student", "Jared.Kim@mail.mcgill.ca", "260954126", "jaredkim", "ATOC 185, ATOC 183, ..."),
  ];

  // Load global state
  const state = useContext(UserContext);

  // just for example input
  const [tempUsername, setTempUsername] = useState("");

  if (state == null || state.user == null) {
    return <div>Loading...</div>;
    // navigate back to login page because no user has been set
    // @TODO: Use router to navigate back to login page
  }

  const { user, setUser } = state;

  const title = "Users";

  return (
    <div className="float-container">
      <div className="sidebar-page">
        <Sidebar />
      </div>
      <div className="main-page">
        <Topbar title={title} />
        <div className="table">
          <div className="limiter">
            <div className="container-table100">
              <div className="wrap-table100">
                <div className="table100 ver1 m-b-110">
                  <div className="table100-head">
                    <table>
                      <thead>
                        <tr>
                          <th className="column1">Name</th>
                          <th className="column2">User Type</th>
                          <th className="column3">Email</th>
                          <th className="column2">McGill ID</th>
                          <th className="column2">Username</th>
                          <th className="column2">Courses</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="table100-body js-pscroll">
                    <table>
                      <tbody>
                        {rows.map((row) => (
                          <tr className="body">
                            <td className="column1">{row.name}</td>
                            <td className="column2">{row.userType}</td>
                            <td className="column3">
                            {row.email}
                            </td>
                            <td className="column2">{row.mcgillId}</td>
                            <td className="column2">{row.username}</td>
                            <td className="column2">{row.courses}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
