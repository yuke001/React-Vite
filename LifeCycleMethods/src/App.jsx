import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  // componentDidMount

  // componentDidMount = () => {
  //   document.title = `Clicked ${this.state.count} times`;
  //   alert("Accept Cookies");
  // }


  // componentDidUpdate

  // componentDidUpdate = () => {
  //   document.title = `Clicked ${this.state.count} times`;
  //   alert("I will execute every time the component updates");
  // }

  // componentWillUnmount

  // componentWillUnmount = () => {
  //   alert("I will execute when the component is removed from the DOM");
  // }




  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>

      </div>
    )
  }
}


