import React from 'react';
import Banner from '../Banner/Banner';
import Bookings from '../Bookings/Bookings';
import ContactUs from '../ContactUS/ContactUs';
import Discount from '../Discount/Discount';
import TrendingEvent from '../TrendingEvent/TrendingEvent';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bookings></Bookings>
            <TrendingEvent></TrendingEvent>
            <Discount></Discount>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;