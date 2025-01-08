// import React from 'react';
// import './Signup.css';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//     return (
//         <div className="signup-container">
//             <h2>Sign Up</h2>
//             <form className="signup-form">
//                 <div className="form-group">
//                     <label htmlFor="username">Username or Email</label>
//                     <input type="text" id="username" placeholder="Enter your username or email" required />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password" placeholder="Enter your password" required />
//                 </div>
//                   <div className="form-group">
//                     <label htmlFor="confirmPassword">Confirm Password</label>
//                     <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
//                 </div>
//                 <button type="submit" className="signup-button">Sign Up</button>
//                 <div className="form-links">
//                      <p>Already have an account? <Link to={"/login"}>Login</Link> </p>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Signup;

import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [state, setState] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const { username, password, confirmPassword } = state;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
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
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm your password"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
                <div className="form-links">
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;