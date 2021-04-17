import React from 'react';
import styled from 'styled-components';

const About = () => {

    return(
        <Holder>
            <h2>Sunspell Records is a place to produce, create, and record music located in Salt Lake City.</h2>
        </Holder>
    );

}

export default About;

const Holder = styled.div`
width: 100%;
height: 90vh;
background-color: #d8bc96;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`
