import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user">
        <div className="user-icon">
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="user-info">
          <span className="user-name">Madhav2289</span>
          <span className="user-email">pineapple@email.com</span>
        </div>
      </div>
      <ul className="sidebar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="fas fa-user-plus"></i>
            <Link to={'/register'}><span>Register</span></Link>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="fas fa-id-card"></i>
            <Link to={'/profile'}><span>Profile</span></Link>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="fas fa-th-large"></i>
            <Link to={'/dashboard'}><span>Dashboard</span></Link>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="fas fa-link"></i>
            <Link to={'/applicationstatus'}><span>Application Status</span></Link>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="fas fa-info-circle"></i>
            <Link to={'/helpdesk'}><span>HelpDesk</span></Link>
          </a>
        </li>
      </ul>
      <div className="logout">
        <a href="/" className="logout-link">
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;