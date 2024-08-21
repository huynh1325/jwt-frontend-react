import React, { useEffect, useState, useContext } from 'react';
import './Nav.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../contextt/UserContext';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav'

const NavHeader = (props) => {
    const { user } = useContext(UserContext);
    const location = useLocation();

    if (user && user.isAuthenticated === true || location.pathname === '/') {
        return (
            <>
                {/* <div className="topnav">
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div> */}
                <div className='nav-header'>
                    <Navbar bg="header" expand="lg">
                        <Container>
                            <Navbar.Brand href='#home'>
                                <span className='brand-name'>
                                    React
                                </span>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                                    <NavLink to="/users" className="nav-link">Users</NavLink>
                                    <NavLink to="/projects" className="nav-link">Projects</NavLink>
                                    <NavLink to="/about" className="nav-link">About</NavLink>
                                </Nav>
                                <Nav>
                                    <Nav.Item className='nav-link'>
                                        Welcome
                                    </Nav.Item>
                                    <NavDropdown title="Settings" id="basic-nav-dropdown">
                                        <NavDropdown.Item href='#action/3.1'>Change Password</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href='#action/3.4'>Log out</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        );
    } else {
        return <></>
    }
}

export default NavHeader;