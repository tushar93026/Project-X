import React, { useState } from 'react';

function FinanceLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here using email and password
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Finance Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <a href="#">Forgot Password?</a>
        <button type="submit">Login</button>
        <p>New User? <a href="#">Register</a></p>
      </form>
    </div>
  );
}

export default FinanceLogin;