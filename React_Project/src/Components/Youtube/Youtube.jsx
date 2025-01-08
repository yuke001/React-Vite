import React, { Fragment, useState } from 'react';
import VIDEO from "./video.json";
import VideoPlayer from "./VideoPlayer"
import "./Youtube.css"
import { Outlet } from 'react-router-dom';


const Youtube = () => {
    let [state, setState] = useState(VIDEO);
    let [player, setPlayer] = useState(state[0]);
    console.log(state);


    let handlePlay = (rio) => {
        setPlayer(rio.videoUrl);
    };

    return (
        <Fragment>
            <h2>Youtube</h2>
            <div id='youtube'> 
                <VideoPlayer state={state} player={player} play={handlePlay}></VideoPlayer>
            </div>   
        </Fragment>
    )
}

export default Youtube;