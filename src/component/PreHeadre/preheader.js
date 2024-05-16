// PreHeader.js

import React from 'react';
import './PreHeader.css'; 

const PreHeader = () => {
  return (
    <div className="pre-header">
      <div className="logo">Logo</div>
      <div className="buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>
    </div>
  );
}

export default PreHeader;
