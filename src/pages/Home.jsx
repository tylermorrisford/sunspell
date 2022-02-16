import React from 'react';
import styled from 'styled-components';
// import {ReactComponent as SunspellLogo} from '../images/sunspell_nokitty450.png';
import noKitty from '../images/sunspell_nokitty450.jpg'
import '../App.css';
import FadeDiv from '../components/FadeDiv';


export default function Home() {


    return(
        <Holder>
            <FadeDiv>   
                <img src={noKitty} alt="sunspell-logo" />
                {/* <SunspellLogo style={{width: '350px', height: '350px'}} className='App-logo' /> */}
            </FadeDiv> 
        </Holder>
    );

}


const Holder = styled.div`
width: 100%;
height: 90vh;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`
