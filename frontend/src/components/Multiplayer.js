// src/components/Multiplayer.js

import React from 'react';

const Multiplayer = ({ setScreen }) => {
  return (
    <div>
      <h2>Multiplayer Mode</h2>
      <button onClick={() => setScreen('characterSelection')}>Select Character</button>
    </div>
  );
};

export default Multiplayer;
