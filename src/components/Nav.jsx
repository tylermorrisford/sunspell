import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import logo from '../images/sunspell_nokitty450.jpg';

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  fontSize: '1.5rem',
  fontWeight: 200,
  color: 'black', // this was #a4826c
};

const brandStyle = {
  fontSize: '1.8rem',
  color: 'black',
};

const active = {
  color: '#568a39',
};

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand='lg' style={navStyle} className='nav'>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Brand
      // style={{fontSize: '1.7rem'}}
      >
        <BrandLink>
          <LinkContainer to='/' style={brandStyle}>
            <Nav.Link to='/'>
              <span>Sunspell Records</span>
            </Nav.Link>
          </LinkContainer>
        </BrandLink>
      </Navbar.Brand>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <LinkContainer style={navStyle} activeStyle={active} to='/gear'>
            <Nav.Link href='/'>Gear</Nav.Link>
          </LinkContainer>
          <LinkContainer style={navStyle} activeStyle={active} to='/services'>
            <Nav.Link href='/'>Services</Nav.Link>
          </LinkContainer>
          <LinkContainer style={navStyle} activeStyle={active} to='/contact'>
            <Nav.Link href='/'>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer style={navStyle} activeStyle={active} to='/about'>
            <Nav.Link href='/'>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

const LogoImage = styled.div`
  width: 60px;
  height: 60px;
  @media (max-width: 440px) {
    width: 40px;
    height: 40px;
  }
  > img {
    width: 60px;
    height: 60px;
    @media (max-width: 440px) {
      width: 40px;
      height: 40px;
    }
  }
`;

const BrandLink = styled.div`
    fontSize: '1.8rem', 
    color: 'black',
    @media (max-width: 430px) {
        font-size: 1.2rem;
      }
`;
