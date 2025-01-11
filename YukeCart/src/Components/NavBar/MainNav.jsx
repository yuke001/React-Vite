import React from 'react';
import { Link, Outlet,useParams } from 'react-router-dom';
import './MainNav.css';

const MainNav = () => {
    return (
        <div>
            <div id='nav'>
                <div className='logo-section'>
                    <div style={{ color: 'purple', fontWeight: 'bold', fontSize: 30 }}> <Link style={{ textDecoration: 'none' }} to={"/"}>Home</Link> </div>
                    <div className="location-select">
                        Location
                        <select>
                            <option value="location1">Rajajinagar</option>
                            <option value="location2">Vijayanagar</option>
                        </select>
                    </div>
                </div>
                <div className="search-container">
                    <input type="text" placeholder="Search for" />
                </div>
                <div className="auth-actions">
                    <Link to={"/login"}>
                        <i className="fa fa-user"></i>
                        Login
                    </Link>
                    <Link to={"/register"}>
                        <i className="fa fa-register"></i>
                        Register
                    </Link>
                    <Link to={"/cart"}>
                        <i className="fa fa-shopping-cart"></i>
                        Cart
                    </Link>
                </div>

            </div>
           


            <div id='main'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainNav;