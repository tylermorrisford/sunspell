import React from 'react';
import styled from 'styled-components';
import {ReactComponent as SunspellLogo} from '../images/sunspell_logo_no_bg.svg';
import '../App.css';
import FadeDiv from '../components/FadeDiv';


export default function Home() {


    return(
        <Holder>
            <FadeDiv>
                <SunspellLogo className="App-logo" />
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
