import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
    const [state, setState] = useState({
        name: "",
        password: ""
    });

    const { name, password } = state;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = { name, password };
            const { data } = await axios.post("http://localhost:3000/users", payload);
            console.log(data);
           setState({
                name: "",
                password: ""
            })

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='login-container'>
        <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                   <label htmlFor="username">UserName</label>
                   <input type="text" name='name' value={name} onChange={handleChange} />
               </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default LoginPage;