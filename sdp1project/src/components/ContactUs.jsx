import React, { useState } from 'react';
import './components.css';

const ContactUs = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', {
      firstName,
      lastName,
      email,
      interest,
      message,
    });
    setFirstName('');
    setLastName('');
    setEmail('');
    setInterest('');
    setMessage('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2 style={{ textAlign: 'center', marginTop: '30px' }}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <div className="name-inputs">
              <input
                type="text"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="First Name"
              />
              <input
                type="text"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label>Interest in</label>
            <select
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              required
              className={`dropdown-select ${interest ? 'selected' : ''}`} // Add class based on selection
            >
              <option value="" disabled style={{ color: '#aaa' }}>Select an option</option>
              <option value="General Enquiries">General Enquiries</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" className="login-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
