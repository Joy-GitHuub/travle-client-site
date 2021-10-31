import React from 'react';
import './ContactUS.css'

const ContactUs = () => {
    return (
        <div>
            {/* Contact Us.... */}
            <h2 className='text-center text-primary'>Contact Us</h2>
            <div className="contact-area">
                <div className="container p-5">
                    <div className="row d-flex align-items-center shadow-lg bg-white mx-auto">
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                            <img width="200px" src='https://user-registration-system-7334f.web.app/static/media/contact-img.bcaebac8.jpg' alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center form">
                            <form>
                                <input type="text" placeholder="Enter Your Name..." required /><br /><br />
                                <input type="email" placeholder="Enter Your Email...." required /><br /><br />
                                <textarea type="text" placeholder="Write Your Message..." required /><br /><br />
                                <button className="btn btn-dark">Send Message <i className="fas fa-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;