// src/App.js

import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Login from './components/Login';
import Signup from './components/Signup';
import GameModeSelection from './components/GameModeSelection';
import SinglePlayer from './components/SinglePlayer';
import MultiplayerSearch from './components/MultiplayerSearch'; // Import the search component
import CharacterSelection from './components/CharacterSelection';
import Settings from './components/Settings';
import './App.css';

function App() {
  const [screen, setScreen] = useState('welcome');
  const [showSettings, setShowSettings] = useState(false);

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
      case 'gameModeSelection':
        return <GameModeSelection setScreen={setScreen} />;
      case 'singlePlayer':
        return <SinglePlayer setScreen={setScreen} />;
      case 'multiplayer':
        return <MultiplayerSearch setScreen={setScreen} />; // New multiplayer search
      case 'characterSelection':
        return <CharacterSelection setScreen={setScreen} />;
      case 'welcome':
      default:
        return <WelcomeScreen setScreen={setScreen} />;
    }
  };

  return (
    <div className="App">
      {renderScreen()}
      {showSettings && <Settings closeSettings={handleSettingsClose} />}
      <button className="settings-button" onClick={handleSettingsOpen}>Settings</button>
    </div>
  );
}

export default App;
