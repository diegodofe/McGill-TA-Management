import React from "react";
import "./sidebar.css";
import { HomeOutlined } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HomeOutlined />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
