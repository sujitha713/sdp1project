import React, { useState } from 'react';
import './CreateAccount.css';

const CreateAccount = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password match
    if (password !== retypePassword) {
        alert("Passwords don't match!");
        return;
    }

    // Prepare the payload
    const payload = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      // Send the data to the backend
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        // If the request was successful, reset the form and close the modal
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setRetypePassword('');
        onClose(); // Close the modal
      } else {
        // Handle errors from the server
        alert(data.message || 'Failed to create account');
      }
    } catch (error) {
      console.error('Error creating account:', error);
      alert('An error occurred. Please try again.');
    }
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
