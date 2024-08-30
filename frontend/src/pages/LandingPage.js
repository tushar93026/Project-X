import React from "react";

import "./landingpage.css";
import photo from "./firstpagephoto.jpeg";
const LandingPage = () => {
  return (
    <div className="container">
      <div className="header">
        <img src={photo} alt="Logo" className="logo" />
      </div>
      <div className="buttons">
        <button
          className="button"
          onClick={() => (window.location.href = "/studentlogin")}
        >
          <i className="fas fa-user-graduate"></i>
          Student
        </button>
        <button
          className="button"
          onClick={() => (window.location.href = "/sagofficerlogin")}
        >
          <i className="fas fa-star"></i>
          SAG
        </button>
        <button
          className="button"
          onClick={() => (window.location.href = "/financelogin")}
        >
          <i className="fas fa-rupee-sign"></i>
          Finance Officer
        </button>
      </div>
    </div>
  );


};

export default LandingPage;