// src/components/BackButton.js

import React from 'react';
import './BackButton.css'; // Create a CSS file for styling the button

const BackButton = ({ onClick }) => {
  return (
    <button className="back-button" onClick={onClick}>
      &#9664; Back
    </button>
  );
};

export default BackButton;
