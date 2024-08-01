import React, { useState } from 'react';
import './components.css'; 

const ResetPassword = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset link sent to:', email);
    setEmail('');
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2 style={{ textAlign: 'center', marginTop: '30px' }}>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="reset-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <button type="submit" className="login-button">Send Reset Link</button>
        </form>
        <div className="modal-footer">
          <p>
            <a href="#" className="create-account" onClick={onClose}>Back to Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
