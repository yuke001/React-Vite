// Banner.jsx
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-content'>
                <h1 className='banner-title'>Paan Corner</h1>
                <p className='banner-description'>Smoking Accessories, Mints & More</p>
                <button className='banner-button'>Order Now</button>
            </div>
        </div>
    );
};

export default Banner;