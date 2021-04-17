import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    const currentDate = new Date();
    
    return (
        <Foot>
            <p>© {currentDate.getFullYear()} Sunspell Records</p>
            {/* <Email href="mailto:tylerford@gmail.com">email us</Email> */}
        </Foot>
    )
}

export default Footer

const Foot = styled.footer`
margin: 0;
width: 100%;
height: 80px;
background-color: white;
color: #a4826c;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 1.6rem;
`


// This was sticking the footer to the bottom of the viewport
// position: absolute;
// left: 0;
// bottom: 0;