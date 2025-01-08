import React from 'react';

const VideoItems = (props) => {
    console.log(props.play);

    const { thumbnailUrl, title } = props.data;

    return (
        <div className="video-item" onClick={() => props.play(props.data)}>
            <img src={thumbnailUrl} alt={title} className="video-thumbnail" />
            <h1 className="video-title">{title}</h1>
        </div>
    );
};

export default VideoItems;
