import React, { useState } from 'react';
import TopSection from './TopSection'; // Import TopSection
import Login from './Login'; // Import Login modal
import ContactUs from './ContactUs'; // Import Contact Us modal
import './aboutus.css'; // Ensure this file exists or remove this line if not needed

const AboutUs = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);

  const handleLoginClick = () => setIsLoginOpen(true);
  const handleContactButtonClick = () => setIsContactUsOpen(true);

  return (
    <div>
      <TopSection 
        setLoginOpen={handleLoginClick} 
        setContactUsOpen={handleContactButtonClick} 
        alwaysVisibleBackground={true} 
      />
      <div className="about-us-container">
        <h2>About Us</h2>
        <p>Welcome to EliteSpace, your trusted partner in real estate. We are a dedicated team from KL University, B.Tech CSE Honors, committed to providing top-notch real estate solutions.</p>
        
        <h3>Our Mission</h3>
        <p>Our mission is to connect people with their dream homes and provide exceptional service throughout the buying and selling process. We strive to offer the most comprehensive and user-friendly real estate experience possible.</p>

        <h3>Our Team</h3>
        <div className="team">
          <div className="team-member">
            <img src="/vysh.jpg" alt="Vyshnavi" />
            <h4>Vyshnavi</h4>
            <p>Vyshnavi is a tech enthusiast and a coding expert who brings innovative solutions to our projects.</p>
          </div>
          <div className="team-member">
            <img src="/suji.jpg" alt="Sujitha" />
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
      </div>

      {/* Modals for Login and Contact Us */}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ContactUs isOpen={isContactUsOpen} onClose={() => setIsContactUsOpen(false)} />
    </div>
  );
};

export default AboutUs;