import React from 'react';
import './components.css';

const DealerInfo = () => {
  return (
    <div className="dealer-info">
      <h2>Meet Our Dealers</h2>
      {/* actual dealer data */}
      <div className="dealer-card">
        <img src="https://via.placeholder.com/150" alt="Dealer" />
        <div className="dealer-info-text">
          <h3>John Doe</h3>
          <p>Experienced Real Estate Agent</p>
        </div>
      </div>
    </div>
  );
};

export default DealerInfo;
