import React, { useState } from 'react';
import './LoginSignup.css';

const Login = ({ setScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const validCredentials = [
      { email: 'testuser1@example.com', password: 'password123' },
      { email: 'testuser2@example.com', password: 'password456' }
    ];

    const user = validCredentials.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (user) {
      // Redirect to Game Mode Selection after successful login
      setScreen('gameModeSelection');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="form-container">
      <h2>Login to your account</h2>
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="btn">Login</button>
      </form>
      <button className="btn" onClick={() => setScreen('welcome')}>Back</button>
    </div>
  );
};

export default Login;
