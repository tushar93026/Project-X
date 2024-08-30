import React, { useState } from "react";

function Dashboard() {
  const [applications, setApplications] = useState([
    {
      id: "JK22035678913",
      instituteCode: "M0167",
      instituteName:
        "Institute of Engineering and Technology, DAVV, Indore",
      courseYear: "First year",
      status: "NEW",
      verify: "OPEN",
    },
    {
      id: "JK22089078971",
      instituteCode: "W2091",
      instituteName: "Narula Institure of Technology, Kolkata",
      courseYear: "Third year",
      status: "RECHECK",
      verify: "OPEN",
    },
    {
      id: "JK2203690113",
      instituteCode: "M3196",
      instituteName: "Samrat Ashok Technological Institute, Vidisha",
      courseYear: "Third year",
      status: "NEW",
      verify: "OPEN",
    },
    {
      id: "JK2203771909",
      instituteCode: "P0156",
      instituteName: "Guru Ram Dass College, Punjab",
      courseYear: "First year",
      status: "NEW",
      verify: "OPEN",
    },
    {
      id: "JK2203781913",
      instituteCode: "M0167",
      instituteName:
        "Institute of Engineering and Technology, DAVV, Indore",
      courseYear: "Second year",
      status: "RECHECK",
      verify: "OPEN",
    },
    {
      id: "JK2208907091",
      instituteCode: "M2091",
      instituteName: "Narula Institure of Technology, Kolkata",
      courseYear: "Third year",
      status: "RECHECK",
      verify: "OPEN",
    },
    {
      id: "JK2203690981",
      instituteCode: "D1780",
      instituteName: "Samrat Ashok Technological Institute, Vidisha",
      courseYear: "Third year",
      status: "NEW",
      verify: "OPEN",
    },
  ]);

  const [sortBy, setSortBy] = useState(null);
  const [state, setState] = useState(null);
  const [college, setCollege] = useState(null);
  const [semester, setSemester] = useState(null);

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCollegeChange = (event) => {
    setCollege(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const filteredApplications = applications.filter((application) => {
    if (state && application.state !== state) {
      return false;
    }
    if (college && application.college !== college) {
      return false;
    }
    if (semester && application.semester !== semester) {
      return false;
    }
    return true;
  });

  const sortedApplications = sortBy
    ? [...filteredApplications].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
        return 0;
      })
    : filteredApplications;

  return (
    <div className="container">
      <div className="sidebar">
        <div className="filter-section">
          <label htmlFor="sort-by">Sort by:</label>
          <select id="sort-by" value={sortBy} onChange={handleSortByChange}>
            <option value={null}>None</option>
            <option value="id">Application ID</option>
            <option value="instituteCode">Institute Code</option>
            <option value="instituteName">Institute Name</option>
            <option value="courseYear">Course Year</option>
            <option value="status">Status</option>
            <option value="verify">Verify</option>
          </select>
        </div>
        <div className="filter-section">
          <label htmlFor="state">State:</label>
          <select id="state" value={state} onChange={handleStateChange}>
            <option value={null}>All</option>
            {/* Add options for different states */}
          </select>
        </div>
        <div className="filter-section">
          <label htmlFor="college">College:</label>
          <select id="college" value={college} onChange={handleCollegeChange}>
            <option value={null}>All</option>
            {/* Add options for different colleges */}
          </select>
        </div>
        <div className="filter-section">
          <label htmlFor="semester">Semester:</label>
          <select
            id="semester"
            value={semester}
            onChange={handleSemesterChange}
          >
            <option value={null}>All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Application ID</th>
              <th>Institute Code</th>
              <th>Institute Name</th>
              <th>Course Year</th>
              <th>Status</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            {sortedApplications.map((application, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{application.id}</td>
                <td>{application.instituteCode}</td>
                <td>{application.instituteName}</td>
                <td>{application.courseYear}</td>
                <td>{application.status}</td>
                <td>{application.verify}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;