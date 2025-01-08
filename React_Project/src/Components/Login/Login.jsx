import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [state, setState] = useState({
        username: '',
        password: '',
    });

    const { username, password } = state;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username or Email</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        placeholder="Enter your username or email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
                <div className="form-links">
                    <Link to={"/forgot"}>Forgot Password?</Link>
                    <p>Don't have an account? <Link to={"/register"}> Sign Up</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default Login;