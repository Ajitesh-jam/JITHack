import React from 'react';
import './Footer.css'; // Import additional CSS for Footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} DropShip. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
