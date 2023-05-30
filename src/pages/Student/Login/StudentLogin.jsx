import React, { useState } from "react";
import Logo from "../../../assets/Caleb.png";
import "../../Login/Login.css";
import "./StudentLogin.css";
import { Link, useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [matricNumber, setMatricNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleMatricNumberChange = (event) => {
    setMatricNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMatricNumber("");
    setPassword("");
    navigate("/student/dashboard");
  };

  return (
    <div className="login">
      <div className="login-body">
        <div className="back">
          <Link to="/" className="back-link">
            {`<`} Back
          </Link>
        </div>
        <img src={Logo} alt="" className="login-logo" />
        <p className="login-head">Login to your account</p>
        <form className="stud-login" onSubmit={handleSubmit}>
          <div className="form-flex">
            <input
              type="text"
              id="matricNumber"
              value={matricNumber}
              onChange={handleMatricNumberChange}
              required
              placeholder="Matric Number"
            />
          </div>
          <div className="form-flex">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
          </div>
          <button className="log-btn" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
