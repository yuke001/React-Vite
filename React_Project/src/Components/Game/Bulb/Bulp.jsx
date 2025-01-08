import React, { useState } from 'react';
import "./Bulb.css";

const Bulb = () => {
    let [color, setColor] = useState(
        "/off.jpg"
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
        <div className="bulb-container">
            <h1>Bulb</h1>
            <img src={color} alt="Bulb" />
            <br />
            <button onClick={onColor}>ON</button>
            <button onClick={offColor}>OFF</button>
        </div>
    );
};

export default Bulb;