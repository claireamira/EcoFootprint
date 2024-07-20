import React from "react";
import logo from '../assets/leaflogo.jfif'


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#009432" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontSize: 30, color: "#FFFFFF" }}>
            <img src= {logo} alt="leaves logo" style={{ height: 30, marginRight: 10 }} />
            EcoFootPrint
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ fontSize: 15, color: "#FFFFFF" }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: 15, color: "#FFFFFF" }}>
                 Calculator
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: 15, color: "#FFFFFF" }}>
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" style={{ fontSize: 15, color: "#C8E6C9" }}>
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;