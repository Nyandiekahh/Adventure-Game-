import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import './GameModeSelection.css';

const GameModeSelection = ({ setScreen }) => {
  return (
    <div className="game-mode-selection">
      <h2>Select Your Game Mode</h2>
      
      {/* Cards for game mode selection */}
      <div className="cards-container">
        <div className="card" onClick={() => setScreen('singlePlayer')}>
          <FontAwesomeIcon icon={faUser} size="4x" className="card-icon" />
          <h3>Single Player</h3>
          <p>Play the game solo and embark on your own adventure!</p>
        </div>
        <div className="card" onClick={() => setScreen('multiplayer')}>
          <FontAwesomeIcon icon={faUsers} size="4x" className="card-icon" />
          <h3>Multiplayer</h3>
          <p>Play with friends or join other players in real-time!</p>
        </div>
      </div>

      {/* Buttons for game mode selection */}
      <div className="buttons-container">
        <button className="game-mode-button" onClick={() => setScreen('singlePlayer')}>
          Start Single Player
        </button>
        <button className="game-mode-button" onClick={() => setScreen('multiplayer')}>
          Start Multiplayer
        </button>
      </div>
    </div>
  );
};

export default GameModeSelection;
