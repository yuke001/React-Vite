import React, { Component } from 'react'
import Box1 from './Box1'
import Box2 from './Box2'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav id='nav'>
                    <Box1></Box1>
                    <Box2></Box2>
                </nav>

            </div>
        )
    }
}
