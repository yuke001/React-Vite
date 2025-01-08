import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;