import React from 'react';
import styled from 'styled-components';
import {ReactComponent as SunspellLogo} from '../images/sunspell_logo_no_bg.svg';
import '../App.css';
import FadeDiv from '../components/FadeDiv';


const Home = () => {


    return(
           <FadeDiv>
                <Holder>
                    <SunspellLogo className="App-logo" />
                </Holder>
            </FadeDiv> 
    );

}

export default Home;

const Holder = styled.div`
width: 100%;
height: 90vh;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`
