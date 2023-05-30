import React from "react";
import "../../Dashboard/Dashboard.css";

const Personal = () => {
  return (
    <div className="pers-contain">
      <div className="pers-info">
        <p className="pers-header">Personal Information</p>

        <div className="details">
          <div className="dets-flex">
            <p className="info">Full Name:</p>
            <p className="answer">Falola Olamide David</p>
          </div>
          <div className="dets-flex">
            <p className="info">Matric Number:</p>
            <p className="answer">20/7321</p>
          </div>
          <div className="dets-flex">
            <p className="info">Sex:</p>
            <p className="answer">Male</p>
          </div>
          <div className="dets-flex">
            <p className="info">Level:</p>
            <p className="answer">400</p>
          </div>
          <div className="dets-flex">
            <p className="info">College:</p>
            <p className="answer">COPAS</p>
          </div>
          <div className="dets-flex">
            <p className="info">Department:</p>
            <p className="answer">Computer Science</p>
          </div>
        </div>
      </div>

      <div className="pers-info">
        <p className="pers-header">Medical Information</p>

        <div className="details">
          <div className="dets-flex">
            <p className="info-2">Height:</p>
            <p className="answer">188cm</p>
          </div>
          <div className="dets-flex">
            <p className="info-2">Weight:</p>
            <p className="answer">78kg</p>
          </div>
          <div className="dets-flex">
            <p className="info-2">Genotype:</p>
            <p className="answer">AS</p>
          </div>
          <div className="dets-flex">
            <p className="info-2">Blood Group:</p>
            <p className="answer">O+</p>
          </div>
          <div className="dets-flex">
            <p className="info-2">Allergies:</p>
            <p className="answer">None</p>
          </div>
          <div className="dets-flex">
            <p className="info-2">Past Medical History:</p>
            <p className="answer">None</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
