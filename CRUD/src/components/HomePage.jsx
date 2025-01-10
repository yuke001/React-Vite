import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomePage = () => {
    return (
        <main>
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
            </ul>
        </div>

        <div><Outlet></Outlet></div>


        </main>

       
        
    )
}

export default HomePage