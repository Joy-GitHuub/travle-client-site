import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Booking from '../Booking/Booking';

const Bookings = () => {

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`https://salty-ocean-54894.herokuapp.com/bookings`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div className='text-center container'>
            <h2 className='text-primary mt-5'>Tourism Location</h2>
            {
                !bookings.length ? <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div> :
                    <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                        {
                            bookings.map(booking =>
                                <Booking
                                    key={booking._id}
                                    booking={booking}
                                >
                                </Booking>)
                        }
                    </div>}
        </div>
    );
};

export default Bookings;