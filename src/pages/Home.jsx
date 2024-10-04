import React from 'react';
import styled from 'styled-components';
import home from '../images/SunSpell_Home.jpg';
import '../App.css';
import FadeDiv from '../components/FadeDiv';

export default function Home() {
  return (
    <FadeDiv>
      <>
        <Holder />
        {/* <Overlay> */}
        <h1>
          SALT LAKE CITY {/* <br /> */}
          RECORDING SERVICES
        </h1>
        {/* </Overlay> */}
      </>
    </FadeDiv>
  );
}

const Overlay = styled.h1`
  font-size: 5em;
  font-weight: 900;
  color: white;
  filter: drop-shadow(0 0 0.75rem black);
  @media (max-width: 440px) {
    font-size: 2em;
  }
`;

const Holder = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${home});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 440px) {
    height: 70vh;
  }
`;
