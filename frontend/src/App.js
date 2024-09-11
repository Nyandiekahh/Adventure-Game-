import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Login from './components/Login';
import Signup from './components/Signup';
import GameMode from './components/GameMode';
import './App.css';

function App() {
  const [screen, setScreen] = useState(localStorage.getItem('currentScreen') || 'welcome');

  useEffect(() => {
    localStorage.setItem('currentScreen', screen);
  }, [screen]);

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
    </div>
  );
}

export default App;
