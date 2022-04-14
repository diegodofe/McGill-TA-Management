import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./dashboard.css";

const Dashboard = () => {
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

  return (
    <div className="float-container">
      <div className="sidebar-page">
        <Sidebar />
      </div>
      <div className="main-page">
        <Topbar />
      </div>
    </div>
  );
};

export default Dashboard;
