import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import 'leaflet/dist/leaflet.css';
import './MapSearch.css';

const MapSearch = ({ onClose }) => {
  const [city, setCity] = useState('hyderabad');
  const mapRef = useRef(null);

  const cityCoordinates = {
    hyderabad: [17.385044, 78.486671],
    delhi: [28.6139, 77.2090],
    mumbai: [19.0760, 72.8777],
    chennai: [13.0827, 80.2707],
    kolkata: [22.5726, 88.3639],
    bangalore: [12.9716, 77.5946],
    pune: [18.5204, 73.8567],
    other: [20.5937, 78.9629]
  };

  const properties = {
    hyderabad: [
      { id: 1, name: 'Property A', status: 'available', position: [17.385044, 78.486671] },
      { id: 2, name: 'Property B', status: 'sold', position: [17.385044, 78.486672] }
    ],
    delhi: [
      { id: 3, name: 'Property C', status: 'pending', position: [28.6139, 77.2090] }
    ],
    mumbai: [
      { id: 4, name: 'Property D', status: 'active-contract', position: [19.0760, 72.8777] }
    ]
    // Add more properties for other cities
  };

  const statusIcons = {
    available: <FontAwesomeIcon icon={faCircle} className="status-icon available" />,
    sold: <FontAwesomeIcon icon={faCircle} className="status-icon sold" />,
    pending: <FontAwesomeIcon icon={faCircle} className="status-icon pending" />,
    'active-contract': <FontAwesomeIcon icon={faCircle} className="status-icon active-contract" />
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.leafletElement.setView(cityCoordinates[city], 12);
    }
  }, [city]);

  return (
    <div className="map-search-overlay">
      <div className="map-search-container">
        <button onClick={onClose} className="map-close-button">Close</button>
        <div className="city-selector">
          <label htmlFor="city">Select City:</label>
          <select id="city" value={city} onChange={handleCityChange}>
            <option value="hyderabad">Hyderabad</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="chennai">Chennai</option>
            <option value="kolkata">Kolkata</option>
            <option value="bangalore">Bangalore</option>
            <option value="pune">Pune</option>
            <option value="other">Other</option>
          </select>
        </div>
        <MapContainer center={cityCoordinates[city]} zoom={12} style={{ height: '100%', width: '100%' }} ref={mapRef}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {properties[city]?.map(property => (
            <Marker key={property.id} position={property.position}>
              <Popup>
                <div className="popup-content">
                  {statusIcons[property.status]}
                  <br />
                  {property.name}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapSearch;
