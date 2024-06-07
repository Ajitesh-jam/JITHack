import React, { useState } from "react";
import { navigate } from "react-router-dom"; // Import navigate function
import "./LoginCard.css";

const LoginCard = () => {
  const [username, setUsername] = useState(""); // State for storing the username

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Navigate to the URL with the username parameter
    navigate(`/${username}/Buy`);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value); // Update the username state as the user types
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {" "}
        {/* Call handleLogin function on form submission */}
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username} // Bind input value to username state
            onChange={handleUsernameChange} // Call handleUsernameChange function on input change
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
