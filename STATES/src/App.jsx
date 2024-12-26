// import React, { Component } from 'react'
// import Cart from './assets/Cart'

// export default class App extends Component {
//   constructor() {
//     super()
//     // state - data
//     this.state = {
//       name: "yuke",
//       count: 0
//     }

//   }
//   // function
//   changeName = () => {
//     // this.setState({ name: "sundar", count: this.count + 1 })
//     this.setState({ name: "sundar", count: this.state.count +1 })
//   }
//   render() {
//     return (
//       <div>
//         <Cart data={this.state} btn={this.changeName}></Cart>
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'
import Cart from './assets/Cart'
import './App.css'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  // increment

  increment = () => {
    this.setState({ count: this.state.count + 1 })
    if (this.state.count >= 0 && this.state.count <= 4) {
      document.body.style.backgroundColor = "red"
    } else {
      document.body.style.backgroundColor = "blue"
    }

  }
  decrement = () => {
    this.setState({ count: this.state.count - 1 })
    if (this.state.count >= 0 && this.state.count <= 4) {
      document.body.style.backgroundColor = "red"
    } else {
      document.body.style.backgroundColor = "blue"
    }


  }

  render() {
    return (
      <div id='main'>
        <Cart data={this.state} btn1={this.increment} btn2={this.decrement}></Cart>
      </div>
    )
  }
}