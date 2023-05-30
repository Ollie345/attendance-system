import React, { useState } from "react";
import DashboardLayout from "../DashLayout/DashboardLayout";
import "../Profile/Profile.css";
import Preset from "./Subpages/Preset";
import Medset from "./Subpages/Medset";
import Accset from "./Subpages/Accset";

const Settings = () => {
  const [profile, setProfile] = useState(1);
  return (
    <DashboardLayout state={4}>
      <div className="profile-body">
        <div className="profile-nav">
          <div
            className={`nav-${profile === 1 ? "active" : "inactive"}`}
            onClick={() => setProfile(1)}
          >
            Personal Information
          </div>
          <div
            className={`nav-${profile === 2 ? "active" : "inactive"}`}
            onClick={() => setProfile(2)}
          >
            Medical Information
          </div>
          <div
            className={`nav-${profile === 3 ? "active" : "inactive"}`}
            onClick={() => setProfile(3)}
          >
            Account Information
          </div>
        </div>

        {profile === 1 ? <Preset /> : profile === 2 ? <Medset /> : <Accset />}
      </div>
    </DashboardLayout>
  );
};

export default Settings;
