import React, { useState } from 'react';
import './CreateAccount.css';

const CreateAccount = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating account for:', firstName, lastName, email);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRetypePassword('');
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="create-account-close-button" onClick={onClose}>✖</button>
        <h2 style={{ textAlign: 'center', marginTop: '30px', color: '#333' }}>Create Account</h2>
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
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Create Password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="retype-password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              required
              placeholder="Re-type Password"
            />
          </div>
          <button type="submit" className="create-button">Create Account</button>
        </form>
        <div className="modal-footer">
          <p>
            <a href="#" className="create-account" onClick={onClose}>Already have an account? <b>Login</b></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
