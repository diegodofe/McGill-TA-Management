import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/mcgill_logo.jpg";
import "../App.css";
import { UserContext } from "../App";
import { emptyUser } from "../classes/User";

function Register() {
  // Load global state
  const { user, setUser } = useContext(UserContext);

  // All hooks
  const [tempEmail, setTempEmail] = useState<string>("");
  const [tempFirstName, setTempFirstName] = useState<string>("");
  const [tempLastName, setTempLastName] = useState<string>("");
  const [tempPassword, setTempPassword] = useState<string>("");
  const [tempStudentID, setTempStudentID] = useState<string>("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const submitHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    /**
     * @TODO if valid, send new user information to server, and create user global state
     */

    try {
      // Make register API call
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: tempEmail,
          password: tempPassword,
          firstName: tempFirstName,
          lastName: tempLastName,
          studentID: tempStudentID,
        }),
      })

      console.log(res)

      // If register was successful, set user and redirect to home page
      if (res.status === 200) {
        const resJson = await res.json();

        setUser({
          ...user,
          email: tempEmail,
          firstName: tempFirstName,
          lastName: tempLastName
        });


        console.log(resJson)

        // set user state
        // setUser(newUser);
        navigate("/dashboard");
      }
      else {
        alert("Error registering user");
      }
    } catch (e) {
      console.error(e);
      alert("Error registering user");
    }
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
            <input type="text" name="email" placeholder="student ID" id="student ID" onChange={(e) => setTempStudentID(e.target.value)} />
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
