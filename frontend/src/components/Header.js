import React from "react";
import "./header.css";

// import Sidebar from "./slidebar";
function Header() {
  return (
    <div className="header-container">
      {/* Top Bar with Date and Text Controls */}
      <div className="top-bar">
        <div className="date-time">27 Oct 2023 | Fri | 04:36:21 PM</div>
        <div className="text-controls">
          <span>Text Size |</span>
          <span>Language |</span>
          <span>Text Size - A + |</span>
          <span>हिन्दी में</span>
        </div>
      </div>

      {/* Logo and Title Section */}
      <div className="logo-title-section">
        <div className="logo-container">
          <img
            src="https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2021/07/AICTE-Logo-250x250-1.png?ssl=1"
            alt="AICTE Logo"
            className="aicte-logo"
          />
        </div>
        <div className="title-container">
          <h1>AICTE</h1>
          <p>Jammu And Kashmir</p>
        </div>
      </div>
    </div>
  );
}

export default Header;