import React, { useState } from "react";
import DashboardLayout from "../DashLayout/DashboardLayout";
import "./Profile.css";
import Personal from "./Personal/Personal";
import Medical from "./Medical/Medical";

const Profile = () => {
  const [profile, setProfile] = useState(true);
  return (
    <DashboardLayout state={3}>
      <div className="profile-body">
        <div className="profile-nav">
          <div
            className={`nav-${profile ? "active" : "inactive"}`}
            onClick={() => setProfile(true)}
          >
            User Information
          </div>
          <div
            className={`nav-${profile ? "inactive" : "active"}`}
            onClick={() => setProfile(false)}
          >
            Medical Records
          </div>
        </div>

        {profile ? <Personal /> : <Medical />}
      </div>
    </DashboardLayout>
  );
};

export default Profile;
