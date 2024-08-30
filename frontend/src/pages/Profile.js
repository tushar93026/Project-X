import React from "react";
import "./profile.css";
import Sidebar from "../components/Sidebar";

const Profile = () => {

  return (
    <>
    <Sidebar />
    <div className="container">
        
      <div className="header">
        <div className="title">Details Of Allotment</div>
      </div>
      <div className="details">
        <div className="left">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td></td>
              </tr>
              <tr>
                <th>Gender</th>
                <td></td>
              </tr>
              <tr>
                <th>Merit Rank</th>
                <td></td>
              </tr>
              <tr>
                <th>Mode of Admission</th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="right">
          <table>
            <tbody>
              <tr>
                <th>Father Name</th>
                <td></td>
              </tr>
              <tr>
                <th>Caste</th>
                <td></td>
              </tr>
              <tr>
                <th>Application Status</th>
                <td></td>
              </tr>
              <tr>
                <th>Grievance Centre</th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="header">
        <div className="title">Merit Rank Details</div>
      </div>
      <div className="details">
        <div className="left">
          <table>
            <tbody>
              <tr>
                <th>Overall Merit Rank</th>
                <td></td>
              </tr>
              <tr>
                <th>Application Status</th>
                <td></td>
              </tr>
              <tr>
                <th>Category Merit Rank</th>
                <td></td>
              </tr>
              <tr>
                <th>DBT Application Status</th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;