import React, { useState } from 'react'

const App = () => {

  // count increment  
  let [count, setCount] = useState(0)

  let changeCount = () => {
    setCount(count + 1)
  }

  // name change
  let [name, setName] = useState("JavaScript")

  let changeName = () => {
    setName("React JS")
  }

  // color change
  let [color, setColor] = useState("blue")

  let changeColor = () => {
    setColor("red")
  }


  return (
    <div style={{ textAlign: "center" }}>

      <h1>{count}</h1>
      <button onClick={changeCount}>Click</button> <br /><br />

      <h1>{name}</h1>
      <button onClick={changeName}>changeName</button><br /><br />


      <div style={{ backgroundColor: color, width: "100px", height: "100px", margin: "0 auto" }}></div> <br />
      <button onClick={changeColor}>changeColor</button>

    </div>
  )
}

export default App