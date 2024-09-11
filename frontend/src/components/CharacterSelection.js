// src/components/CharacterSelection.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterSelection.css';

const CharacterSelection = ({ setScreen }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    // Fetch characters from the backend
    axios.get('http://localhost:5000/characters') // Ensure the URL matches your backend route
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the characters!', error);
      });
  }, []);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    // Proceed to the next screen or perform an action
  };

  return (
    <div className="character-selection-container">
      <h2>Select Your Character</h2>
      <div className="character-list">
        {characters.map(character => (
          <div
            key={character.id}
            className="character-item"
            onClick={() => handleCharacterSelect(character)}
          >
            <h3>{character.name}</h3>
            <p>Strengths: {character.strengths.join(', ')}</p>
            <p>Weaknesses: {character.weaknesses.join(', ')}</p>
            {/* Add more character details as needed */}
          </div>
        ))}
      </div>
      {selectedCharacter && (
        <div className="character-details">
          <h3>Selected Character: {selectedCharacter.name}</h3>
          <button className="character-button" onClick={() => setScreen('gamePlay')}>Start Game</button>
        </div>
      )}
    </div>
  );
};

export default CharacterSelection;
