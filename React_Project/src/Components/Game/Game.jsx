import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Game.css'

const Game = () => {
    return (
        <div id='game'>
            <Link className='link' to={"/game/bulb"}>Bulb</Link>
            <Link className='link' to={"/game/color"}>Color</Link>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Game