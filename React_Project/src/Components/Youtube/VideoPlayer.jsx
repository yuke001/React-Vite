import React from 'react';
import VideoItems from './VideoItems';
import Player from './Player';


const VideoPlayer = ({ state, player, play }) => {
    return (
        <div className="video-player-container">
            <div className="player-section">
                <Player player={player}></Player>
            </div>
            <div className="playlist-section">
                {state.map((data) => (
                    <VideoItems key={data.id} data={data} play={play}></VideoItems>
                ))}
            </div>
        </div>
    );
};

export default VideoPlayer;