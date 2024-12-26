import React, { useState } from 'react';

const Bulb = () => {
    const [isOn, setIsOn] = useState(false);

    const handleCircleClick = () => {
        setIsOn(!isOn);
    };

    const handleOnClick = () => {
        setIsOn(true);
    };

    const handleOffClick = () => {
        setIsOn(false);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <div
                onClick={handleCircleClick}
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: isOn ? 'yellow' : 'gray',
                    margin: '0 auto',
                    cursor: 'pointer'
                }}
            ></div>
            <div style={{ marginTop: '20px' }}>
                <button onClick={handleOnClick}>On</button>
                <button onClick={handleOffClick} style={{ marginLeft: '10px' }}>Off</button>
            </div>
        </div>
    );
};

export default Bulb;