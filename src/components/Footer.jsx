import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    
    return (
        <Foot>
            <p>© {new Date().getFullYear()} Sunspell Records</p>
        </Foot>
    )
}

export default Footer

const Foot = styled.footer`
margin: 0;
width: 100%;
height: 80px;
background-color: white;
color: #568a39;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
font-weight: 200;
font-size: 1.6rem;
`


// This was sticking the footer to the bottom of the viewport
// position: absolute;
// left: 0;
// bottom: 0;