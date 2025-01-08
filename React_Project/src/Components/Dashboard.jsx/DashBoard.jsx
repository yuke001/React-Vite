import React from 'react';
import './DashBoard.css';

const DashBoard = () => {
    return (
        <div className="dashboard">
            {/* <video className="background-video" autoPlay loop muted>
                <source src="./bg_video.mp4" type="video/mp4" />
                <source src="/bg_video.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video> */}

            <div className="content">
                <h2>DashBoard</h2>

                <div className='container1'>
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                </div>

                <hr />

                <div className='container2'>
                    <div className="box1"></div>
                    <div className="box2"></div>
                </div>

                <hr />

                <div className='container3'>
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;


