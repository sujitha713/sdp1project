import React, { useState } from 'react';
import './Properties.css';
import TopSection from './TopSection';
import Login from './Login';
import ContactUs from './ContactUs';
import MapSearch from './MapSearch';

const Properties = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const [mapSearchOpen, setMapSearchOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('hyderabad'); 

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [minSize, setMinSize] = useState('');
  const [maxSize, setMaxSize] = useState('');
  const [minYear, setMinYear] = useState('');
  const [maxYear, setMaxYear] = useState('');

  const handleSearch = () => {
    console.log({
      minPrice,
      maxPrice,
      propertyType,
      bedrooms,
      bathrooms,
      minSize,
      maxSize,
      minYear,
      maxYear,
    });
  };

  const handleMapSearchClick = () => {
    setMapSearchOpen(true);
  };

  const handleCloseMapSearch = () => {
    setMapSearchOpen(false);
  };

  // Mock data for property cards
  const properties = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Property ${index + 1}`,
    price: `₹${(index + 1) * 1000000}`,
    location: 'Hyderabad',
    image: `/house${(index % 5) + 1}.png`,
  }));

  return (
    <div className="properties-page">
      <TopSection setLoginOpen={setIsLoginOpen} setContactUsOpen={setIsContactUsOpen} />
      <h1>Properties</h1>
      <div className="properties-content">
        <div className="search-filters">
          <div className="search-header">
            <h2>Search Properties</h2>
            <button className="map-search-button" onClick={handleMapSearchClick}>Map Search</button>
          </div>
          <input
            type="text"
            placeholder="Location, Address, MLS..."
            className="search-input"
          />
          <div className="price-range">
            <h3>Price Range (in Rupees)</h3>
            <div className="price-inputs">
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Min Price"
              />
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Max Price"
              />
            </div>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="10000000"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="slider"
              />
              <input
                type="range"
                min="0"
                max="10000000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="slider"
              />
            </div>
          </div>
          <div className="property-type">
            <h3>Property Type</h3>
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="">Select Type</option>
              <optgroup label="Residential">
                <option value="single-family">Single Family</option>
                <option value="condo-coop">Condo/Coop</option>
                <option value="land">Land</option>
                <option value="income">Income</option>
                <option value="lease">Lease</option>
                <option value="manuf-mobile">Manufactured/Mobile</option>
              </optgroup>
              <optgroup label="Commercial">
                <option value="lease">Lease</option>
                <option value="sale">Sale</option>
                <option value="bus-opp">Business Opportunity</option>
              </optgroup>
            </select>
          </div>
          <div className="bed-bath">
            <h3>Bedrooms & Bathrooms</h3>
            <div className="bed-bath-inputs">
              <input
                type="number"
                placeholder="Min Bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />
              <input
                type="number"
                placeholder="Min Bathrooms"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </div>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="10"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="slider"
              />
              <input
                type="range"
                min="0"
                max="10"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                className="slider"
              />
            </div>
          </div>
          <div className="property-size">
            <h3>Property Size (sq ft)</h3>
            <div className="size-inputs">
              <input
                type="number"
                placeholder="Min Size"
                value={minSize}
                onChange={(e) => setMinSize(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max Size"
                value={maxSize}
                onChange={(e) => setMaxSize(e.target.value)}
              />
            </div>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="10000"
                value={minSize}
                onChange={(e) => setMinSize(e.target.value)}
                className="slider"
              />
              <input
                type="range"
                min="0"
                max="10000"
                value={maxSize}
                onChange={(e) => setMaxSize(e.target.value)}
                className="slider"
              />
            </div>
          </div>
          <div className="year-built">
            <h3>Year Built</h3>
            <div className="year-inputs">
              <input
                type="number"
                placeholder="Min Year"
                value={minYear}
                onChange={(e) => setMinYear(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max Year"
                value={maxYear}
                onChange={(e) => setMaxYear(e.target.value)}
              />
            </div>
            <div className="slider-container">
              <input
                type="range"
                min="1900"
                max="2024"
                value={minYear}
                onChange={(e) => setMinYear(e.target.value)}
                className="slider"
              />
              <input
                type="range"
                min="1900"
                max="2024"
                value={maxYear}
                onChange={(e) => setMaxYear(e.target.value)}
                className="slider"
              />
            </div>
          </div>
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
        <div className="property-list">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.image} alt={property.title} />
              <h3>{property.title}</h3>
              <p>{property.price}</p>
              <p>{property.location}</p>
            </div>
          ))}
        </div>
      </div>
      {mapSearchOpen && <MapSearch city={selectedCity} onClose={handleCloseMapSearch} />}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ContactUs isOpen={isContactUsOpen} onClose={() => setIsContactUsOpen(false)} />
    </div>
  );
};

export default Properties;
