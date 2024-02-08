import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">AB-KART</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="product" className="nav-link">Product</Link>
                    <Link to="payment" className="nav-link">Payment</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;