// Header.js

import React from 'react';
import './Header.css'; // Import CSS file for styling

const Header = () => {
  return (
    <div className="header">
      <div className="header-item">Overview</div>
      <div className="header-item">Curriculum</div>
      <div className="header-item">Refund</div>
      <div className="header-item">Termination</div>
    </div>
  );
}

export default Header;
