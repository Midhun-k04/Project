// LoginPage.js
import React from 'react';
import './LoginPage.css';

function LoginPage({ onLogin, onClose }) {
  const handleLogin = () => {
    // Assuming some validation logic here
    // If successful, call the onLogin callback
    onLogin();
  };

  const handleSignUp = () => {
    // Add your sign-up logic here
    console.log("Sign-up logic will go here");
  };

  return (
    <div className="login-page-overlay">
      <div className="login-page">
        <h2>Login</h2>
        <form>
          <div className="form-input">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-actions">
            <button type="button" onClick={handleLogin}>Login</button>
           
          </div>
        </form>
        
      </div>
    </div>
  );
}

export default LoginPage;
