import React from 'react';

const Player = (props) => {
    return (
        <div className="player-wrapper">
            <video className="video-player" autoPlay controls src={props.player}></video>
        </div>
    );
};

export default Player;
