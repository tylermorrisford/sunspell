import React from 'react';
import styled from 'styled-components';
import amps from '../images/Sunspell31.jpg'
import '../App.css';
import FadeDiv from '../components/FadeDiv';


export default function Home() {


    return(
        <Holder>
            <FadeDiv>   
                <Overlay>SALT LAKE CITY<br />RECORDING SERVICES</Overlay>
                {/* <SunspellLogo style={{width: '350px', height: '350px'}} className='App-logo' /> */}
            </FadeDiv> 
        </Holder>
    );

}

const Overlay = styled.h1`
font-size: 5em;
font-weight: 900;
color: white;
filter: drop-shadow(0 0 0.75rem black);
`

const Holder = styled.div`
width: 100%;
height: 80vh;
background-image: url(${amps});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`

