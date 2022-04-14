import { useContext } from "react";
import { UserContext } from "../App";

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user.getEmail()}</p>
    </div>
  );
}

export default Dashboard;
