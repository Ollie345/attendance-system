import React from "react";
import DashboardLayout from "../DashLayout/DashboardLayout";
import { useState } from "react";
import "./Ambulance.css";

const Ambulance = () => {
  const [menu, setMenu] = useState(0);
  const [location, setLocation] = useState("");
  const handleClick = () => {
    setMenu(0);
    setLocation("");
  };

  return (
    <DashboardLayout state={2}>
      <div className="amb-dash">
        <p className="amb-head">Request Ambulance</p>

        {menu !== 0 ? (
          <div className="back">
            <div onClick={handleClick} className="back-link">
              {`<`} Back
            </div>
          </div>
        ) : null}

        {menu === 0 ? (
          <div className="grid-2">
            <div onClick={() => setMenu(1)} className="amb-card">
              Girl's <br />
              Hostel
            </div>
            <div onClick={() => setMenu(2)} className="amb-card">
              Boy's <br />
              Hostel
            </div>
            <div onClick={() => setMenu(3)} className="amb-card">
              Educational <br />
              Buildings
            </div>
            <div onClick={() => setMenu(4)} className="amb-card">
              General <br />
              Environment
            </div>
          </div>
        ) : null}

        {menu === 1 ? (
          <div className="grid-3">
            <div
              onClick={() => setLocation("Mary")}
              className={`${location === "Mary" ? "selected" : "amb-card"}`}
            >
              Mary <br />
              Hall
            </div>
            <div
              onClick={() => setLocation("Susanna")}
              className={`${location === "Susanna" ? "selected" : "amb-card"}`}
            >
              Susanna <br />
              Hall
            </div>
            <div
              onClick={() => setLocation("Deborah")}
              className={`${location === "Deborah" ? "selected" : "amb-card"}`}
            >
              Deborah <br />
              Hall
            </div>
            <div
              onClick={() => setLocation("Rebecca")}
              className={`${location === "Rebecca" ? "selected" : "amb-card"}`}
            >
              Rebecca <br />
              Hall
            </div>
            <div
              onClick={() => setLocation("Mercy")}
              className={`${location === "Mercy" ? "selected" : "amb-card"}`}
            >
              Mercy <br />
              Hall
            </div>
          </div>
        ) : null}

        {menu === 2 ? (
          <div className="grid-2">
            <div
              onClick={() => setLocation("Joseph")}
              className={`${location === "Joseph" ? "selected" : "amb-card"}`}
            >
              Joseph <br />
              Hall
            </div>
            <div
              onClick={() => setLocation("Elisha")}
              className={`${location === "Elisha" ? "selected" : "amb-card"}`}
            >
              Elisha <br />
              Hall
            </div>
            <div
              onClick={() => setLocation("Joshua")}
              className={`${location === "Joshua" ? "selected" : "amb-card"}`}
            >
              Joshua <br />
              Hall
            </div>
            <div
              onClick={() => setLocation("Integrity")}
              className={`${
                location === "Integrity" ? "selected" : "amb-card"
              }`}
            >
              Integrity <br />
              Hall
            </div>
          </div>
        ) : null}

        {menu === 3 ? (
          <div className="grid-3">
            <div
              onClick={() => setLocation("Admin")}
              className={`${location === "Admin" ? "selected" : "amb-card"}`}
            >
              Administrative <br />
              Building
            </div>
            <div
              onClick={() => setLocation("Copas")}
              className={`${location === "Copas" ? "selected" : "amb-card"}`}
            >
              COPAS <br />
              Building
            </div>
            <div
              onClick={() => setLocation("Masscom")}
              className={`${location === "Masscom" ? "selected" : "amb-card"}`}
            >
              Masscom <br />
              Building
            </div>
            <div
              onClick={() => setLocation("Archi")}
              className={`${location === "Archi" ? "selected" : "amb-card"}`}
            >
              Architecture <br />
              Building
            </div>
            <div
              onClick={() => setLocation("Psychology")}
              className={`${
                location === "Psychology" ? "selected" : "amb-card"
              }`}
            >
              Psychology <br />
              Building
            </div>
            <div
              onClick={() => setLocation("Jupeb")}
              className={`${location === "Jupeb" ? "selected" : "amb-card"}`}
            >
              Jupeb <br />
              Building
            </div>
          </div>
        ) : null}

        {menu === 4 ? (
          <div className="grid-3">
            <div
              onClick={() => setLocation("Library")}
              className={`${location === "Library" ? "selected" : "amb-card"}`}
            >
              School <br />
              Library
            </div>
            <div
              onClick={() => setLocation("Multipurpose")}
              className={`${
                location === "Multipurpose" ? "selected" : "amb-card"
              }`}
            >
              Multipurpose
              <br />
              Hall
            </div>
            <div
              onClick={() => setLocation("Caf")}
              className={`${location === "Caf" ? "selected" : "amb-card"}`}
            >
              Cafeteria <br />
              Building
            </div>
            <div
              onClick={() => setLocation("Field")}
              className={`${location === "Field" ? "selected" : "amb-card"}`}
            >
              School <br />
              Field
            </div>
            <div
              onClick={() => setLocation("Trybe")}
              className={`${location === "Trybe" ? "selected" : "amb-card"}`}
            >
              TrybeOne <br />
              Building
            </div>
            <div
              onClick={() => setLocation("Factory")}
              className={`${location === "Factory" ? "selected" : "amb-card"}`}
            >
              School <br />
              Factory
            </div>
          </div>
        ) : null}

        {menu !== 0 ? (
          <div className="amb-button">
            <button
              disabled={`${location === "" ? "disable" : ""}`}
              onClick={() => alert(location)}
              className={`${location === "" ? "inactive": "amb-btn"}`}
            >
              Request
            </button>
          </div>
        ) : null}
      </div>
    </DashboardLayout>
  );
};

export default Ambulance;
