import React from 'react';
import styled from 'styled-components';
import amps from '../images/Sunspell31-min.jpg';
import '../App.css';
import FadeDiv from '../components/FadeDiv';

export default function Home() {
  return (
    <FadeDiv>
      <Holder>
        <Overlay>
          SALT LAKE CITY
          <br />
          RECORDING SERVICES
        </Overlay>
      </Holder>
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
  background-image: url(${amps});
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
