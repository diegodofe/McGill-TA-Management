import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/mcgill_logo.jpg";
import { UserContext } from "../App";

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

    navigate("/dashboard");
  };

  return (
    <div className="welcome">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <img className="logo" src={logo} alt="mcgill-logo" />

          <p className="top">Sign in with your email and password.</p>
          {error !== "" ? <div className="error"> * {error} </div> : ""}

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
            <span className="links">Forget password</span> or{" "}
            <Link className="links" to="/register">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
