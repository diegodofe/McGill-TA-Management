import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        email: details.email
      })
    } else if (details.email !== "" || details.password !== "" ){
      console.log("Invalid username or password.");
      setError("Invalid username or password.");
    }
  }

  const Logout = () => {
    setUser({email: ""})
  }

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome</h2>
          <button onClick={Logout} >Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      ) }
    </div>
  );
}

export default App;