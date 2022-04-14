import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./usermanagement.css";
import "./table.css";

const Dashboard = () => {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
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
                        <tr className="row100 head">
                          <th className="cell100 column1">Class name</th>
                          <th className="cell100 column2">Type</th>
                          <th className="cell100 column3">Hours</th>
                          <th className="cell100 column4">Trainer</th>
                          <th className="cell100 column5">Spots</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="table100-body js-pscroll">
                    <table>
                      <tbody>
                        {rows.map((row) => (
                          <tr className="row100 body">
                            <td className="cell100 column1">{row.name}</td>
                            <td className="cell100 column2">{row.calories}</td>
                            <td className="cell100 column3">
                            {row.fat}
                            </td>
                            <td className="cell100 column4">{row.carbs}</td>
                            <td className="cell100 column5">{row.protein}</td>
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
