import React from 'react';
import './facilities.css';

const Facilities = () => {
  return (
    <section className="facilities-section">
      <h2>Our Facilities</h2>
      <div className="facilities-grid">
        <div className="facility-card">
          <div className="facility-icon pool"></div>
          <h3>Swimming Pool</h3>
          <p>Relax and unwind in our luxurious swimming pool.</p>
        </div>
        <div className="facility-card">
          <div className="facility-icon bar"></div>
          <h3>Bar & Pub</h3>
          <p>Enjoy a wide range of drinks at our well-stocked bar and pub.</p>
        </div>
        <div className="facility-card">
          <div className="facility-icon rooms"></div>
          <h3>Affordable Rooms</h3>
          <p>Stay in comfort with our affordable, well-equipped rooms.</p>
        </div>
      </div>
    </section>
  );
}

export default Facilities;
