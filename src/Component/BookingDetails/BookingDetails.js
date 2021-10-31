import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './BookingDetails.css'

const BookingDetails = (props) => {
    const { id } = useParams();
    const [bookingDetails, setBookingDetails] = useState({})

    useEffect(() => {
        const url = `https://salty-ocean-54894.herokuapp.com/bookings/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBookingDetails(data))
    }, []);


    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const handleUser = (data, e,) => {
        const proceed = window.confirm('Are You Sure, You Visit This Location');


        fetch(`https://salty-ocean-54894.herokuapp.com/userbook`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (proceed) {
                    alert('Your Booking successful')
                    reset()
                }
            })

        console.log(data)
        e.preventDefault();

    }

    const { user } = useAuth();

    return (
        // <div className='booking-details container '>

        //     <h4>{bookingDetails.name}</h4>
        //     <p>{bookingDetails.charge}</p>
        //     <p>{bookingDetails.description}</p>
        //     <img src={bookingDetails.image} alt="" />

        // </div>
        <div className="container booking-details">
            {/* Service Details Section */}
            <div className="row d-flex align-items-center ">
                <div className="col-lg-6 col-md-6 col-12 text-center">
                    <img width="300px" height="300px" src={bookingDetails.image} alt="" />
                    <h3 className='text-info'>{bookingDetails?.name}</h3>
                    <h6 className="fw-bold  text-dark "><span className='text-danger'>Location Details:</span> {bookingDetails.description}</h6>
                    <p className='text-primary'>Price:${bookingDetails.charge}</p>

                </div>
                <div className="col-lg-6 col-md-6 col-12 form-container user-form">
                    <h3 className='text-danger text-center'>User Details</h3>
                    <form className="shipping-form" onSubmit={handleSubmit(handleUser)}>

                        <input defaultValue={user.displayName} {...register("UserName", { required: true })} />
                        <br />{errors.UserName && <span className="text-danger">This field is required</span>}<br />

                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        <br /> {errors.email && <span className="text-danger">This field is required</span>}<br />

                        <input defaultValue={bookingDetails.name} {...register("Location", { required: true })} />
                        <br />{errors.Location && <span className="text-danger">This field is required</span>}<br />

                        <input type="date" placeholder="Date" {...register('BookingDate', { required: true })} />
                        <br />{errors.BookingDate && <span className="text-danger">This field is required</span>}<br />
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <br /> {errors.Address && <span className="text-danger">This field is required</span>}<br />
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <br /> {errors.city && <span className="text-danger">This field is required</span>}<br />

                        <input defaultValue={bookingDetails.charge} {...register("price", { required: true })} placeholder='Booking Cost' />
                        <br />{errors.price && <span className="text-danger">This field is required</span>}<br />

                        <input placeholder="phone number" defaultValue="" {...register("phone")} />
                        <br /> {errors.phone && <span className="text-danger">This field is required</span>}<br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;