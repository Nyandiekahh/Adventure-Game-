import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SinglePlayer.css';

const SinglePlayer = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characterDetails, setCharacterDetails] = useState(null);

  useEffect(() => {
    // Fetch characters from the backend
    axios.get('http://127.0.0.1:5000/characters')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the characters!', error);
      });
  }, []);

  useEffect(() => {
    if (selectedCharacter) {
      // Fetch character details when a character is selected
      axios.get(`http://127.0.0.1:5000/characters/${selectedCharacter}`)
        .then(response => {
          setCharacterDetails(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the character details!', error);
        });
    }
  }, [selectedCharacter]);

  return (
    <div className="single-player">
      <h2>Select Your Character</h2>
      <div className="character-list">
        {characters.map(character => (
          <div key={character.id} className="character-card" onClick={() => setSelectedCharacter(character.id)}>
            <h3>{character.name}</h3>
            <p>{character.strengths.join(', ')}</p>
          </div>
        ))}
      </div>
      {characterDetails && (
        <div className="character-details">
          <h2>{characterDetails.name}</h2>
          <h3>Strengths</h3>
          <ul>
            {characterDetails.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
          <h3>Weaknesses</h3>
          <ul>
            {characterDetails.weaknesses.map((weakness, index) => (
              <li key={index}>{weakness}</li>
            ))}
          </ul>
          {/* Add further action selection and gameplay here */}
        </div>
      )}
    </div>
  );
};

export default SinglePlayer;
