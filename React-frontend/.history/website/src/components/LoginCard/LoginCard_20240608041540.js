import React from "react";
import { useHistory } from "react-router-dom";
import "./LoginCard.css";

const LoginCard = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    history.push(`/${username}/Buy`);
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginCard;
