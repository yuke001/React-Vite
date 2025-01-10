import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [state, setState] = useState({
        username: "",
        email: "",
        mobile: "",
        location: "",
        address: "",
        password: "",
        confirmPassword: "",
    });

    const { username, email, mobile, location, address, password, confirmPassword } = state;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = { username, email, mobile, location, address, password, confirmPassword };
            const { data } = await axios.post("http://localhost:3000/users", payload);
            console.log(data);
             setState({
                username: "",
                email: "",
                mobile: "",
                location: "",
                address: "",
                password: "",
                confirmPassword: "",
            })
            
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={mobile}
                        onChange={handleChange}
                        
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <select
                        id="location"
                        name="location"
                        value={location}
                        onChange={handleChange}
                        
                    >
                        <option value="">Select Location</option>
                        <option value="location1">Location 1</option>
                        <option value="location2">Location 2</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        value={address}
                        onChange={handleChange}
                        
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;