import React from 'react';
import styled from 'styled-components';
import {ReactComponent as SunspellLogo} from '../images/sunspell_logo_no_bg.svg';
import '../App.css';

const Home = () => {

    return(
        <Holder>
            <SunspellLogo className="App-logo" />
            {/* <img className="App-logo" src={sunspellImageLink} alt="Sunspell Logo"/> */}
        </Holder>
    );

}

export default Home;

const Holder = styled.div`
width: 100%;
height: 90vh;
background-color: #d8bc96;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`
