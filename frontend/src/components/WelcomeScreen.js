// src/components/WelcomeScreen.js

import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ setScreen }) => { // Use setScreen from props

  return (
    <div className="welcome-container">
      <h1>Welcome to the Maandamano Quest!</h1>
      <p>Start your adventure today!</p>
      <div className="button-group">
        <button className="btn" onClick={() => setScreen('login')}>Login</button>
        <button className="btn" onClick={() => setScreen('signup')}>Sign Up</button>
        {/* <button className="btn" onClick={() => setScreen('gameModeSelection')}>Game Mode</button> Navigate to GameModeSelection */}
      </div>
    </div>
  );
};

export default WelcomeScreen;
