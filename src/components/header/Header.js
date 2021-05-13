import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './Header.css'
function Header() {
    return(
        <header>
            <Navbar bg="light" expand="lg" className="sticky-top">
                <Navbar.Brand className="col-6 px-4" href="#home">Lets Gtok</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="mx-3" href="#home">About</Nav.Link>
                        <Nav.Link className="mx-3" href="#link">Blogs</Nav.Link>
                        <Nav.Link className="mx-3" href="#link">Careers</Nav.Link>
                        <Nav.Link className="mx-3" href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>

    );
}

export default Header;

