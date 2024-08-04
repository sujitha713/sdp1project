import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-content">
        <div className="sidebar">
          <h3>My Journey</h3>
          <h3>My Favourites</h3>
          <h3>Loans</h3>
          <h3>Recent Projects</h3>
          <h3>Top Cities</h3>
        </div>
        <div className="main-content">
          <h3>Basic User Profile Content</h3>
          <p>Here you can display the user's basic profile information.</p>
          {/* Add more user profile details here */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
