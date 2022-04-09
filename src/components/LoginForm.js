import React, { useState } from "react";
import logo from "../images/mcgill_logo.jpg"; 

// Login function and error value passed from App.js
function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  // on submit pass email and password values entered by user
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  // displays error if not null (Note: if error != null then error has occured)
  // returns form with username and password input feilds
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <img className="logo" src={logo} />

        <p className="top">Sign in with your username and password.</p>
        {error !== "" ? <div className="error"> * {error} </div> : ""}

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Username"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>

        <div className="sign-in-button">
          <input type="submit" value="Sign in" />
        </div>

        <p className="bottom"><span className="links">Forget password</span> or <span className="links">Register</span></p>
      </div>
    </form>
  );
}

export default LoginForm;
