import React from 'react';
import './Forgot.css';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <div className="fogot-container">
      <h2>Forgot Password</h2>
      <form className="fogot-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <button type="submit" className="fogot-button">Submit</button>
        <div className="form-links">
          <p>  <Link to={"/login"}>Back to Login</Link> </p>
        </div>
      </form>
    </div>
  );
};

export default Forgot;