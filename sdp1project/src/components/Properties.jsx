import React, { useState } from 'react';
import TopSection from './TopSection';
import Login from './Login';
import ContactUs from './ContactUs';
import './properties.css';

const propertiesList = [
  {
    id: 1,
    image: '/house1.png',
    name: 'Luxury Villa',
    location: 'California',
    price: '$2,000,000'
  },
  {
    id: 2,
    image: '/house2.png',
    name: 'Modern Apartment',
    location: 'New York',
    price: '$850,000'
  },
  {
    id: 3,
    image: '/house3.png',
    name: 'Cozy Cottage',
    location: 'Colorado',
    price: '$550,000'
  },
  {
    id: 4,
    image: '/house4.png',
    name: 'Spacious Bungalow',
    location: 'Texas',
    price: '$1,200,000'
  },
  {
    id: 5,
    image: '/house5.png',
    name: 'Downtown Condo',
    location: 'Florida',
    price: '$750,000'
  },
];

const Properties = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);

  return (
    <div className="properties-page">
      <TopSection setLoginOpen={setIsLoginOpen} setContactUsOpen={setIsContactUsOpen} />

      <section id="properties-list">
        <h2>Our Properties</h2>
        <div className="properties-container">
          {propertiesList.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.image} alt={property.name} />
              <h3>{property.name}</h3>
              <p>{property.location}</p>
              <p>{property.price}</p>
            </div>
          ))}
        </div>
      </section>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ContactUs isOpen={isContactUsOpen} onClose={() => setIsContactUsOpen(false)} />
    </div>
  );
};

export default Properties;