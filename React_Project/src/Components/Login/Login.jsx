import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username or Email</label>
                    <input type="text" id="username" placeholder="Enter your username or email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="login-button">Login</button>
                <div className="form-links">
                    <a href="/forgot-password"> <Link to={"/forgot"}>Forgot Password?</Link> </a>
                    <p>Don't have an account? <Link to={"/register"}> Sign Up</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default Login;