import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/mcgill_logo.jpg";
import "../style/login.css";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="welcome">
        <form>
          <div className="form-inner">
            <img className="logo" src={logo} alt="mcgill-logo" />
            <h2 style={{ marginTop: "40px", marginBottom: "5px" }}>404</h2>
            <p>Can't find the page you are looking for.</p>
            <p className="bottom">
              <Link className="links" onClick={() => navigate(-1)} to={""}>
                Go Back
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotFound;
