import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddBookings.css'


const AddBookings = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // DefaultValue
    const location = 'Miami'
    const img = 'https://i.ibb.co/vcj9DvK/san-francisco-1024x1024-1600x500.jpg'
    const details = 'Miami is a major city in the south-eastern United States and part of the largest metropolitan area in Florida.';
    const price = 256;

    const onSubmit = (data) => {

        const addData = window.confirm('Are You Sure, You Add This Location')
        console.log(data)
        axios.post('https://salty-ocean-54894.herokuapp.com/bookings', data)
            .then(result => {
                if (addData) {
                    if (result.data.insertedId) {
                        alert('Your Location Add Successfully');
                        reset();
                    }
                }
            })
    }
    return (
        <div>
            {/* ADD SERVICE Section */}
            <div className="container mb-4 add-service">
                <h2 className="text-center mb-3">Add a new Location</h2>
                <div className="form-container">
                    {/* FORM SECTION */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={location} placeholder="Booking Location"  {...register("name", { required: true })} />
                        <br />
                        {errors.name && <span className="text-danger">This field is required</span>}<br />

                        <input defaultValue={img} placeholder="Image URL" {...register("image", { required: true, },)} />
                        <br />
                        {errors.image && <span className="text-danger">This field is required</span>}<br />

                        <textarea defaultValue={details} placeholder="Description Add 100 Word+ " {...register("description", { required: true })} />
                        <br />

                        {errors.description && <span className="text-danger">This field is required</span>}<br />

                        <input defaultValue={price} placeholder="Booking Cost" type="number" {...register("charge", { required: true })} />
                        <br />
                        {errors.charge && <span className="text-danger">This field is required</span>}<br />

                        <button className="btn addBtn" type="submit">Add Booking</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddBookings;