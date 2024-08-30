import React, { useState } from "react";
import "./profiledetails.css";
const ProfileDetails = () => {
  const [candidateId, setCandidateId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isDomicile, setIsDomicile] = useState(false);
  const [aadharNo, setAadharNo] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [isBankSeeded, setIsBankSeeded] = useState(false);
  const [casteCategory, setCasteCategory] = useState("");
  const [subCasteCategory, setSubCasteCategory] = useState("");
  const [isPhysicallyDisabled, setIsPhysicallyDisabled] = useState(false);
  const [mobileNo, setMobileNo] = useState("");
  const [alternateMobileNo, setAlternateMobileNo] = useState("");
  const [landlineNumber, setLandlineNumber] = useState("");
  const [email, setEmail] = useState("");
  const [alternateEmail, setAlternateEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", {
      candidateId,
      name,
      gender,
      dateOfBirth,
      isDomicile,
      aadharNo,
      panNumber,
      isBankSeeded,
      casteCategory,
      subCasteCategory,
      isPhysicallyDisabled,
      mobileNo,
      alternateMobileNo,
      landlineNumber,
      email,
      alternateEmail,
    });
  };

  return (
    <div className="profile-section">
      <h2>Basic Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="candidateId">Candidate ID:</label>
          <input
            type="text"
            id="candidateId"
            value={candidateId}
            onChange={(e) => setCandidateId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth (DD-MM-YYYY):</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isDomicile">Is Domicile J&K or Ladakh:</label>
          <input
            type="checkbox"
            id="isDomicile"
            checked={isDomicile}
            onChange={(e) => setIsDomicile(e.target.checked)}
          />
          <label htmlFor="isDomicile">Yes</label>
          <input
            type="checkbox"
            id="isDomicile"
            checked={!isDomicile}
            onChange={(e) => setIsDomicile(!e.target.checked)}
          />
          <label htmlFor="isDomicile">No</label>
        </div>
        <h2>UID (AADHAR) DETAILS</h2>
        <div className="form-group">
          <label htmlFor="aadharNo">UID (AADHAR) No.:</label>
          <input
            type="text"
            id="aadharNo"
            value={aadharNo}
            onChange={(e) => setAadharNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="panNumber">PAN Number:</label>
          <input
            type="text"
            id="panNumber"
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isBankSeeded">
            Is Your Bank Account seeded with Aadhar Number?:
          </label>
          <input
            type="checkbox"
            id="isBankSeeded"
            checked={isBankSeeded}
            onChange={(e) => setIsBankSeeded(e.target.checked)}
          />
          <label htmlFor="isBankSeeded">Yes</label>
          <input
            type="checkbox"
            id="isBankSeeded"
            checked={!isBankSeeded}
            onChange={(e) => setIsBankSeeded(!e.target.checked)}
          />
          <label htmlFor="isBankSeeded">No</label>
        </div>
        <h2>Other Details</h2>
        <div className="form-group">
          <label htmlFor="casteCategory">Caste Category:</label>
          <select
            id="casteCategory"
            value={casteCategory}
            onChange={(e) => setCasteCategory(e.target.value)}
          >
            <option value="">Select Caste Category</option>
            {/* Add options for caste categories */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subCasteCategory">Sub-Caste Category:</label>
          <input
            type="text"
            id="subCasteCategory"
            value={subCasteCategory}
            onChange={(e) => setSubCasteCategory(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isPhysicallyDisabled">Physically Disabled:</label>
          <input
            type="checkbox"
            id="isPhysicallyDisabled"
            checked={isPhysicallyDisabled}
            onChange={(e) => setIsPhysicallyDisabled(e.target.checked)}
          />
          <label htmlFor="isPhysicallyDisabled">Yes</label>
          <input
            type="checkbox"
            id="isPhysicallyDisabled"
            checked={!isPhysicallyDisabled}
            onChange={(e) => setIsPhysicallyDisabled(!e.target.checked)}
          />
          <label htmlFor="isPhysicallyDisabled">No</label>
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo">Mobile No.:</label>
          <input
            type="text"
            id="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="alternateMobileNo">Alternate Mobile No.:</label>
          <input
            type="text"
            id="alternateMobileNo"
            value={alternateMobileNo}
            onChange={(e) => setAlternateMobileNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="landlineNumber">Landline Number:</label>
          <input
            type="text"
            id="landlineNumber"
            value={landlineNumber}
            onChange={(e) => setLandlineNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="alternateEmail">Alternate E-mail:</label>
          <input
            type="email"
            id="alternateEmail"
            value={alternateEmail}
            onChange={(e) => setAlternateEmail(e.target.value)}
          />
        </div>
        <button type="submit">SAVE</button>
        <button type="button">NEXT</button>
      </form>
    </div>
  );
};

export default ProfileDetails;