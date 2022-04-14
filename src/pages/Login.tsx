import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/mcgill_logo.jpg";
import "../App.css";
import { UserContext } from "../App";
import { User } from "../classes/userType";

function Login() {
  // Load global state
  const state = useContext(UserContext);

  // just for example input
  const [tempEmail, setTempEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  let navigate = useNavigate();

  const { user, setUser } = state;

  // on submit pass email and password values entered by user
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if either email or password is empty show error message
    if (!tempEmail || !tempPassword) {
      /**
       * @TODO Maddi: put in fancy error handling to say that the user needs to provide email and password
       */
      // Get rid of this alert when done
      alert("Please enter email and password");
      return;
    }

    try {
      // Make login API call
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: tempEmail,
          password: tempPassword,
        }),
      });

      // If login was successful, set user and redirect to home page
      if (res.status === 200) {
        const resJson = await res.json();

        // @TODO set user in global state
        console.log(resJson);

        var user = new User(res.json);

        // set user state
        setUser(user);

        console.log("User");
        console.log(user);

        navigate("/dashboard");
        return;
      } else {
        // Throw error message
        console.error("Unable to login");
        /**
         * @TODO Maddi: put in fancy error handling to say that the user needs to provide email and password
         */

        alert("Unable to login");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to login caught error");
    }
  };

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
