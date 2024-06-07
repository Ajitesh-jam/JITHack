

import React from 'react';
import './HeaderSell.css';
import backgroundImage from '../assets/images/selling.jpeg'; // Adjust the path based on your file structure
      
const Header = () => {
return (
    <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="overlay">
    <h1>Sell Page</h1>
    <p> </p>
    <p> </p>
    <p> </p>

    </div>
    </header>
);
};

export default Header;
