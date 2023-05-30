import React from "react";
import "../../Dashboard/Dashboard.css";

const Medical = () => {
  return (
    <div className="medical-record">
      <p className="pers-header">Medical Records</p>

      <div className="medical-table">
        <div className="medical-head">
          <p className="med-head">Date</p>
          <p className="med-head">Description</p>
          <p className="med-head">Prescription</p>
          <p className="med-head">Status</p>
        </div>

        <div className="medical-head">
          <p className="med-text">25/5/2023</p>
          <p className="med-text">Headache, Heart burn and fever</p>
          <p className="med-text">Drugs</p>
          <p className="med-active">Completed</p>
        </div>

        <div className="medical-head">
          <p className="med-text">22/5/2023</p>
          <p className="med-text">Headache, Heart burn and fever</p>
          <p className="med-text">Drugs</p>
          <p className="med-active">Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Medical;
