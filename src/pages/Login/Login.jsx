import React from "react";
import Logo from "../../assets/Caleb.png";
import "./Login.css";
import AdminIcon from "../../assets/svg/admin";
import StudentIcon from "../../assets/svg/stud";
import DoctorIcon from "../../assets/svg/doctor";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login-body">
        <img src={Logo} alt="" className="login-logo" />
        <p className="login-head">Caleb University Employee Management System</p>
        <p className="login-sub">Click on your module to access your portal</p>
        <div className="login-card">
          <Link to="/student" className="login-button">
            <StudentIcon />
            Employee
          </Link>
          <Link to="/doctor" className="login-button">
            <DoctorIcon />
            HR Personnel
          </Link>
          <Link to="/admin" className="login-button">
            <AdminIcon />
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
