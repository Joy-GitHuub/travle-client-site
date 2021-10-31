import React from 'react';
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner-section mb-5 '>
            {/* Banner Sectionn */}
            <div className='banner-header text-center'>
                <h1 className='text-light'>Greate Trip
                    for Solo Travellers</h1>
                <h5 className='text-light'>
                    Since 2014, we’ve helped more than 500,000 people of all <br /> ages enjoy the best outdoor experience.</h5>


                <button type="button" className="btn text-light btn-outline-primary mt-5  px-5 py-2 rounded-pill">EXPLORE TOURS <i className="fas fa-long-arrow-alt-right"></i></button>
            </div>
        </div>
    );
};

export default Banner;