import { useContext } from "react";
import { UserContext } from "../App";
import Navigation from "../components/topbar/Topbar";

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>{user.email}</h1>
      <Navigation />
    </div>
  );
}

export default Dashboard;
