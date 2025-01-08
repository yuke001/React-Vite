import React from 'react';
import './TopNav.css'; 
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="logo-container">
        {/* <Link to="/"> </Link> */}
        <a href="http://localhost:5173/"> <img src="../../../public/logo.png" className="logo" /></a>
       
      </div>
    </nav>
  );
};

export default TopNav;