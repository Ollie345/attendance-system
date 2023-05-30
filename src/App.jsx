import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import StudentLogin from "./pages/Student/Login/StudentLogin";
import DoctorLogin from "./pages/Doctor/Login/DoctorLogin";
import AdminLogin from "./pages/Admin/Login/AdminLogin";
import Dashboard from "./pages/Student/Dashboard/Dashboard";
import Ambulance from "./pages/Student/Ambulance/Ambulance";
import Profile from "./pages/Student/Profile/Profile";
import Settings from "./pages/Student/Settings/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentLogin />} />
        <Route path="/student/dashboard" element={<Dashboard/>} />
        <Route path="/student/ambulance" element={<Ambulance />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/settings" element={<Settings />} />
        <Route path="/doctor" element={<DoctorLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
