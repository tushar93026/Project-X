import React from 'react';
import './educationform.css';

const EducationForm = () => {
  return (
    <div className="form-container">
      <h3>Higher secondary School(10th - 12th)</h3>
      <form>
        <div className="form-group">
          <label>School Name (as in dropdown) :</label>
          <input type="text" value="Pine Heights Higher Secondary School" readOnly />
        </div>
        <div className="form-group">
          <label>Address :</label>
          <input type="text" value="Civil Lines, Jammu" readOnly />
        </div>
        <div className="form-group">
          <label>Stream :</label>
          <select>
            <option value="science-maths">Science with Maths</option>
            <option value="science-bio">Science with Biology</option>
            <option value="commerce">Commerce</option>
            <option value="arts">Arts</option>
          </select>
        </div>
        <div className="form-group">
          <label>Year of Passing :</label>
          <select>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className="form-group">
          <label>Board Name :</label>
          <input type="text" value="CBSE" readOnly />
        </div>
        <div className="form-group">
          <label>Roll No. :</label>
          <input type="text" value="20235C21" readOnly />
        </div>

        <h3>Senior secondary School(10th - 12th)</h3>
        <div className="form-group">
          <label>Marks System :</label>
          <input type="text" value="Percentage" readOnly />
        </div>
        <div className="form-group">
          <label>Total Marks :</label>
          <input type="text" value="600" readOnly />
        </div>
        <div className="form-group">
          <label>Marks Obtained :</label>
          <input type="text" value="573" readOnly />
        </div>
        <div className="form-group">
          <label>Percentage :</label>
          <input type="text" value="95.6" readOnly />
        </div>
        <div className="form-group">
          <label>Division :</label>
          <input type="text" value="1st" readOnly />
        </div>
        <div className="form-group">
          <label>Grade (as per 10th Marksheet) :</label>
          <input type="text" value="A+" readOnly />
        </div>
        <div className="form-group">
          <label>Grade Point (as per 10th Marksheet) :</label>
          <input type="text" value="9.0 - 10.0" readOnly />
        </div>
        <div className="form-group">
          <label>Roll No. :</label>
          <input type="text" value="20235C21" readOnly />
        </div>

        <div className="button-container">
          <button className="nav-btn">PREVIOUS</button>
          <button className="nav-btn save-btn">SAVE</button>
          <button className="nav-btn next-btn">NEXT</button>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;