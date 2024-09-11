// src/App.js
import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Login from './components/Login';
import Signup from './components/Signup';
import GameMode from './components/GameMode';
import Settings from './components/Settings'; // Import Settings component
import './App.css';

function App() {
  const [screen, setScreen] = useState(localStorage.getItem('currentScreen') || 'welcome');
  const [showSettings, setShowSettings] = useState(false); // State for Settings modal

  useEffect(() => {
    localStorage.setItem('currentScreen', screen);
  }, [screen]);

  const handleSettingsOpen = () => setShowSettings(true);
  const handleSettingsClose = () => setShowSettings(false);

  const renderScreen = () => {
    switch (screen) {
      case 'login':
        return <Login setScreen={setScreen} />;
      case 'signup':
        return <Signup setScreen={setScreen} />;
      case 'gameMode':
        return <GameMode setScreen={setScreen} />;
      case 'welcome':
      default:
        return <WelcomeScreen setScreen={setScreen} />;
    }
  };

  return (
    <div className="App">
      {renderScreen()}
      {showSettings && <Settings closeSettings={handleSettingsClose} />} {/* Display Settings modal */}
      <button className="settings-button" onClick={handleSettingsOpen}>Settings</button> {/* Button to open Settings */}
    </div>
  );
}

export default App;
