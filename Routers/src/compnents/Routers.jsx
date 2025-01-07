import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../App.css"


const Routers = () => {
    return (
        <div>
            <nav id='nav'>

                <Link className='link' to="/home">HOME</Link>
                <Link className='link' to="/cart">CART</Link>
                <Link className='link' to="/about">ABOUT</Link>
                <Link className='link' to="/order">ORDER</Link>

            </nav>

            <div id='out'>
                <Outlet></Outlet>
            </div>



        </div>
    )
}

export default Routers