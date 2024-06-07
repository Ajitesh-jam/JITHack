

import React from 'react';
import './Header.css';
import backgroundImage from '../assets/images/selling.jpeg'; // Adjust the path based on your file structure
      
const Header = () => {
return (
    <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="overlay">
    <h1>Say Yes to Creativity</h1><br></br>

<p>Welcome to our marketplace, where creativity meets convenience. Explore an array of meticulously crafted skins and rifles designed by independent artists, offering a solution to the time constraints of creativity.<br></br> With the added security of blockchain technology, indulge in an unhindered exchange of unique commodities unlike any other.</p>

    </div>
    </header>
);
};

export default Header;