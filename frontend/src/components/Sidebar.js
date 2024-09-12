// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import your CSS for the sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Game Menu</h2>
      <ul>
        <li><Link to="/">Welcome</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/gameModeSelection">Game Mode Selection</Link></li>
        <li><Link to="/singlePlayer">Single Player</Link></li>
        <li><Link to="/multiplayer">Multiplayer</Link></li>
        <li><Link to="/characterSelection">Character Selection</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
