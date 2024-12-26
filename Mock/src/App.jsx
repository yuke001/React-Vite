import React, { useState } from 'react';

const App = () => {
  let [color, setColor] = useState(
    "/off.jpg" //
  );

  let onColor = () => {
    setColor(
      "/on.jpeg"
    );
  };

  let offColor = () => {
    setColor(
      "/off.jpg"
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Bulb</h1>
      <img src={color} style={{ width: "100px", height: "100px", display: "block", margin: "0 auto" }}
      />
      <br />
      <button onClick={onColor}>ON</button>
      <button onClick={offColor}>OFF</button>
    </div>
  );
};

export default App;
