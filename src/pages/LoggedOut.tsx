import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/mcgill_logo.jpg";
import "../style/login.css";

const LoggedOut: React.FC = () => {
  return (
    <div className="login">
    <div className="welcome">
      <form>
        <div className="form-inner">
          <img className="logo" src={logo} alt="mcgill-logo" />
          <h2 style={{ marginTop: "40px", marginBottom: "5px" }}>Sign out</h2>
          <p>You have successfully signed out.</p>
          <p className="bottom">
            <Link className="links" to="/login">
              Return to Login
            </Link>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoggedOut;
