import React, { Component } from 'react'
import Box1mini01 from './Box1mini01'
import Box1mini02 from './Box1mini02'

export default class Box1 extends Component {
    render() {
        return (
            <div id='box1'>Box1
                <Box1mini01></Box1mini01>
                <Box1mini02></Box1mini02>
            </div>
        )
    }
}
