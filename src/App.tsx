import React, { useState } from "react";
import "./App.css";

// Components
import LoginForm from "./components/LoginForm";

function App() {
  // Define user interface
  interface User {
    username: string;
    password: string;
  }

  // Instatiate a hard coded admin user
  let adminUser: User = {
    username: "admintest",
    password: "admin",
  };

  // passing initial state of username=null and error=null to useState function
  // returns variable with current state value and setter function
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  // function called when attempting login
  function Login(details: User): void {
    console.log(details);

    if (details.username === adminUser.username && details.password === adminUser.password) {
      console.log("Logged in");
      setUsername(details.username);
    } else if (details.username !== "" || details.password !== "") {
      console.log("Invalid username or password.");
      setError("Invalid username or password.");
    }
  }

  function Logout(): void {
    setUsername(""); // set username=null
  }

  // if username != null, display welcome screen
  // else display LoginForm (passing Login function and error)
  // note that username only not null when username and password entered match the "database" (adminUser currently)
  return (
    <div className="App">
      {username !== "" ? (
        <div className="welcome">
          <h2>Welcome</h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
