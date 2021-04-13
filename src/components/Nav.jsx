import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const navStyle = {
    fontSize: '1.5rem', 
    fontWeight: 700,
    backgroundColor: 'black',
    color: '#a4826c'
}

const brandStyle = {
    fontSize: '1.7rem', 
    color: '#a4826c'
}

const Navigation = () => {
    return(
    <Navbar collapseOnSelect expand="lg" style={navStyle}>
        <Navbar.Brand style={{fontSize: '1.7rem', color: '#a4826c'}}>
            <LinkContainer to="/" style={brandStyle}><Nav.Link to="/">Sunspell Records</Nav.Link></LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <LinkContainer style={navStyle} to="/gear"><Nav.Link href="/">Gear</Nav.Link></LinkContainer>  
            <LinkContainer style={navStyle} to="/services"><Nav.Link href="/">Services</Nav.Link></LinkContainer>  
            <LinkContainer style={navStyle} to="/contact"><Nav.Link href="/">Contact</Nav.Link></LinkContainer>  
            <LinkContainer style={navStyle} to="/about"><Nav.Link href="/">About</Nav.Link></LinkContainer>  
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    );
}

export default Navigation;
