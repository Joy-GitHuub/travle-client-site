import React from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyBooking.css'

const MyBooking = () => {

    const { user } = useAuth();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://salty-ocean-54894.herokuapp.com/myEvents/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [orders, user.email]);


    const handleDelete = id => {
        const deleteSure = window.confirm('Are You Sure, You Delete Your Booking')
        if (deleteSure) {
            const url = `https://salty-ocean-54894.herokuapp.com/myOrder/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount) {
                        alert('SuccessFully DELETE');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining)
                    }


                })
        }
    }


    return (
        <div className="container my-5 my-booking">
            <h2 className="text-center  mb-5">My <span style={{ color: "red" }}>Booking</span></h2>
            <Table striped bordered hover size="sm" responsive="sm">
                <thead className='text-center'>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>BooK.DATE</th>
                        <th>Address</th>
                        <th>Booking</th>
                        <th>Booking Cost</th>
                        <th>Phone.NO</th>
                        <th>Delete Your Order</th>
                    </tr>
                </thead>

                {
                    !orders.length ? <div className="text-center mx-auto">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden mx-auto">Loading...</span>
                        </Spinner>
                    </div> :

                        <tbody className=''>

                            {
                                orders.map((order, index) => <>
                                    <tr className='text-center align-items-center' key={order._id}>
                                        <td>{index + 1}</td>
                                        <td style={{ fontSize: '15px', }}>{user.displayName}</td>
                                        <td>{order.email}</td>
                                        <td>{order.BookingDate}</td>
                                        <td> {order.city}</td>
                                        <td>{order.Location}</td>
                                        <td>{order.price}</td>
                                        <td>{order.phone}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(order._id)}
                                                type="button" className="btn btn-dark "><i className="fas fa-trash text-danger"></i></button>
                                        </td>
                                    </tr>

                                </>
                                )
                            }




                        </tbody>

                }

            </Table>
        </div>
    );
};

export default MyBooking;