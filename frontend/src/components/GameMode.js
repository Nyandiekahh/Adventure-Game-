import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import './GameMode.css';

const GameMode = () => {
  const navigate = useNavigate();

  return (
    <div className="game-mode-container">
      <h2>Select Game Mode</h2>
      <div className="card-container">
        <div className="game-card" onClick={() => navigate('/single-player')}>
          <FontAwesomeIcon icon={faUser} size="4x" className="game-icon" />
          <h3>Single Player</h3>
        </div>
        <div className="game-card" onClick={() => navigate('/multi-player')}>
          <FontAwesomeIcon icon={faUsers} size="4x" className="game-icon" />
          <h3>Multiplayer</h3>
        </div>
      </div>
      <button className="btn" onClick={() => navigate('/login')}>Back to Login</button>
    </div>
  );
};

export default GameMode;
