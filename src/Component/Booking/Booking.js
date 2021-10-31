import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Booking = (props) => {
    const { _id, image, name, description, charge } = props.booking
    return (
        <div className=''>
            <Card className='mx-auto' style={{ width: '18rem', height: "100%" }}>
                <Card.Img variant="top" className="image" style={{ height: '200px' }} src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <Card.Text>
                        <h6 className='text-dark'>{description}</h6>
                        <h4>Charge: Rs. {charge}</h4>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0'>
                    <Link to={`/bookingDetails/${_id}`}>
                        <button type="button" class="btn btn-primary btn-sm">Location Booking  <i className="fas fa-arrow-right"></i></button>
                        {/* <button className="btn btn-primary">Location Booking </button> */}
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Booking;