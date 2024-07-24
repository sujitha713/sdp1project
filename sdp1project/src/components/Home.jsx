import React, { useState, useEffect } from 'react';
import './components.css';
import Hero from './Hero'; 

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      {/* Top Section */}
      <div className={`top-section ${isScrolled ? 'scrolled' : ''}`}>
        <div className="top-left">
          <a href="#properties">Properties</a>
          <a href="#dealers">Dealers</a>
          <a href="#lifestyle">Lifestyle</a>
        </div>
        <div className="top-center">
          <h1>COOL ESTATES</h1>
        </div>
        <div className="top-right">
          <a href="#login">Login</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Other Sections */}
      <section id="properties">
        <h2>Properties</h2>
        <p>Explore our exclusive listings.</p>
        {/* Property Listings component or content here */}
      </section>

      <section id="dealers">
        <h2>Dealers</h2>
        <p>Meet our trusted real estate dealers.</p>
        {/* Dealer Information component or content here */}
      </section>

      <section id="lifestyle">
        <h2>Lifestyle</h2>
        <p>Discover the lifestyle that comes with your new home.</p>
        {/* Lifestyle content or component here */}
      </section>
    </div>
  );
};

export default Home;