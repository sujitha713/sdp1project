import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopSection = ({ setLoginOpen, setContactUsOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`top-section ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-left">
        <Link to="/properties">Properties</Link>
        <Link to="/dealers">Dealers</Link>
      </div>
      <div className="top-center">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>EliteSpace </h1>
        </Link>
      </div>
      <div className="top-right">
        <a href="#" onClick={() => setLoginOpen(true)}>Login</a>
        <a href="#" onClick={() => setContactUsOpen(true)}>Contact Us</a>
      </div>
    </div>
  );
};

export default TopSection;
