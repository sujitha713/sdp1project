import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Properties from './components/Properties';
import Lifestyle from './components/Lifestyle';
import AboutUs from './components/AboutUs';

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
      </div>
    </Router>
  );
};

export default App;
