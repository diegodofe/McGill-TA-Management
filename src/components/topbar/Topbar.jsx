import React from "react";
import "./topbar.css";
import logout from "../../assets/images/icons/logout.png";
import rocket from "../../assets/images/icons/rocket.png";

export default function Topbar({ title })  {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <img className="rocket" src={rocket} alt="rocket" />
        {title} 
        </div>
        <div className="topRight">
          <img className="logout" src={logout} alt="logout" />
        </div>
      </div>
    </div>
  );
}
