import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Images/istockphoto-502584005-612x612.jpg'

const NotFound = () => {
    return (

        <div className="text-center p-5">
            <img height='400px' src={img} alt="" />
            <br />

            <Link to="/home">Back To Home </Link>
        </div>
    );
};

export default NotFound;