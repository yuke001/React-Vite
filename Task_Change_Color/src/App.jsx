import React, { useRef, useState } from 'react'

const App = () => {

  let [color, setColor] = useState("")

  let h1Ref = useRef();
  let inputRef = useRef();

  let changeColor = () => {

    h1Ref.current.style.color = inputRef.current.value;

  }

  return (
    <div style={{ display: "flex", justifyContent: 'space-evenly', alignItems: 'center', flexDirection: "column" }}>

      <h1 name="color" ref={h1Ref}>Hi! JSPIDERS</h1>

      <div className="input" style={{ display: "flex", justifyContent: 'space-around', alignItems: 'center' }}>

        <input ref={inputRef} type="text" name='color' placeholder='Enter Color' />
        <button type='submit' onClick={changeColor}>Change</button>

      </div>
    </div>
  )
}

export default App