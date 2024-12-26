import React, { Component } from 'react'
import MiniBox1 from './MiniBox1'
import MiniBox2 from './MiniBox2'

export default class Box1 extends Component {
    render() {
        return (
            <div id='box1'>
                <div id='minibox1'>
                    <div class="tinybox">

                    </div>
                    <div class="tinybox"></div>
                </div>
                <div id='minibox2'>
                    <div class="tinybox"></div>
                    <div class="tinybox"></div>
                </div>



            </div>
        )
    }
}
