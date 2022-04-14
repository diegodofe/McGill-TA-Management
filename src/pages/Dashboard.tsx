import React, { useContext, useState } from "react";
import { UserContext } from "../App";

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
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user.email}</p>
      {/* Input to change tempUsername */}
      <input
        // create a 1px black border
        style={{ border: "1px solid black" }}
        type="text"
        onChange={(e) => setTempUsername(e.target.value)}
      />

      {/* red Button to change username */}
      {/* EXAMPLE: how to change the email of the user */}
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => {
          setUser({ ...user, email: tempUsername });
        }}
      >
        Change username button
      </button>
    </div>
  );
};

export default Dashboard;
