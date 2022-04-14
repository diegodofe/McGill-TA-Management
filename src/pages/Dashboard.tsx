import { useContext } from "react";
import { UserContext } from "../App";
import UserManagement from "../components/tabs/sysop/UserManagement";
import Topbar from "../components/topbar/Topbar";

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div className="nav-bar">
        <Topbar title={`Welcome ${user.getEmail()}`} />
      </div>
      <div className="main-page">
        <UserManagement />
      </div>
    </div>
  );
}

export default Dashboard;
