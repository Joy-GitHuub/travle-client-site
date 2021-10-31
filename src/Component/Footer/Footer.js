import React from 'react';
import { Link as div } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        // Footer Section....
        <div className="footer mt-5 " >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 pt-5 pb-5">
                        <div className="navbar-brand text-dark ">
                            <img className="img-fluid rounded-circle text-light footer-item" width="55" alt="" /> <span className='text-light'><span className="fw-bold text-light  fs-2 "></span  >ODISS-TRAVLE</span>
                        </div>
                        <br />
                        <div className="mt-4 p-2">
                            <img src="https://www.kindpng.com/picc/m/22-223188_facebook-icon-red-png-png-download-green-facebook.png" className="img-fluid rounded-circle me-3" width="40" alt="" />
                            <img src="https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk" className="img-fluid rounded-circle me-3" width="40" alt="" />
                            <img src="https://yt3.ggpht.com/ytc/AKedOLQOxbU9dZGL0XnLXMzWRRZiW7elSPl4JguWrcYfaxE=s900-c-k-c0x00ffffff-no-rj" className="img-fluid rounded-circle me-3" width="40" alt="" />
                        </div>
                    </div>
                    {/* Web site Footer Section */}
                    <div className="col-lg-3 pt-5 pb-5">
                        <h3 className="fw-bold pb-3">Company</h3>
                        <h6 className="p-0 m-0 footer-item">About Us</h6>
                        <h6 className="p-0 m-0 footer-item">Community Blog</h6>
                        <h6 className="p-0 m-0 footer-item">Rewards</h6>
                        <h6 className="p-0 m-0 footer-item">Work with US</h6>
                        <h6 className="p-0 m-0 footer-item">Meet The Team</h6>
                    </div>
                    {/* Support Section */}
                    <div className="col-lg-3 pt-5 pb-5">
                        <h3 className="fw-bold pb-3">Support</h3>
                        <h6 className="p-0 m-0 footer-item">Help Center</h6>
                        <h6 className="p-0 m-0 footer-item">FAQ</h6>
                        <h6 className="p-0 m-0 footer-item">Contact Us</h6>
                        <h6 className="p-0 m-0 footer-item">Tickets</h6>
                        <h6 className="p-0 m-0 footer-item">Get an Appointment</h6>
                    </div>
                    {/* Contact Section  */}
                    <div className="col-lg-3 pt-5 pb-5">
                        <div>
                            <h3 className="fw-bold pb-3">Contact Info</h3>
                        </div>
                        <div className="d-flex">
                            <i className="fas fa-map-marker-alt pt-2"></i>
                            <h6 className="ps-3">21st Century is proud to employ a team of 50+ full-time employees – each with a specific field of expertise.

                                1460 Broadway
                                New York, NY 10036</h6>
                        </div>
                        <div className="d-flex pt-2">
                            <i className="fas fa-envelope pt-1"></i>
                            <h6 className="ps-3">support@ODISS-TRAVLE.com</h6>
                        </div>
                        <div className="d-flex pt-2">
                            <i className="fas fa-phone-alt pt-1"></i>
                            <h6 className="ps-3">
                                +6221.2002.2012</h6>
                        </div>
                    </div>
                </div>
                {/* COPYRIGHT  */}
                <div className="text-center pb-5">
                    <p className="p-0 m-0">Copyright © 2021 ||ODISS-TRAVLE.web.app</p>

                </div>
            </div>
        </div>
    );
};

export default Footer;