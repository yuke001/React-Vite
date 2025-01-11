import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
    return (
        <main>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
                       
                    <li><Link to="/pages/1">Page1</Link></li>
                    <li><Link to="/pages/2">Page2</Link></li>
                    <li><Link to="/pages/3">Page3</Link></li>
                    <li><Link to="/pages/4">Page4</Link></li>


            <div><Outlet></Outlet></div>


        </main>



    )
}

export default HomePage