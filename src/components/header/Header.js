import React, {useEffect, useState} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './Header.css'
import logo from '../../assets/images/favicon.png'

function Header() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", getOffsetWindow);
    });

    function getOffsetWindow() {
        setOffset(window.pageYOffset)
    }

    return (
        <Navbar  expand="lg" className={offset > 200 ? 'sticky-top' : 'sticky-top sticky-after'}>
            <Navbar.Brand className="col-6 px-4" href="#home">
                <img className="img-fluid mx-3" style={{maxHeight: '30px'}} src={logo} alt=""/>
                Lets Gtok
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="mx-3" href="#home">About</Nav.Link>
                    <Nav.Link className="mx-3" href="#link">Blogs</Nav.Link>
                    <Nav.Link className="mx-3" href="#link">Careers</Nav.Link>
                    <Nav.Link className="mx-3" href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

