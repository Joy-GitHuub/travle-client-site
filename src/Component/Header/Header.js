import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <div>
            <Navbar fixed="top" className="parent-nav shadow-lg" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <h6>ODISS-TRAVLE</h6>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navigation ms-auto">
                            <NavLink activeClassName="selected" to="/home">Home</NavLink>
                            <NavLink activeClassName="selected" to="/about">ABOUT-US</NavLink>
                            <NavLink activeClassName="selected" to="/myBooking">My Booking</NavLink>
                            {
                                user?.email && <NavLink activeClassName="selected" to="/allOrders">Manage All Booking</NavLink>
                            }
                            {user?.email &&
                                <NavLink activeClassName="selected" to="/addBookings">Add Booking</NavLink>}
                            {
                                user?.email ? <>
                                    <button onClick={logOut} className="btn btn-sm btn-danger me-2">Sign Out</button>
                                    <p className="p-0 m-0 fw-bold">{user.displayName}</p>
                                </> : <Link to="/login"><button className="btn btn-sm btn-danger">Sign In</button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;