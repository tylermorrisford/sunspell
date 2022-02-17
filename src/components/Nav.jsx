import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../images/sunspell_nokitty450.jpg'

const navStyle = {
    fontSize: '1.7rem', 
    fontWeight: 400,
    color: 'black' // this was #a4826c
}

const brandStyle = {
    fontSize: '2.1rem', 
    color: 'black'
}

const active = {
    color: '#568a39'
}

const Navigation = () => {

    return(
            <Navbar collapseOnSelect expand="lg" style={navStyle}>
                <Navbar.Brand 
                // style={{fontSize: '1.7rem'}}
                >
                    <LinkContainer to="/" style={brandStyle}><Nav.Link to="/">
                        <img src={logo} style={{width: '60px', height: '60px'}} alt="sunspell-logo"/>
                        {" "}Sunspell Records
                        </Nav.Link></LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer style={navStyle} activeStyle={active} to="/gear"><Nav.Link href="/">Gear</Nav.Link></LinkContainer>  
                    <LinkContainer style={navStyle} activeStyle={active} to="/services"><Nav.Link href="/">Services</Nav.Link></LinkContainer>  
                    <LinkContainer style={navStyle} activeStyle={active} to="/contact"><Nav.Link href="/">Contact</Nav.Link></LinkContainer>  
                    <LinkContainer style={navStyle} activeStyle={active} to="/about"><Nav.Link href="/">About</Nav.Link></LinkContainer>  
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    );
}

export default Navigation;
