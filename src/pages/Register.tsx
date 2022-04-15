import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/mcgill_logo.jpg";
import "../App.css";
import { UserContext } from "../App";
import User from "../classes/User";

function Register() {
  // Load global state
  const { setUser } = useContext(UserContext);

  // All hooks
  const [tempEmail, setTempEmail] = useState<string>("");
  const [tempFirstName, setTempFirstName] = useState<string>("");
  const [tempLastName, setTempLastName] = useState<string>("");
  const [tempPassword, setTempPassword] = useState<string>("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function submitHandler(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    /**
     * @TODO send new user information to create user global state
     */
    const temp: User = new User({});
    temp.setEmail(tempEmail);
    temp.setFirstName(tempFirstName);
    temp.setLastName(tempLastName);
    setUser(temp);

    navigate("/dashboard");
  }

  return (
    <div className="welcome">
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <img className="logo" src={logo} alt="mcgill-logo" />

          <p className="top">Create your account</p>
          {error !== "" ? <div className="error"> * {error} </div> : ""}

          <div className="form-group">
            <input type="text" name="firstname" placeholder="firstname" id="firstname" onChange={(e) => setTempFirstName(e.target.value)} />
          </div>

          <div className="form-group">
            <input type="text" name="lastname" placeholder="lastname" id="lastname" onChange={(e) => setTempLastName(e.target.value)} />
          </div>

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
            <Link className="links" to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
