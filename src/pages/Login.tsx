import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/mcgill_logo.jpg";
import "../App.css";
import { UserContext } from "../App";

function Login() {
  // Load global state
  const state = useContext(UserContext);

  // just for example input
  const [tempEmail, setTempEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  let navigate = useNavigate();

  if (state == null || state.user == null) {
    return null;
  }

  const { user, setUser } = state;

  // on submit pass email and password values entered by user
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    /**
     * @TODO check the login details, if everything is good, set the new user state, then navigate to dashboard
     *    * ALEX: login function
     * authentication
     * navigate
     * email, password
     * fetch call to api (
     * const res = await fetch(`https://winter2022-comp307-group8.cs.mcgill.ca/login`, {
     * email and passwor
     * post method
     * }
     * if response is successful: status 20
     * if response is not successful: status 400
     * setuse
     */
    setUser({ ...user, email: tempEmail, password: tempPassword });
    navigate("/dashboard");
  }

  return (
    <div className="welcome">
      <h2>Welcome</h2>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <img className="logo" src={logo} alt="mcgill-logo" />

          <p className="top">Sign in with your email and password.</p>

          <div className="form-group">
            <input type="text" name="email" placeholder="email" id="email" onChange={(e) => setTempEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <input type="password" name="password" placeholder="Password" id="password" onChange={(e) => setTempPassword(e.target.value)} />
          </div>

          <div className="sign-in-button">
            <input type="submit" value="Sign in" />
          </div>

          <p className="bottom">
            <span className="links">Forget password</span> or <span className="links">Register</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
