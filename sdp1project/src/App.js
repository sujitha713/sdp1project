import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PropertyListings from './components/PropertyListings';
import DealerInfo from './components/DealerInfo';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/properties" element={<PropertyListings />} />
          <Route path="/dealers" element={<DealerInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
