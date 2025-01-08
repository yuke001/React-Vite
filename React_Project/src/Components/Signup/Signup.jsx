import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form className="signup-form">
                <div className="form-group">
                    <label htmlFor="username">Username or Email</label>
                    <input type="text" id="username" placeholder="Enter your username or email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
                <div className="form-links">
                     <p>Already have an account? <Link to={"/login"}>Login</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;