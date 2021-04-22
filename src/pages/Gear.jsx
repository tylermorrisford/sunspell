import React from 'react';
import styled from 'styled-components';
import gear from '../images/Sunspell08.jpg';
import FadeDiv from '../components/FadeDiv';
import PageBody from '../components/PageBody';

const Gear = () => {

    return(
         <>
            <FadeDiv>
                <Holder />    
            </FadeDiv>
            <PageBody>
                <h2>We have more guitars than you have hands</h2>
            </PageBody>
         </>
    );

}

export default Gear;

const Holder = styled.div`
width: 100%;
height: 80vh;
background-color: #d8bc96;
background-image: url(${gear});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`

