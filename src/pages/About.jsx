import React from 'react';
import styled from 'styled-components';
import FadeDiv from '../components/FadeDiv';
import PageBody from '../components/PageBody';
import headphones from '../images/Sunspell_headphones.jpg';

const About = () => {

    return(
        <>
        <FadeDiv>
            <Holder />
        </FadeDiv>
        <PageBody>
            <h2>Sunspell Records is a place to produce, create, and record music located in Salt Lake City.</h2>
        </PageBody>
        </>
    );

}

export default About;

const Holder = styled.div`
width: 100%;
height: 80vh;
background-image: url(${headphones});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`
