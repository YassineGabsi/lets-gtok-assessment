import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="col-8 px-4" href="#home">Lets Gtok</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="mx-1" href="#home">About</Nav.Link>
                    <Nav.Link className="mx-1" href="#link">Blogs</Nav.Link>
                    <Nav.Link className="mx-1" href="#link">Careers</Nav.Link>
                    <Nav.Link className="mx-1"href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

