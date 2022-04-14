import { useContext } from "react";
import { UserContext } from "../App";
import UserManagement from "../components/tabs/sysop/UserManagement";

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user.getEmail()}</p>
      <UserManagement />
    </div>
  );
}

export default Dashboard;
