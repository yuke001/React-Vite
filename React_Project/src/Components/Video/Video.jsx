import React from 'react'

const Video = () => {
    return (
        <div>
            <h1>video</h1>
            <div id='video'>
                <video className="background-video" autoPlay loop muted>
                    {/* <source src="./bg_video.mp4" type="video/mp4" /> */}
                    <source src="/bg_video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>

            </div>
        </div>
    )
}

export default Video