import React from 'react';
import discount from '../../Images/Group-296-2.png'
import discountBanner from '../../Images/Group-208-1.png'
import './Discount.css'

const Discount = () => {
    return (
        <div className='container my-5'>
            <div className="row align-item-center d-flex">

                <div className='col-lg-6 col-md-6 col-12'>
                    <h5 className='heading'>Multi-Tours</h5>
                    <h3>Discount On Quantity</h3>
                    <img src={`https://shinetheme.com/travelerdata/solotour/wp-content/themes/traveler/v2/images/Vector.svg`} alt="" />
                    <p className='mt-3'>Book a tour today and enjoy exclusive savings on any future trip you book! There's no time limit or expiry date on these savings</p>
                    <img className='img-fluid' src={discount} alt="" />

                    <h5 className='find-out'>FIND OUT MORE <br /> ------------------------</h5>
                </div>


                <div className='col-lg-6 col-md-6 col-12 '>
                    <img className='img-fluid' src={discountBanner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Discount;