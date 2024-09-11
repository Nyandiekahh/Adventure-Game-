// src/components/Signup.js

import React, { useState } from 'react';
import './LoginSignup.css';

const Signup = ({ setScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Add logic to handle signup, and then navigate to game mode selection
    console.log('Email:', email);
    console.log('Password:', password);
    setScreen('gameMode');
  };

  return (
    <div className="form-container">
      <h2>Create a new account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <button className="btn" onClick={() => setScreen('welcome')}>Back</button>
    </div>
  );
};

export default Signup;
