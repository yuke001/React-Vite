import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav-container">
      <div id='main'>

        <Link className='link' to="/">HOME</Link>
        {/* <Link className='link' to="/cart">CART</Link> */}
        {/* <Link className='link' to="/order">ORDER</Link> */}
        <Link className='link' to="/register">REGISTER</Link>
        <Link className='link' to="/login">LOGIN</Link>

        <Link className='link' to="/game">Game</Link>
        <Link className='link' to="/youtube">Youtube</Link>
        <Link className='link' to="/dashboard">Dashboard</Link>
        <Link className='link' to="/video">Video</Link>

      </div>

      <div id='out'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Nav