import React, { useRef, useState } from 'react';
import './Color.css';

const Color = () => {
    let [color, setColor] = useState("");

    let h1Ref = useRef();
    let inputRef = useRef();
    let boxRef = useRef();

    let changeColor = () => {
        h1Ref.current.style.color = inputRef.current.value;
        boxRef.current.style.backgroundColor = inputRef.current.value;
        setColor(inputRef.current.value);
    };

    return (
        <div className="color-container">
            <h1 ref={h1Ref} className="color-heading">
                Hi! JSPIDERS
            </h1>

            <div ref={boxRef} className="color-box"></div>

            <div className="color-input-area">
                <input
                    ref={inputRef}
                    type="text"
                    name="color"
                    placeholder="Enter Color"
                    className="color-input"
                />
                <button type="submit" onClick={changeColor} className="color-button">
                    Change
                </button>
            </div>
        </div>
    );
};

export default Color;