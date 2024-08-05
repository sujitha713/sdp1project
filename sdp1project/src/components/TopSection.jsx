import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './components.css';

const TopSection = ({ setLoginOpen, setContactUsOpen, alwaysVisibleBackground }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!alwaysVisibleBackground) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [alwaysVisibleBackground]);

  return (
    <div className={`top-section ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/" className="logo-link">
          <h1>EliteSpace</h1>
        </Link>
      </div>
      <nav className="nav-links">
        <NavLink to="/properties">Properties</NavLink>
        <NavLink to="/lifestyle">Lifestyle</NavLink>
        <Link to="/about-us">About Us</Link>
        <a href="#" onClick={() => setContactUsOpen(true)}>Contact Us</a>
        <a href="#" onClick={() => setLoginOpen(true)}>Login</a>
      </nav>
    </div>
  );
};

export default TopSection;