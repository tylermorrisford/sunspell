import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const navStyle = {
    fontSize: '1.7rem', 
    fontWeight: 700,
    // backgroundColor: '#d8bc96', // this was black
    color: 'black' // this was #a4826c
}

const brandStyle = {
    fontSize: '2.1rem', 
    color: 'black'
}

const Navigation = () => {
    return(
    <Navbar collapseOnSelect expand="lg" style={navStyle}>
        <Navbar.Brand style={{fontSize: '1.7rem'}}>
            <LinkContainer to="/" style={brandStyle}><Nav.Link to="/">Sunspell Records</Nav.Link></LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <LinkContainer style={navStyle} activeStyle={{color: '#a4826c'}} to="/gear"><Nav.Link href="/">Gear</Nav.Link></LinkContainer>  
            <LinkContainer style={navStyle} activeStyle={{color: '#a4826c'}} to="/services"><Nav.Link href="/">Services</Nav.Link></LinkContainer>  
            <LinkContainer style={navStyle} activeStyle={{color: '#a4826c'}} to="/contact"><Nav.Link href="/">Contact</Nav.Link></LinkContainer>  
            <LinkContainer style={navStyle} activeStyle={{color: '#a4826c'}} to="/about"><Nav.Link href="/">About</Nav.Link></LinkContainer>  
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    );
}

export default Navigation;
