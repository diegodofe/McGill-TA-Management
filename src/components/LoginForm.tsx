import React, { useState } from "react";
import logo from "../assets/images/mcgill_logo.jpg";

// Specify the structure of the props
interface Props {
  Login: Function;
  error: string;
}

// Login function and error value passed from App.js
function LoginForm({ Login, error }: Props) {
  const [details, setDetails] = useState({ username: "", password: "" });

  // on submit pass username and password values entered by user
  function submitHandler(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    Login(details);
  }

  // displays error if not null (Note: if error != null then error has occured)
  // returns form with username and password input feilds
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <img className="logo" src={logo} alt="mcgill-logo" />

        <p className="top">Sign in with your username and password.</p>
        {error !== "" ? <div className="error"> * {error} </div> : ""}

        <div className="form-group">
          <input type="text" name="username" placeholder="Username" id="username" onChange={(e) => setDetails({ ...details, username: e.target.value })} value={details.username} />
        </div>

        <div className="form-group">
          <input type="password" name="password" placeholder="Password" id="password" onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} />
        </div>

        <div className="sign-in-button">
          <input type="submit" value="Sign in" />
        </div>

        <p className="bottom">
          <span className="links">Forget password</span> or <span className="links">Register</span>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
