import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Dashboard = () => {
  // Load global state
  let navigate = useNavigate();

  // just for example input
  const [tempUsername, setTempUsername] = useState("");

  const state = useContext(UserContext);
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
        style={{ backgroundColor: "blue" }}
        onClick={() => {
          navigate("/")
        }}
      >
        home
      </button>
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
