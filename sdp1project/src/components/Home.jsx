import React, { useState } from 'react';
import './components.css';
import { useNavigate } from 'react-router-dom';
import TopSection from './TopSection';
import Login from './Login'; 
import CreateAccount from './CreateAccount';
import ContactUs from './ContactUs'; 
import heroImage from '../assets/bg2.jpg';

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

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(1); // Start with image 1 in the center

  const handleGetStartedClick = () => {
    navigate('/properties'); 
  };

  const handlePropertyClick = (id) => {
    navigate(`/properties/${id}`);
  };

  const handleContactButtonClick = () => {
    setIsContactUsOpen(true);
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
    flexDirection: 'column', 
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % propertiesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + propertiesData.length) % propertiesData.length);
  };

  const getSlidePosition = (index) => {
    const totalSlides = propertiesData.length;
    const position = (index - currentIndex + totalSlides) % totalSlides;

    if (position === 0) return 'center';
    if (position === 1) return 'right';
    if (position === totalSlides - 1) return 'left';

    return 'hidden';
  };

  return (
    <div className="home-container" style={{ backgroundColor: 'white' }}>
      <TopSection 
        setLoginOpen={setIsLoginOpen} 
        setContactUsOpen={setIsContactUsOpen} 
      />
      
      {/* Hero Section */}
      <div className="hero-container" style={heroStyle}>
        <h1>Welcome to EliteSpace!</h1>
        <p>Your gateway to finding the perfect home.</p>
        <button onClick={handleGetStartedClick} className="get-started-button">
          Get Started
        </button>
      </div>

      {/* Top Properties This Month Heading */}
      <section id="top-properties">
        <h2>Top Properties This Month</h2>
      </section>

      {/* Custom Properties Slider */}
      <section id="properties-slider">
        <div className="slider-container">
          <button className="slider-button prev" onClick={prevSlide}>
            &#10094; {/* Left arrow */}
          </button>
          <div className="slides">
            {propertiesData.map((property, index) => (
              <div 
                key={property.id} 
                className={`slide ${getSlidePosition(index)}`} 
                onClick={() => handlePropertyClick(property.id)}
                style={{ cursor: getSlidePosition(index) === 'center' ? 'pointer' : 'default' }} 
              >
                <img src={property.image} alt={`Property ${property.id}`} />
              </div>
            ))}
          </div>
          <button className="slider-button next" onClick={nextSlide}>
            &#10095; {/* Right arrow */}
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us">
        <h2>About Us</h2>
        <p>Welcome to EliteSpace, your trusted partner in real estate. We are a dedicated team from KL University, B.Tech CSE Honors, committed to providing top-notch real estate solutions.</p>
        
        <h3>Our Mission</h3>
        <p>Our mission is to connect people with their dream homes and provide exceptional service throughout the buying and selling process. We strive to offer the most comprehensive and user-friendly real estate experience possible.</p>

        <h3>Our Team</h3>
        <div className="team">
          <div className="team-member">
            <img src="/vysh.jpg" alt="Sujitha" />
            <h4>Vyshnavi</h4>
            <p>Vyshnavi is a tech enthusiast and a coding expert who brings innovative solutions to our projects.</p>
          </div>
          <div className="team-member">
            <img src="/suji.jpg" alt="Vyshnavi" />
            <h4>Sujitha</h4>
            <p>Sujitha is our design guru, ensuring that our platform is not only functional but also aesthetically pleasing.</p>
          </div>
          <div className="team-member">
            <img src="/kavya.jpg" alt="Kavya" />
            <h4>Kavya</h4>
            <p>Kavya manages our customer relations, ensuring a seamless experience for every client.</p>
          </div>
          <div className="team-member">
            <img src="/supriya.jpg" alt="Supriya" />
            <h4>Supriya</h4>
            <p>Supriya is our project manager, coordinating efforts and keeping everything on track.</p>
          </div>
        </div>

        <h3>Our Values</h3>
        <ul>
          <li><strong>Integrity:</strong> We believe in honesty and transparency in all our dealings.</li>
          <li><strong>Customer Focus:</strong> Our clients' needs and satisfaction are our top priorities.</li>
          <li><strong>Innovation:</strong> We embrace new technologies and ideas to improve our services.</li>
          <li><strong>Excellence:</strong> We are committed to delivering high-quality results in everything we do.</li>
        </ul>
        
        {/* Bottom Section */}
        <div className="bottom-section">
          <div className="bottom-left">
            <h3>Team VSSK</h3>
            <div className="location-info">
              <span className="location-icon">📍</span>
              <span>KL University, Andhra Pradesh</span>
            </div>
          </div>
          <div className="bottom-middle">
            <button className="contact-button" onClick={handleContactButtonClick}>
              Questions? Contact Me Here.
            </button>
          </div>
          <div className="bottom-right">
            <h3>Contact</h3>
            <p>teamvssk@kl.com</p>
            <p>+91 9988776655</p>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <CreateAccount isOpen={isCreateAccountOpen} onClose={() => setIsCreateAccountOpen(false)} />
      <ContactUs isOpen={isContactUsOpen} onClose={() => setIsContactUsOpen(false)} />
    </div>
  );
};

export default Home;
