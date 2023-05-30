import React, { useState } from "react";
import Logo from "../../../assets/Caleb.png";
import "../../Login/Login.css";
import "../../Student/Login/StudentLogin.css";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
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
        <p className="login-head">Admin Login</p>
        <form className="stud-login" onSubmit={handleSubmit}>
          <div className="form-flex">
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsername}
              required
              placeholder="Username"
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
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
