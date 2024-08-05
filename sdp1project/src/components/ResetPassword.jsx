import React, { useState } from 'react';
import './ResetPassword.css';

const ResetPassword = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Resetting password for:', email);
    setEmail('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="reset-password-close-button" onClick={onClose}>✖</button>
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <button type="submit" className="reset-button">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
