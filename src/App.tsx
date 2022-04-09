import React, { useState } from "react";
import "./App.css";

// Components
import LoginForm from "./components/LoginForm";

function App() {
  // Define user interface
  interface User {
    email: string;
    password: string;
  }

  // Instatiate a hard coded admin user
  let adminUser: User = {
    email: "admin@mcgill.com",
    password: "admin",
  };

  // passing initial state of email=null and error=null to useState function
  // returns variable with current state value and setter function
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // function called when attempting login
  function Login(details: User): void {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");
      setEmail(details.email);
    } else if (details.email !== "" || details.password !== "") {
      console.log("Invalid username or password.");
      setError("Invalid username or password.");
    }
  }

  function Logout(): void {
    setEmail(""); // set email=null
  }

  // if email != null, display welcome screen
  // else display LoginForm (passing Login function and error)
  // note that email only not null when email and password entered match the "database" (adminUser currently)
  return (
    <div className="App">
      {email !== "" ? (
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
