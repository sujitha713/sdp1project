import React, { useState } from 'react';
import TopSection from './TopSection';
import Login from './Login';
import ContactUs from './ContactUs';
import './aboutus.css';
import { FaMapMarkerAlt, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const AboutUs = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleLoginClick = () => setIsLoginOpen(true);
  const handleContactButtonClick = () => setIsContactUsOpen(true);

  const toggleCard = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  return (
    <div>
      <TopSection 
        setLoginOpen={handleLoginClick} 
        setContactUsOpen={handleContactButtonClick} 
        alwaysVisibleBackground={true} 
      />
      <div className="about-us-container">
        <h2 className="about-us-title">About Us</h2>
        
        <div className="about-us-cards">
          <div className="about-us-card">
            <h3>Our Mission</h3>
            <p>Our mission is to connect people with their dream homes and provide exceptional service throughout the buying and selling process. We strive to offer the most comprehensive and user-friendly real estate experience possible.</p>
            {expandedCard === 'mission' && (
              <div className="additional-content">
                <p>We aim to create a seamless experience for our clients, ensuring that every interaction is positive and fulfilling.</p>
                <p>Our dedicated team works tirelessly to understand the unique needs of each client, providing personalized solutions that exceed expectations.</p>
              </div>
            )}
            <button onClick={() => toggleCard('mission')} className="view-more">
              {expandedCard === 'mission' ? 'View Less' : 'View More'}
            </button>
          </div>

          <div className="about-us-card">
            <h3>Our Vision</h3>
            <p>Our vision is to revolutionize the real estate industry by leveraging cutting-edge technology and innovative strategies. We aim to make the process of buying, selling, and renting properties seamless and enjoyable for our clients.</p>
            {expandedCard === 'vision' && (
              <div className="additional-content">
                <p>We envision a future where technology enhances the real estate experience, making it accessible and efficient for everyone.</p>
                <p>Our goal is to lead the industry in innovation, setting new standards for service and client satisfaction.</p>
              </div>
            )}
            <button onClick={() => toggleCard('vision')} className="view-more">
              {expandedCard === 'vision' ? 'View Less' : 'View More'}
            </button>
          </div>

          <div className="about-us-card">
            <h3>Our Values</h3>
            <ul>
              <li>Integrity </li>
              <li>Customer Focus</li>
              <li>Innovation</li>
              <li>Excellence </li>
              <li>Teamwork </li>
            </ul>
            {expandedCard === 'values' && (
              <div className="additional-content">
              <li><strong>Integrity: </strong> We believe in honesty and transparency in all our dealings.</li>
              <li><strong>Customer Focus: </strong> Our clients' needs and satisfaction are our top priorities.</li>
              <li><strong>Innovation: </strong> We embrace new technologies and ideas to improve our services.</li>
              <li><strong>Excellence: </strong> We are committed to delivering high-quality results in everything we do.</li>
              <li><strong>Teamwork: </strong> We work collaboratively as a team to achieve our goals and provide the best possible service to our clients.</li>
                <p>We foster a culture of collaboration and respect, encouraging our team members to share ideas and support one another.</p>
                <p>Our values guide our actions and decisions, ensuring that we remain accountable to our clients and each other.</p>
              </div>
            )}
            <button onClick={() => toggleCard('values')} className="view-more">
              {expandedCard === 'values' ? 'View Less' : 'View More'}
            </button>
          </div>

          <div className="about-us-card">
            <h3>Our Achievements</h3>
            <ul>
              <li>Named "Best Real Estate Startup" by Industry Magazine in 2021</li>
              <li>Awarded "Most Innovative Real Estate Platform" by Tech Awards in 2022</li>
              <li>Recognized as "Top Real Estate Company" by Local Business Association in 2023</li>
            </ul>
            {expandedCard === 'achievements' && (
              <div className="additional-content">
                <p>These accolades reflect our commitment to excellence and innovation in the real estate sector.</p>
                <p>We are proud of our achievements and continuously strive to improve and expand our services.</p>
              </div>
            )}
            <button onClick={() => toggleCard('achievements')} className="view-more">
              {expandedCard === 'achievements' ? 'View Less' : 'View More'}
            </button>
          </div>
        </div>

        <h3 className="team-title">Our Team</h3>
        <div className="team">
          <div className="team-member">
            <img src="/vysh.jpg" alt="Vyshnavi" />
            <h4>Vyshnavi</h4>
            <p>Vyshnavi is a tech enthusiast & coding expert who brings innovative solutions to our projects.</p>
          </div>
          <div className="team-member">
            <img src="/suji.jpg" alt="Sujitha" />
            <h4>Sujitha</h4>
            <p>Sujitha is our design guru, ensuring that our platform is not only functional but also aesthetically pleasing.</p>
          </div>
          <div className="team-member">
            <img src="/kavya.jpg" alt="Kavya" />
            <h4>Kavya</h4>
            <p>Kavya is a tech enthusiast and a coding expert who brings innovative solutions to our projects.</p>
          </div>
          <div className="team-member">
            <img src="/sups.jpg" alt="Supriya" />
            <h4>Supriya</h4>
            <p>Supriya is a key team member, helping to coordinate tasks & ensure that our project works fine.</p>
          </div>
        </div>

        <div className="location-info">
          <p>We are B.Tech students specializing in Computer Science Engineering, developed using the MERN stack for our college hackathon, is delivered on time and meets all quality standards. <br/>
          <FaMapMarkerAlt /> 
          <span> KL University, Vaddeswaram, India</span></p>
        </div>

        <div className="faqs">
          <h4>Frequently Asked Questions</h4>
          <div className="faqs-content">
            <ul>
              <li><strong>What is the purpose of this project?</strong> <br /> This project aims to provide a user-friendly platform for real estate transactions.</li>
              <li><strong>Who is the target audience?</strong> <br />Our target audience includes home buyers, sellers, and real estate agents.</li>
              <li><strong>How can I provide feedback?</strong> <br />You can reach out to us through the contact information provided above.</li>
            </ul>
          </div>
        </div>

        <div className="call-to-action">
          <h4>We'd love to hear from you!</h4>
          <p>If you have any questions, feedback, or collaboration ideas, feel free to reach out to us.</p>
          <p> <b> Contact us at: </b><a href="mailto:teamvssk@klu.com" className="contact-email">teamvssk@klu.com</a></p>
        </div>

        <div className="social-media">
          <h4>Connect with us:</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={25} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} />
            </a>
          </div>
        </div>
      </div>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ContactUs isOpen={isContactUsOpen} onClose={() => setIsContactUsOpen(false)} />
    </div>
  );
};

export default AboutUs;
