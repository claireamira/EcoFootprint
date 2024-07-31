import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import img1 from '../assets/image1.png';
import howItWorksImg1 from '../assets/myimage2.jfif';
import howItWorksImg2 from '../assets/myimage3.png';
import howItWorksImg3 from '../assets/myimage4.png';
import tea from '../assets/tea.jpg';

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div id="homePage" style={{ backgroundColor: "white"}}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: "100%", margin: "0px" }}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={tea} className="d-block w-100" alt="Slide 1" style={{ height: "300px", objectFit: "cover" }} />
            </div>
            <div className="carousel-item">
              <img src={tea} className="d-block w-100" alt="Slide 2" style={{ height: "300px", objectFit: "cover" }} />
            </div>
            <div className="carousel-item">
              <img src={tea} className="d-block w-100" alt="Slide 3" style={{ height: "300px", objectFit: "cover" }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div style={{ maxWidth: "90%", margin: "20px auto", textAlign: "center", color: "#4CAF50" }}>
          <h1 className="display-4">Welcome to EcoFootPrint</h1>
          <p className="lead" style={{ color: "#555" }}>
            EcoFootPrint is a comprehensive environmental impact calculator that helps you measure your carbon footprint across various sectors, including transportation, food & beverage, and waste management. By using EcoFootPrint, you can gain insights into your daily activities' environmental impact and take actionable steps towards reducing your carbon footprint. Join us in making a positive impact on our planet.
          </p>

        </div>

        <div className="how-it-works" style={{ maxWidth: "90%", margin: "20px auto", textAlign: "center" }}>
          <h2 style={{ color: "#4CAF50", textDecoration: "none", fontSize: "50px" }}>How It Works</h2>
          <div className="row">
            <div className="col-md-4">
              <img src={howItWorksImg1} alt="Step 1" style={{ width: "200px", height: "200px", objectFit: "cover" }} />
              <p style={{ marginTop: "15px", fontSize: "20px", fontFamily: "Playfair Display" }}>Calculate Carbon Footprint</p>
            </div>
            <div className="col-md-4">
              <img src={howItWorksImg2} alt="Step 2" style={{ width: "200px", height: "200px", objectFit: "cover" }} />
              <p style={{ marginTop: "15px", fontSize: "20px", fontFamily: "Playfair Display" }}>Get Your Carbon Footprint</p>
            </div>
            <div className="col-md-4">
              <img src={howItWorksImg3} alt="Step 3" style={{ width: "200px", height: "200px", objectFit: "cover" }} />
              <p style={{ marginTop: "15px", fontSize: "20px", fontFamily: "Playfair Display" }}>Reduce Your Carbon Footprint</p>
            </div>
            <div style={{ maxWidth: "90%", margin: "20px auto", textAlign: "center", color: "#4CAF50" }} >
              <button className="btn btn-success" style={{ fontSize: "20px", backgroundColor: "#009432" }}>
                <Link to='/calculator' style={{ textDecoration: 'none', color: 'white' }}>Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
