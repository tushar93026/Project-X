import React from "react";
import "./register.css";



const steps = [
  { icon: "fas fa-user", label: "Personal Details" },
  { icon: "fas fa-map-marker-alt", label: "Address Details" },
  { icon: "fas fa-rupee-sign", label: "Family & Income Details" },
  { icon: "fas fa-graduation-cap", label: "Education Details" },
  { icon: "fas fa-paperclip", label: "Attachments" },
  { icon: "fas fa-cloud-upload-alt", label: "Submit Application" },
];

function ProgressSteps() {
  return (
    <>
   
   
    <div className="progress-steps-container">
      <div className="progress-bar">
        <span>Overall Progress</span>
      </div>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <i className={step.icon}></i>
            <p>{step.label}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default ProgressSteps;


