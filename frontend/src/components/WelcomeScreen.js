// src/components/WelcomeScreen.js

import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import GameModeSelection from './GameModeSelection';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const [screen, setScreen] = useState('welcome'); // Manage which screen to show

  const renderContent = () => {
    switch (screen) {
      case 'login':
        return <Login setScreen={setScreen} />;
      case 'signup':
        return <Signup setScreen={setScreen} />;
      case 'gameMode':
        return <GameModeSelection setScreen={setScreen} />;
      default:
        return (
          <div className="welcome-container">
            <h1>Welcome to the Maandamano Quest!</h1>
            <p>Start your adventure today!</p>
            <div className="button-group">
              <button className="btn" onClick={() => setScreen('login')}>Login</button>
              <button className="btn" onClick={() => setScreen('signup')}>Sign Up</button>
            </div>
          </div>
        );
    }
  };

  return <div>{renderContent()}</div>;
};

export default WelcomeScreen;
