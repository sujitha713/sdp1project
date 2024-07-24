import React from 'react';
import './components.css';

const PropertyListings = () => {
  return (
    <div className="property-listings">
      <h2>Available Properties</h2>
      {/* property data */}
      <div className="property-card">
        <img src="https://via.placeholder.com/300" alt="Property" />
        <div className="property-info">
          <h3>Beautiful Family Home</h3>
          <p>$500,000</p>
          <button>Contact Dealer</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyListings;
