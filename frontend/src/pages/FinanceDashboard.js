import React, { useState } from "react";

function App() {
  const [selectedSemester, setSelectedSemester] = useState(null);

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <img src="/sncte-logo.png" alt="SNCTE Logo" />
        <h1>All India Council for Technical Education</h1>
        <h2>अखिल भारतीय तकनीकी शिक्षा परिषद परिषद</h2>
      </div>
      <div className="user-info">
        <div className="user-icon">
          <span className="material-icons">person</span>
        </div>
        <div className="user-details">
          <p>PRN8910048</p>
          <button className="logout-button">Logout</button>
        </div>
      </div>
      <div className="statistics">
        <div className="statistic">
          <p>67899</p>
          <p>Applications</p>
        </div>
        <div className="statistic">
          <p>43627</p>
          <p>Applications Recommended for sanction</p>
        </div>
        <div className="statistic">
          <p>5463</p>
          <p>Applications Pending with institutes</p>
        </div>
        <div className="statistic">
          <p>100777</p>
          <p>Amount Sanctioned</p>
        </div>
        <div className="statistic">
          <p>8499</p>
          <p>Applications Pending at DTE for e-payment order</p>
        </div>
        <div className="statistic">
          <p>8670</p>
          <p>E-Transactions count</p>
        </div>
      </div>
      <div className="filters">
        <div className="filter">
          <label htmlFor="sort-by">Sort by</label>
          <select id="sort-by">
            <option value="">Select</option>
            <option value="state">State</option>
            <option value="college">College</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="state">State</label>
          <select id="state">
            <option value="">Select</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="college">College</label>
          <select id="college">
            <option value="">Select</option>
            <option value="college1">College 1</option>
            <option value="college2">College 2</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="semester">Semester</label>
          <div className="semester-options">
            <label htmlFor="semester-1">
              <input
                type="radio"
                id="semester-1"
                value="1"
                checked={selectedSemester === "1"}
                onChange={handleSemesterChange}
              />
              1
            </label>
            <label htmlFor="semester-2">
              <input
                type="radio"
                id="semester-2"
                value="2"
                checked={selectedSemester === "2"}
                onChange={handleSemesterChange}
              />
              2
            </label>
            <label htmlFor="semester-3">
              <input
                type="radio"
                id="semester-3"
                value="3"
                checked={selectedSemester === "3"}
                onChange={handleSemesterChange}
              />
              3
            </label>
            <label htmlFor="semester-4">
              <input
                type="radio"
                id="semester-4"
                value="4"
                checked={selectedSemester === "4"}
                onChange={handleSemesterChange}
              />
              4
            </label>
            <label htmlFor="semester-5">
              <input
                type="radio"
                id="semester-5"
                value="5"
                checked={selectedSemester === "5"}
                onChange={handleSemesterChange}
              />
              5
            </label>
            <label htmlFor="semester-6">
              <input
                type="radio"
                id="semester-6"
                value="6"
                checked={selectedSemester === "6"}
                onChange={handleSemesterChange}
              />
              6
            </label>
            <label htmlFor="semester-7">
              <input
                type="radio"
                id="semester-7"
                value="7"
                checked={selectedSemester === "7"}
                onChange={handleSemesterChange}
              />
              7
            </label>
            <label htmlFor="semester-8">
              <input
                type="radio"
                id="semester-8"
                value="8"
                checked={selectedSemester === "8"}
                onChange={handleSemesterChange}
              />
              8
            </label>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Account Number as per bank</th>
              <th>Institute No.</th>
              <th>PFMS Transaction Id</th>
              <th>Voucher No.</th>
              <th>Amount</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>1288321188987</td>
              <td>M0167</td>
              <td>1288321188987</td>
              <td>UTR3461</td>
              <td>45452</td>
              <td>NOT DONE</td>
            </tr>
            <tr>
              <td>02</td>
              <td>13245268761125</td>
              <td>M0167</td>
              <td>1288321188987</td>
              <td>RNU8 199</td>
              <td>56875</td>
              <td>NOT DONE</td>
            </tr>
            <tr>
              <td>03</td>
              <td>12323324567 261</td>
              <td>M0167</td>
              <td>1288321188987</td>
              <td>TRI2435</td>
              <td>54665</td>
              <td>NOT DONE</td>
            </tr>
            <tr>
              <td>04</td>
              <td>1234232567918</td>
              <td>M0167</td>
              <td>123829088987</td>
              <td>TY18769 -</td>
              <td>45673</td>
              <td>NOT DONE</td>
            </tr>
            <tr>
              <td>05</td>
              <td>12454675512 323</td>
              <td>M0167</td>
              <td>1288321188987</td>
              <td>WER2134</td>
              <td>45565</td>
              <td>NOT DONE</td>
            </tr>
            <tr>
              <td>06</td>
              <td>77823168912149</td>
              <td>M0167</td>
              <td>1288321188987</td>
              <td>PTH8263</td>
              <td>45674</td>
              <td>NOT DONE</td>
            </tr>
            <tr>
              <td>07</td>
              <td>77823168912149</td>
              <td>M0167</td>
              <td>1288321188987</td>
              <td>PTH8263 Third year</td>
              <td>54555</td>
              <td>NOT DONE</td>
            </tr>
          </tbody>
        </table>
        <button className="process-button">Process Payment for this Batch</button>
      </div>
    </div>
  );
}

export default App;