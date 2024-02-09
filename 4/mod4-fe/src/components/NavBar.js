import React from 'react'
// imported navbar css and nav and navbar from react-bootstrap
import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <div>
        {/* This a react-bootstrap navbar */}
            <Navbar expand="lg" className="nav-bg shadow-sm">
                    <Navbar.Brand href="/" className='logo'><i className="fa-brands fa-salesforce fa-2xl"></i></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/AddSales">AddSales</Nav.Link>
                            <Nav.Link href="/T5S">TOP 5 SALES</Nav.Link>
                            <Nav.Link href="/TDR">TodayRevenue</Nav.Link>
                            <Nav.Link href="/Login">Login</Nav.Link>
                            <Nav.Link href="/Register">Register</Nav.Link>
                            <Nav.Link href="/Cover">Cover</Nav.Link>
                            {/* Log Out button is disabled here */}
                            <Nav.Link href="#link" disabled>Log Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar