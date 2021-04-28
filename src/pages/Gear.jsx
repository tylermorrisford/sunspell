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
                <BodyText>
                    Call us before your session to make sure the gear you want is available. <br />
                    We have a ton of great gear, but things can break or get loaned out - 
                    so let us know what you're looking for, and we'll make sure we have it. 
                </BodyText>
            </PageBody>
         </>
    );

}

export default Gear;

const Holder = styled.div`
width: 100%;
height: 80vh;
background-image: url(${gear});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`

const BodyText = styled.p`
line-height: 1.5;
font-size: 1.1rem;
font-family: 'Roboto', sans-serif;
`

