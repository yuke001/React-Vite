import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(props) {
        super(props)
        console.log(this.props);
    }
    render() {
        return (
            <div className='cart'>

                <h1>{this.props.data.count}</h1>
                <button onClick={this.props.btn1}>Increment</button>
                <button onClick={this.props.btn2}>Decrement</button>
            </div>
        )
    }
}