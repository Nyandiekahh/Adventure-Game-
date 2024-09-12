// src/components/CharacterSelection.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from './BackButton'; // Import the BackButton component
import './CharacterSelection.css';

const CharacterSelection = ({ setScreen, setSelectedCharacter }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setLocalSelectedCharacter] = useState(null); // Local state for selected character

  useEffect(() => {
    axios.get('http://localhost:5000/characters')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the characters!', error);
      });
  }, []);

  const handleCharacterSelect = (character) => {
    setLocalSelectedCharacter(character); // Set selected character locally
  };

  const handleStartGame = () => {
    if (selectedCharacter) {
      setSelectedCharacter(selectedCharacter); // Pass the selected character to the main app state
      setScreen('gamePlay'); // Change to gameplay screen
    }
  };

  return (
    <div className="character-selection-container">
      <BackButton onClick={() => setScreen('gameModeSelection')} /> {/* Back to GameModeSelection */}
      <h2>Select Your Character</h2>
      <div className="character-list">
        {characters.map(character => (
          <div
            key={character.id}
            className="character-item"
            onClick={() => handleCharacterSelect(character)} // Trigger selection
          >
            <h3>{character.name}</h3>
            <p>Strengths: {character.strengths.join(', ')}</p>
            <p>Weaknesses: {character.weaknesses.join(', ')}</p>
          </div>
        ))}
      </div>

      {/* Conditionally render the details and Start Game button */}
      {selectedCharacter && (
        <div className="character-details">
          <h3>Selected Character: {selectedCharacter.name}</h3>
          <p><strong>Strengths:</strong> {selectedCharacter.strengths.join(', ')}</p>
          <p><strong>Weaknesses:</strong> {selectedCharacter.weaknesses.join(', ')}</p>

          {/* Render the Start Game button once a character is selected */}
          <button className="character-button" onClick={handleStartGame}>
            Start Game
          </button>
        </div>
      )}
    </div>
  );
};

export default CharacterSelection;
