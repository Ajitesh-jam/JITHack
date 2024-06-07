import React from 'react';
import './LoginCard.css';

const LoginCard = () => {
  return (
    <div className="login-card">
      <h2>Login</h2>
      <form>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />
        </div>
        
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginCard;