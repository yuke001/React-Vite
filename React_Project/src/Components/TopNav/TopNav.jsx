import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="logo-container">
        <a href="http://localhost:5173/"> <img src="/logo.png" className="logo" alt="Logo" /></a>
        
      </div>
      <h1>Yuke</h1>
      <div className="auth-buttons">

        {/* <a href="http://localhost:5173/login"><button className="auth-button"> Login </button></a>
        <a href="http://localhost:5173/register"><button className="auth-button"> Signup </button></a> */}


        {/* <button className="auth-button"> Login </button>
        <button className="auth-button"> Signup </button> */}

        {/* <Link to="/login" className="auth-button">Login</Link>
        <Link to="/signup" className="auth-button">Sign Up</Link> */}


      </div>


    </nav>


  );
};

export default TopNav;
