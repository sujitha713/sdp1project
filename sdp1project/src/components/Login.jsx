import React, { useState } from 'react';
import './components.css'; 
import ResetPassword from './ResetPassword'; 
import CreateAccount from './CreateAccount';

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isResetModalOpen, setResetModalOpen] = useState(false);
  const [isCreateAccountModalOpen, setCreateAccountModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
    onClose();
  };

  const handleForgotPasswordClick = () => {
    setResetModalOpen(true);
  };

  const handleCloseResetModal = () => {
    setResetModalOpen(false);
  };

  const handleCreateAccountClick = () => {
    setCreateAccountModalOpen(true);
  };

  const handleCloseCreateAccountModal = () => {
    setCreateAccountModalOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2 style={{ textAlign: 'center', marginTop: '30px' }}>Login</h2>
        <form onSubmit={handleSubmit}>
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
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="modal-footer">
          <a href="#" className="forgot-password" onClick={handleForgotPasswordClick}>Forgot Password?</a>
          <p>
            <a href="#" className="create-account" onClick={handleCreateAccountClick}>Don't have an account? <b>Create here</b></a>
          </p>
        </div>
      </div>
      <ResetPassword isOpen={isResetModalOpen} onClose={handleCloseResetModal} />
      <CreateAccount isOpen={isCreateAccountModalOpen} onClose={handleCloseCreateAccountModal} />
    </div>
  );
};

export default Login;
