import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import '../App.css'

function MyNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="custom-header-navbar" variant="dark">
            <Navbar.Brand href="#home">PK</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav className="navbar-dark navbar-brand">
                    <Nav.Link href="#features">ABOUT</Nav.Link>
                    <Nav.Link href="#pricing">EXPERIENCE</Nav.Link>
                    <Nav.Link href="#pricing">WORK</Nav.Link>
                    <Nav.Link href="#pricing">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;