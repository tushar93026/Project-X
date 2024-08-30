import React from "react";
import "./status.css";
import Sidebar from "../components/Sidebar";

const Status = () => {
  return (
    <>
    <Sidebar />
    <div className="container">
      <div className="step">
        <div className="circle red"></div>
        <div className="text">APPLICATION REGISTRATION</div>
      </div>
      <div className="step">
        <div className="circle orange"></div>
        <div className="text">DOCUMENTS SUBMISSION</div>
      </div>
      <div className="step">
        <div className="circle red"></div>
        <div className="text">DOCUMENT REJECTED</div>
      </div>
      <div className="step">
        <div className="circle yellow"></div>
        <div className="text">APPLICATION FORWARDED TO SAG BUREAU</div>
      </div>
      <div className="step">
        <div className="circle green"></div>
        <div className="text">APPLICATION VERIFIED BY SAG BUREAU</div>
      </div>
      <div className="step">
        <div className="circle green"></div>
        <div className="text">APPLICATION FORWARDED TO FINANCE BUREAU</div>
      </div>
      <div className="step">
        <div className="circle green"></div>
        <div className="text">APPLICATION VERIFIED BY FINANCE BUREAU</div>
      </div>
      <div className="step">
        <div className="circle green"></div>
        <div className="text">DISBURSEMENT OF AMOUNT</div>
      </div>
    </div>
    </>
  );
};

export default Status;