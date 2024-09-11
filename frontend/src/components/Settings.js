// src/components/Settings.js
import React, { useState } from 'react';
import './Settings.css';

const Settings = ({ closeSettings }) => {
  const [difficulty, setDifficulty] = useState('medium');
  const [sound, setSound] = useState(true);
  const [graphics, setGraphics] = useState('high');

  const handleSave = () => {
    // Handle saving settings, e.g., update state or send to backend
    console.log('Settings saved:', { difficulty, sound, graphics });
    closeSettings(); // Close the settings modal
  };

  return (
    <div className="settings-overlay">
      <div className="settings-container">
        <h2>Game Settings</h2>
        <div className="settings-option">
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="settings-option">
          <label htmlFor="sound">Sound:</label>
          <input
            type="checkbox"
            id="sound"
            checked={sound}
            onChange={() => setSound(!sound)}
          />
        </div>
        <div className="settings-option">
          <label htmlFor="graphics">Graphics:</label>
          <select
            id="graphics"
            value={graphics}
            onChange={(e) => setGraphics(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="settings-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={closeSettings}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
