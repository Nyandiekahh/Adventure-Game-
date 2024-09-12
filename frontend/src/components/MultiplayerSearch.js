// src/components/MultiplayerSearch.js

import React, { useState } from 'react';
import axios from 'axios';
import './MultiplayerSearch.css';

const MultiplayerSearch = ({ setScreen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios.get(`http://localhost:5000/searchPlayers?query=${searchTerm}`)
      .then(response => {
        setSearchResults(response.data);
      })
      .catch(error => {
        console.error('Error searching for players!', error);
      });
  };

  const handleJoinGame = (player) => {
    // Handle the logic for joining the game with the selected player
    console.log(`Joining game with ${player.name}`);
    setScreen('gamePlay'); // Proceed to the gameplay screen
  };

  return (
    <div className="multiplayer-search-container">
      <h2>Search for a Player</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter player name or ID"
      />
      <button onClick={handleSearch}>Search</button>

      <div className="search-results">
        {searchResults.map(player => (
          <div key={player.id} className="player-item" onClick={() => handleJoinGame(player)}>
            <h3>{player.name}</h3>
            <p>Level: {player.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiplayerSearch;
