import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Properties from './components/Properties';
import Lifestyle from './components/Lifestyle';
import AboutUs from './components/AboutUs';
import Login from './components/Login';         // Import Login
import CreateAccount from './components/CreateAccount'; // Import CreateAccount
import ResetPassword from './components/ResetPassword'; // Import ResetPassword

const App = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isCreateAccountOpen, setCreateAccountOpen] = useState(false);
  const [isResetPasswordOpen, setResetPasswordOpen] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>

        {/* Add buttons or links to open modals */}
        <button onClick={() => setLoginOpen(true)}>Open Login</button>
        <button onClick={() => setCreateAccountOpen(true)}>Open Create Account</button>
        <button onClick={() => setResetPasswordOpen(true)}>Open Reset Password</button>

        {/* Modal Components */}
        <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
        <CreateAccount isOpen={isCreateAccountOpen} onClose={() => setCreateAccountOpen(false)} />
        <ResetPassword isOpen={isResetPasswordOpen} onClose={() => setResetPasswordOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
