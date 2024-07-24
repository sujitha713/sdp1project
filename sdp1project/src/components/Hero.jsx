import React from 'react';
import './components.css';
import heroImage from '../assets/image.png';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="hero-container" style={heroStyle}>
      <div className="hero-text">
        <h1>Welcome to Cool Estates!</h1>
        <h2>Find your dream home with us!</h2>
      </div>
    </div>
  );
};

export default Hero;