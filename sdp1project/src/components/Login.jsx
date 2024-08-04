import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import './components.css'; 
import ResetPassword from './ResetPassword'; 
import CreateAccount from './CreateAccount';

const Login = ({ isOpen, onClose, onLogin }) => {
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
    onLogin(); // Call the onLogin function to set the user as logged in
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

  const handleGoogleSignIn = () => {
    window.open("https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.makaan.com%3Fid%3Dauth121364&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=295296851199-99hs0ruicm8d6glfo43kj12gm815rjm8.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.makaan.com&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&ddm=0&flowName=GeneralOAuthFlow", "_self");
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
        <div className="or-separator">
          <span>or</span>
        </div>
        <button className="google-signin-button" onClick={handleGoogleSignIn}>
          <FaGoogle /> Sign in with Google
        </button>
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
