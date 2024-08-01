import React, { useState } from 'react';
import './components.css'; // Ensure this path is correct
import { Link, useNavigate } from 'react-router-dom';
import TopSection from './TopSection';
import Login from './Login'; 
import CreateAccount from './CreateAccount';
import ContactUs from './ContactUs'; 
import heroImage from '../assets/image2.png'; 
import Slider from 'react-slick';

// Sample properties data
const propertiesData = [
  {
    id: 1,
    image: '/house1.png',
  },
  {
    id: 2,
    image: '/house2.png',
  },
  {
    id: 3,
    image: '/house3.png',
  },
  {
    id: 4,
    image: '/house4.png',
  },
  {
    id: 5,
    image: '/house5.png',
  },
];

// Sample dealers data
const dealersData = [
  {
    id: 1,
    image: '/images/dealer1.jpg',
  },
  {
    id: 2,
    image: '/images/dealer2.jpg',
  },
  {
    id: 3,
    image: '/images/dealer3.jpg',
  },
  {
    id: 4,
    image: '/images/dealer4.jpg',
  },
  {
    id: 5,
    image: '/images/dealer5.jpg',
  },
];

const Home = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isCreateAccountOpen, setCreateAccountOpen] = useState(false);
  const [isContactUsOpen, setContactUsOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/properties'); 
  };

  const heroStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
  };

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
  };

  return (
    <div className="home-container" style={{ backgroundColor: '#6B8FB5' }}>
      <TopSection 
        setLoginOpen={setLoginOpen} 
        setContactUsOpen={setContactUsOpen} 
      />
      
      {/* Hero Section */}
      <div className="hero-container" style={heroStyle}>
        <h1>Welcome to EliteSpace!</h1>
      </div>

      <section id="properties">
        <h2>Top Properties</h2>
        <Slider {...settings}>
          {propertiesData.map((property) => (
            <Link key={property.id} to={`/properties/${property.id}`} className="property-card">
              <img src={property.image} alt="Property" className="property-image" />
            </Link>
          ))}
        </Slider>
        <Link to="/properties" className="view-more-button">View More</Link>
      </section>

      <section id="dealers">
        <h2>Dealers</h2>
        <Slider {...settings}>
          {dealersData.map((dealer) => (
            <Link key={dealer.id} to={`/dealers/${dealer.id}`} className="dealer-card">
              <img src={dealer.image} alt="Dealer" className="dealer-image" />
            </Link>
          ))}
        </Slider>
        <Link to="/dealers" className="view-more-button">View More</Link>
      </section>

      <section id="lifestyle">
        <h2>Lifestyle</h2>
        <p>Discover the lifestyle that comes with your new home.</p>
      </section>

      {/* Modals */}
      <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      <CreateAccount isOpen={isCreateAccountOpen} onClose={() => setCreateAccountOpen(false)} />
      <ContactUs isOpen={isContactUsOpen} onClose={() => setContactUsOpen(false)} />
    </div>
  );
};

export default Home;
