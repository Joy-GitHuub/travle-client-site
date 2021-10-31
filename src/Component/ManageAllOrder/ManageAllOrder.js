import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ManageAllOrder = () => {

    const { user } = useAuth();
    console.log(user)
    const [allBooking, setAllBooking] = useState([]);

    useEffect(() => {
        const url = `https://salty-ocean-54894.herokuapp.com/allEvents`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAllBooking(data))
    }, [user, allBooking]);


    const handleDelete = id => {
        const deleteSure = window.confirm('Are You Sure, You Delete Your Booking')
        if (deleteSure) {
            const url = `https://salty-ocean-54894.herokuapp.com/allEvents/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        alert('SuccessFully DELETE');
                        const remaining = allBooking.filter(order => order._id !== id);
                        setAllBooking(remaining)
                    }


                })
        }
    }

    return (
        <div className='container mt-5 text-center my-booking'>
            <div>
                <h2 className="text-center  mb-5">ALL <span style={{ color: "red" }}>USER Booking</span></h2>
                <Table striped bordered hover size="sm" responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>User Location</th>
                            <th>Booking Location</th>
                            <th>Booking Cost</th>
                            <th>Cancel Booking</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            !allBooking.length ? <div className="text-center mx-auto">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden mx-auto">Loading...</span>
                                </Spinner>
                            </div> :


                                allBooking.map((userDetails, index) => <>
                                    <tr className='text-center align-items-center' key={userDetails._id}>
                                        <td> {index + 1}</td>
                                        <td style={{ fontSize: '15px', }}>{userDetails.UserName}</td>
                                        <td>{userDetails.email}</td>
                                        <td>{userDetails.BookingDate}</td>
                                        <td>{userDetails.city}</td>
                                        <td>{userDetails.Location}</td>
                                        <td>{userDetails.price}</td>
                                        <td
                                            onClick={() => handleDelete(userDetails._id)}>
                                            <button

                                                type="button" className="btn btn-dark "><i className="fas fa-trash text-danger"></i></button>
                                        </td>
                                    </tr>

                                </>
                                )
                        }
                    </tbody>
                </Table>
            </div>


        </div>
    );
};

export default ManageAllOrder;