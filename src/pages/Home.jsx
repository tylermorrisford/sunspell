import React from 'react';
import styled from 'styled-components';
import amps from '../images/Sunspell31.jpg'
// import {ReactComponent as SunspellLogo} from '../images/sunspell_nokitty450.png';
import noKitty from '../images/sunspell_nokitty450.jpg'
import '../App.css';
import FadeDiv from '../components/FadeDiv';


export default function Home() {


    return(
        <Holder>
            <FadeDiv>   
                <h1 style={{fontSize: '4em', fontWeight:'900', color: 'white'}}>LET'S MAKE<br />SOME NOISE</h1>
                {/* <SunspellLogo style={{width: '350px', height: '350px'}} className='App-logo' /> */}
            </FadeDiv> 
        </Holder>
    );

}


// const Holder = styled.div`
// width: 100%;
// height: 90vh;
// text-align: center;
// display: flex;
// align-items: center;
// justify-content: center;
// `

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

