import React, { useState } from 'react';
import './addressform.css';

const AddressForm = () => {
  const [sameAsPermanent, setSameAsPermanent] = useState(true);

  const handleCheckboxChange = (event) => {
    setSameAsPermanent(event.target.value === 'yes');
  };

  return (
    <div className="form-container">
      <form>
        <div className="address-section">
          <h3>Permanent Residential Address</h3>
          <div className="form-group">
            <label>House No. :</label>
            <input type="text" value="C-43" readOnly />
          </div>
          <div className="form-group">
            <label>Street :</label>
            <input type="text" value="Patel Nagar" readOnly />
          </div>
          <div className="form-group">
            <label>Village/Tehsil/Block :</label>
            <input type="text" value="Jammu" readOnly />
          </div>
          <div className="form-group">
            <label>Address :</label>
            <input type="text" value="" readOnly />
          </div>
          <div className="form-group">
            <label>UT :</label>
            <select>
              <option value="jammu-kashmir">Jammu & Kashmir</option>
              <option value="ladakh">Ladakh</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>
          <div className="form-group">
            <label>District :</label>
            <input type="text" value="Jammu" readOnly />
          </div>
          <div className="form-group">
            <label>City :</label>
            <input type="text" value="Jammu" readOnly />
          </div>
          <div className="form-group">
            <label>Pincode :</label>
            <input type="text" value="180001" readOnly />
          </div>
        </div>

        <div className="address-section">
          <h3>Current Residential Address</h3>
          <div className="form-group same-address">
            <label>Same as Permanent Address :</label>
            <input
              type="radio"
              name="sameAddress"
              value="yes"
              checked={sameAsPermanent}
              onChange={handleCheckboxChange}
            /> Yes
            <input
              type="radio"
              name="sameAddress"
              value="no"
              checked={!sameAsPermanent}
              onChange={handleCheckboxChange}
            /> No
          </div>
          <div className="form-group">
            <label>House No. :</label>
            <input type="text" value="C-43" readOnly={sameAsPermanent} />
          </div>
          <div className="form-group">
            <label>Street :</label>
            <input type="text" value="Patel Nagar" readOnly={sameAsPermanent} />
          </div>
          <div className="form-group">
            <label>Village/Tehsil/Block :</label>
            <input type="text" value="Jammu" readOnly={sameAsPermanent} />
          </div>
          <div className="form-group">
            <label>Address :</label>
            <input type="text" value="" readOnly={sameAsPermanent} />
          </div>
          <div className="form-group">
            <label>UT :</label>
            <select disabled={sameAsPermanent}>
              <option value="jammu-kashmir">Jammu & Kashmir</option>
              <option value="ladakh">Ladakh</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>
          <div className="form-group">
            <label>District :</label>
            <input type="text" value="Jammu" readOnly={sameAsPermanent} />
          </div>
          <div className="form-group">
            <label>City :</label>
            <input type="text" value="Jammu" readOnly={sameAsPermanent} />
          </div>
          <div className="form-group">
            <label>Pincode :</label>
            <input type="text" value="180001" readOnly={sameAsPermanent} />
          </div>
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

export default AddressForm;