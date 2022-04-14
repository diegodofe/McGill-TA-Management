import React from "react";
import "./sidebar.css";
import { HomeOutlined, GroupOutlined, ClassOutlined } from "@mui/icons-material";
import logo from "../../assets/images/mcgill_logo_transp.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <img className="logo" src={logo} alt="logo" />

          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HomeOutlined />
              Home
            </li>
            <li className="sidebarListItem">
              {/* only for professors and TAs */}
              <GroupOutlined />
              TA Management
            </li>
            <li className="sidebarListItem">
              {/* only for sysop */}
              <GroupOutlined />
              Users
            </li>
            <li className="sidebarListItem">
              {/* only for sysop */}
              <ClassOutlined />
              Courses
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
