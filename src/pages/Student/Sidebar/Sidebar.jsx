import React from "react";
import "./Sidebar.css";
import Logo from "../../../assets/Caleb.png";
import DashboardIcon from "../../../assets/svg/dashboard";
import AmbulanceIcon from "../../../assets/svg/ambulance";
import ProfileIcon from "../../../assets/svg/profile";
import SettingsIcon from "../../../assets/svg/settings";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({state}) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="side-container">
        <img src={Logo} alt="" className="side-logo" />

        <div className="side-links">

          <Link to="/student/dashboard" className={`${state === 1 ? "side-flex active": "side-flex"}`}>
            <DashboardIcon />
            Dashboard
          </Link>

          <Link to="/student/ambulance" className={`${state === 2 ? "side-flex active": "side-flex"}`}>
            <AmbulanceIcon />
            Leave
          </Link>

          <Link to="/student/profile" className={`${state === 3 ? "side-flex active": "side-flex"}`}>
            <ProfileIcon />
            Profile
          </Link>

          <Link to="/student/settings" className={`${state === 4 ? "side-flex active": "side-flex"}`}>
            <SettingsIcon />
            Settings
          </Link>

        </div>

        <button className="logout" onClick={() => navigate("/")}>
          Logout
        </button>

      </div>
    </div>
  );
};

export default Sidebar;
