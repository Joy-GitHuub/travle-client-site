import React from 'react';
import './TrendingEvent.css'

const TrendingEvent = () => {
    return (
        <div className='mb-5 '>
            <h6 className='text-center mb-5'>Trending Event of The Week</h6>

            <div className='row row-cols-1 row-cols-md-3 g-4 container  mx-auto trending-bg  py-5' >
                <div className='col-lg-3 col-md-3 col-6 '>
                    <h5><i className="fas fa-map-marker-alt"></i> 584</h5>
                    <h6>Top Local Guides</h6>
                </div>
                <div className='col-lg-3 col-md-3 col-6 '>
                    <h5><i className="fas fa-sun"></i> 7,410</h5>
                    <h6>Winter Destinations</h6>
                </div>
                <div className='col-lg-3 col-md-3 col-6 '>
                    <h5><i className="far fa-plus-square"></i> 680</h5>
                    <h6>New Tours</h6>
                </div>
                <div className='col-lg-3 col-md-3 col-6 '>
                    <h5><i className="fas fa-smile-wink"></i> 2,540</h5>
                    <h6>Happy Travelers</h6>
                </div>

            </div>
        </div>
    );
};

export default TrendingEvent;