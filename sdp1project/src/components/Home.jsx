import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopSection from './TopSection';
import Login from './Login'; 
import CreateAccount from './CreateAccount';
import ContactUs from './ContactUs'; 
import heroImage from '../assets/bg2.jpg';
import './home.css';
import './components.css';

const propertiesData = [
  { id: 1, image: '/house1.png' },
  { id: 2, image: '/house2.png' },
  { id: 3, image: '/house3.png' },
  { id: 4, image: '/house4.png' },
  { id: 5, image: '/house5.png' },
];

const cityAreas = {
  Hyderabad: [
    { name: 'Banjara Hills', sellers: 500, listings: 6000 },
    { name: 'Gachibowli', sellers: 450, listings: 5500 },
    { name: 'Kondapur', sellers: 300, listings: 4000 },
    { name: 'Madhapur', sellers: 250, listings: 3500 },
  ],
  Bangalore: [
    { name: 'Koramangala', sellers: 600, listings: 7000 },
    { name: 'Indiranagar', sellers: 500, listings: 6500 },
    { name: 'Whitefield', sellers: 400, listings: 5000 },
    { name: 'Malleshwaram', sellers: 300, listings: 4500 },
  ],
  Mumbai: [
    { name: 'Bandra', sellers: 700, listings: 8000 },
    { name: 'Andheri', sellers: 600, listings: 7500 },
    { name: 'Juhu', sellers: 500, listings: 6000 },
    { name: 'Colaba', sellers: 400, listings: 5000 },
  ],
  Pune: [
    { name: 'Kothrud', sellers: 300, listings: 3500 },
    { name: 'Hinjewadi', sellers: 250, listings: 3000 },
    { name: 'Viman Nagar', sellers: 200, listings: 2500 },
    { name: 'Baner', sellers: 150, listings: 2000 },
  ],
  Ahmedabad: [
    { name: 'Bopal', sellers: 200, listings: 2500 },
    { name: 'Satellite', sellers: 150, listings: 2000 },
    { name: 'Vastrapur', sellers: 100, listings: 1500 },
    { name: 'Thaltej', sellers: 80, listings: 1200 },
  ],
  Chennai: [
    { name: 'Adyar', sellers: 300, listings: 3500 },
    { name: 'T Nagar', sellers: 250, listings: 3000 },
    { name: 'Anna Nagar', sellers: 200, listings: 2500 },
    { name: 'Velachery', sellers: 150, listings: 2000 },
  ],
  Kolkata: [
    { name: 'New Town', sellers: 371, listings: 5395 },
    { name: 'Rajarhat', sellers: 243, listings: 2780 },
    { name: 'Joka', sellers: 160, listings: 1439 },
    { name: 'Madhyamgram', sellers: 107, listings: 1361 },
  ],
  Delhi: [
    { name: 'Connaught Place', sellers: 400, listings: 5000 },
    { name: 'South Delhi', sellers: 350, listings: 4500 },
    { name: 'Dwarka', sellers: 300, listings: 4000 },
    { name: 'Noida', sellers: 250, listings: 3500 },
  ],
};

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Kolkata');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleGetStartedClick = () => navigate('/properties');
  const handlePropertyClick = id => navigate(`/properties/${id}`);
  const handleContactButtonClick = () => setIsContactUsOpen(true);

  const nextSlide = () => setCurrentIndex(prevIndex => (prevIndex + 1) % propertiesData.length);
  const prevSlide = () => setCurrentIndex(prevIndex => (prevIndex - 1 + propertiesData.length) % propertiesData.length);

  const getSlidePosition = index => {
    const totalSlides = propertiesData.length;
    const position = (index - currentIndex + totalSlides) % totalSlides;

    if (position === 0) return 'center';
    if (position === 1) return 'right';
    if (position === totalSlides - 1) return 'left';

    return 'hidden';
  };

  return (
    <div className="home-container">
      <TopSection 
        setLoginOpen={setIsLoginOpen} 
        setContactUsOpen={setIsContactUsOpen} 
        alwaysVisibleBackground={false}
      />
      
      <div className="hero-container" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Welcome to EliteSpace!</h1>
        <p>Your gateway to finding the perfect home.</p>
        <button onClick={handleGetStartedClick} className="get-started-button">
          Get Started
        </button>

        <section id="popular-localities">
            <h2>Popular Localities in {selectedCity}</h2>
            <div className="dropdown-container">
              <select
                className={`city-dropdown ${isDropdownOpen ? 'open' : ''}`}
                onChange={(e) => setSelectedCity(e.target.value)}
                value={selectedCity}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Delhi">Delhi</option>
              </select>
              <span className="dropdown-arrow">
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
            <div className="localities-container">
              {cityAreas[selectedCity].map((area, index) => (
                <div className="glass-card" key={index}>
                  <h3>{area.name}</h3>
                  <p>{area.sellers} top rated sellers</p>
                  <p>{area.listings} active listings</p>
                </div>
              ))}
            </div>
        </section>
      </div>

      <section id="top-properties">
        <h2>Top Properties This Month in {selectedCity}</h2>
      </section>

      <section id="properties-slider">
        <div className="slider-container">
          <button className="slider-button prev" onClick={prevSlide}>&#10094;</button>
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
          <button className="slider-button next" onClick={nextSlide}>&#10095;</button>
        </div>
      </section>

      <section id="about-us">
        <h2>About Us</h2>
        <p>Welcome to EliteSpace, your trusted partner in real estate...</p>
        <h3>Our Mission</h3>
        <p>Our mission is to connect people with their dream homes...</p>
        <h3>Our Team</h3>
        <div className="team">
          <div className="team-member">
            <img src="/vysh.jpg" alt="Sujitha" />
            <h4>Vyshnavi</h4>
          </div>
          <div className="team-member">
            <img src="/suji.jpg" alt="Vyshnavi" />
            <h4>Sujitha</h4>
          </div>
        </div>
      </section>

      <div className="bottom-section">
        <div className="bottom-center">
          <h3>Team VSSK   |  📍 KL University, Andhra Pradesh   |   Any Queries? <button className="contact-button" onClick={handleContactButtonClick}>Contact Us</button></h3>
        </div>
      </div>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <CreateAccount isOpen={isCreateAccountOpen} onClose={() => setIsCreateAccountOpen(false)} />
      <ContactUs isOpen={isContactUsOpen} onClose={() => setIsContactUsOpen(false)} />
    </div>
  );
};

export default Home;
