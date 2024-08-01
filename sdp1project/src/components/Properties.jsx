import React, { useState } from 'react';
import './components.css'; 
import TopSection from './TopSection';
import Login from './Login'; 
import CreateAccount from './CreateAccount';
import ContactUs from './ContactUs'; 
import { Link } from 'react-router-dom'; 

const Properties = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isCreateAccountOpen, setCreateAccountOpen] = useState(false);
  const [isContactUsOpen, setContactUsOpen] = useState(false);

  const propertiesData = [
    {
      id: 1,
      image: '/images/staghorn_fern.jpg',
    },
    {
      id: 2,
      image: '/images/hinoki_bonsai.jpg',
    },
    {
      id: 3,
      name: 'Japanese Maple Bonsai',
      image: '/images/japanese_maple_bonsai.jpg',
      price: 'SGD 150',
    },
    {
      id: 4,
      name: 'Monstera',
      image: '/images/monstera.jpg',
      price: 'SGD 45',
    },
    {
      id: 5,
      name: 'Fiddle Leaf Fig',
      image: '/images/fiddle_leaf_fig.jpg',
      price: 'SGD 80',
    },
  ];

  return (
    <div className="properties-container">
      <TopSection 
        setLoginOpen={setLoginOpen} 
        setContactUsOpen={setContactUsOpen} 
      />
      
      <div className="filter-sort">
        <div className="filter">
          <i className="fas fa-filter"></i>
          <span>Filter</span>
        </div>
        <div className="sort">
          <i className="fas fa-sort"></i>
          <span>Sort</span>
        </div>
      </div>

      <div className="properties-grid">
        {propertiesData.map((property) => (
          <div key={property.id} className="property-card">
            <Link to={`/properties/${property.id}`}>
              <img src={property.image} alt={property.name} className="property-image" />
            </Link>
          </div>
        ))}
      </div>

      {/* Modals */}
      <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      <CreateAccount isOpen={isCreateAccountOpen} onClose={() => setCreateAccountOpen(false)} />
      <ContactUs isOpen={isContactUsOpen} onClose={() => setContactUsOpen(false)} />
    </div>
  );
};

export default Properties;
