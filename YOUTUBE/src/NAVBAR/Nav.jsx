import React, { Component } from 'react'
import Logo from './Logo'
import Home from './Home'
import About from './About'
import Cart from './Cart'
export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav id='nav'>

                    <Logo></Logo>
                    <Home></Home>
                    <About></About>
                    <Cart></Cart>

                </nav>
            </div>
        )
    }
}
