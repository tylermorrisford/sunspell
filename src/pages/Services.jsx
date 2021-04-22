import React from 'react';
import styled from 'styled-components';
// import FadeDiv from '../components/FadeDiv';
import PageBody from '../components/PageBody';
import control from '../images/Sunspell_control.jpg';


const Services = () => {

    return(
        <>
            {/* <FadeDiv> */}
                <Holder />
            {/* </FadeDiv> */}
            <PageBody>
                <h2>We know how to twist those knobs.<br />
                AND we know how to make records</h2>
            </PageBody>
        </>
    );

}

export default Services;

const Holder = styled.div`
width: 100%;
height: 80vh;
// background-color: #d8bc96;
background-image: url(${control});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`
