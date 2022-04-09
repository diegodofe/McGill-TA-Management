import React, { useState } from "react";
import logo from "../images/mcgill_logo.jpg"; 

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

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
