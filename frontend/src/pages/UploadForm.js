import React from 'react';
import './uploadform.css';

const UploadForm = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
    //   console.log(${file.name} selected);
    }
  };

  return (
    <div className="form-container">
      <form>
        {[
          "Passport Size photo",
          "Scanned Signature",
          "Father/guardian photo",
          "Mother/guardian Photo",
          "SSC marksheet copy",
          "Domicile Certificate",
          "Income Certificate",
          "Undertaking certificate",
          "Caste Certificate",
          "Aadhar Card",
        ].map((label) => (
          <div className="form-group" key={label}>
            <label>{label}</label>
            <input type="file" onChange={handleFileUpload} />
            <div className="icons">
              <i className="icon-camera" />
              <i className="icon-check" />
            </div>
          </div>
        ))}
      </form>

      <div className="button-container">
        <button className="digilocker-btn">SIGN IN TO DIGILOCKER</button>
        <button className="verification-btn">COMPLETE VIDEO VERIFICATION</button>
        <div className="navigation-buttons">
          <button className="nav-btn">PREVIOUS</button>
          <button className="nav-btn">SAVE</button>
          <button className="nav-btn">NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;