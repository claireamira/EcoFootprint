import React from "react";
import logo from '../assets/leaflogo.jfif';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#009432", fontFamily: "Playfair Display" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontSize: 35, color: "#FFFFFF" }}>
            <img src={logo} alt="leaves logo" style={{ height: 30, marginRight: 10 }} />
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ fontSize: 20, color: "#FFFFFF" }}>
                  <Link to='/' style={{ color: "white", textDecoration: "none" }}>
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: 20, color: "#FFFFFF" }}>
                  <Link to='/calculator' style={{ color: "white", textDecoration: "none" }}>
                    Calculator
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: 20, color: "#FFFFFF" }}>
                  <Link to='/resources' style={{ color: "white", textDecoration: "none" }}>
                    Resources
                  </Link>
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
