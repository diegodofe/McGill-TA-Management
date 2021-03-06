import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/mcgill_logo.jpg";
import { UserContext } from "../App";
import "../style/login.css";

const Login: React.FC = () => {
  // Load global state
  const { user, setUser } = useContext(UserContext);

  // All hooks
  const [tempEmail, setTempEmail] = useState<string>("");
  const [tempPassword, setTempPassword] = useState<string>("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // on submit pass email and password values entered by user
  const submitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // if either email or password is empty show error message
    if (!tempEmail || !tempPassword) {
      // error when user does not enter username and/or password
      console.error("Please provide your username and password.");
      setError("Please provide your username and password.");
      return;
    }

    try {
      // Make login API call
      const res = await fetch(
        "https://winter2022-comp307-group8.cs.mcgill.ca/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: tempEmail,
            password: tempPassword,
          }),
        }
      );

      // If login was successful, set user and redirect to home page
      if (res.status === 200) {
        const resJson = await res.json();

        console.log(resJson);

        // set user state
        setUser(resJson);

        navigate("/dashboard");
        return;
      } else {
        // error unable to login, invalid username or password
        setError("Invalid username or password.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="welcome">
        <form onSubmit={submitHandler}>
          <div className="form-inner">
            <img className="logo" src={logo} alt="mcgill-logo" />

            <p className="top">Sign in with your email and password.</p>
            {error !== "" ? <div className="error"> * {error} </div> : ""}

            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="email"
                id="email"
                onChange={(e) => setTempEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setTempPassword(e.target.value)}
              />
            </div>

            <div className="sign-in-button">
              <input type="submit" value="Sign in" />
            </div>

            <p className="bottom">
              <Link className="links" to="/register">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
