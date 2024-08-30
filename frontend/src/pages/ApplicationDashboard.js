import React from "react";
import "./dashboard.css";
import Sidebar from "../components/Sidebar";
const ApplicationDashboard = () => {
  const applications = [
    {
      sNo: 1,
      applicationId: "JK1253641729",
      academicYear: "2022-23",
      instituteName: "Institute of Engineering and Technology, DAVV, Indore",
      status: "Locked",
    },
    {
      sNo: 2,
      applicationId: "JK14217392193",
      academicYear: "2023-24",
      instituteName: "Institute of Engineering and Technology, DAVV, Indore",
      status: "Unlocked",
    },
  ];

  return (
    <>
    <Sidebar />
    <div className="dashboard-container">
      <h2 className="dashboard-title">PMSSS APPLICATION DASHBOARD</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Application ID</th>
            <th>Academic Year</th>
            <th>Institute Name</th>
            <th>Status</th>
            <th>Lock/Unlock</th>
            <th>Print</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.sNo}>
              <td>{application.sNo}</td>
              <td>{application.applicationId}</td>
              <td>{application.academicYear}</td>
              <td>{application.instituteName}</td>
              <td>{application.status}</td>
              <td>-</td>
              <td>
                <button className="print-button">Print</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ApplicationDashboard;