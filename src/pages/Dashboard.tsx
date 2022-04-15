import { useContext } from "react";
import { UserContext } from "../App";
import Navigation from "../components/topbar/Topbar";

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navigation />
    </div>
  );
}

export default Dashboard;
