// TopSection.jsx
import React, { useState, useEffect } from 'react';
import './components.css';

const TopSection = ({ setLoginOpen, setContactUsOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`top-section ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <h1>COOL ESTATES</h1>
      </div>
      <nav className="nav-links">
        <a href="#top-properties">Properties</a>
        <a href="#lifestyle">Lifestyle</a>
        <a href="#about-us">About Us</a>
        <a href="#" onClick={() => setLoginOpen(true)}>Login</a>
        <a href="#" onClick={() => setContactUsOpen(true)}>Contact Us</a>
      </nav>
    </div>
  );
};

export default TopSection;
