import React from 'react';
import './homepage.css'

function HomePage() {



  return (
    <div className="container">
      <div className="header">
        <div className="menu">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
      <div className="banner">
        <div className="banner-text">Banner photo</div>
      </div>
      <div className="content">
        <div className="section">
          <div className="section-text">Time line</div>
        </div>
        <div className="section">
          <div className="section-header">Announcements</div>
          <div className="section-text">
            The Portal is open for One Time Registration (OTR) for
            students.
            <span className="button">Apply now</span>
          </div>
          <div className="section-text">
            One Time Registration (OTR) is a unique number allotted to the
            student and is applicable for entire academic career on National
            Scholarship Portal.
          </div>
          <div className="section-text">
            OTR is required to apply for the scholarships on National
            Scholarship Portal from AY 2024-25.
          </div>
          <div className="section-text button">View more</div>
        </div>
      </div>


      


   




    </div>
  );
}

export default HomePage;
