import React from 'react';
import about from '../../Images/about.jpg'
import './About.css'

const About = () => {
    return (
        // About Section
        <div className=" container about-container">
            <div className="row d-flex align-items-center about-section">
                {/* About Images */}
                <div className='col-lg-6 col-md-6 col-12'>
                    <img src={about} className="w-100" alt="" />
                </div>
                <div className='col-lg-6 col-md-6 col-12' >
                    {/* About Details */}
                    <div className=''>
                        <h3>About Us</h3>
                        <h4 className='about-details'>Everything in the small town of Moab evolves around outdoor activities. During the high season hundreds of thousands of visitors are pulled in by the spectacular nature. Dirk Rohrbach set out to explore.</h4>
                        <h6 className='mb-3'>On the other hand, we denounce with righteous indignation the foult anuals dislike men who are so beguiled and demoralized by the nuhaiicharms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound toen sue; and equal blame belongs to those who fail in their duty.</h6>
                        <button type="button" className="btn btn-outline-primary px-5 py-2 rounded-pill">Read More <i className="fas fa-long-arrow-alt-right"></i> </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;