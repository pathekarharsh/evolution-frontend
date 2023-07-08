import React, { useState } from 'react';
import './ScanLogin.css';

function ScanLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Process login logic here
    console.log('Scan Email:', email);
    console.log('Password:', password);

    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Scan Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Scan Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default ScanLoginPage;
