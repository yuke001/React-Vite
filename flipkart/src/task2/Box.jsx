import React, { Component } from 'react'
import Box1 from './Box1'
import Box2 from './Box2'

export default class Box extends Component {
    render() {
        return (
            <div>
                <nav id='box'>
                    <Box1></Box1>
                    <Box2></Box2>

                </nav>
            </div>
        )
    }
}
