import React from 'react';
import styled from 'styled-components';
import FadeDiv from '../components/FadeDiv';
import PageBody from '../components/PageBody';
import about from '../images/Sunspell_about.jpg';

const About = () => {
  return (
    <>
      <FadeDiv>
        <Holder />
      </FadeDiv>
      <PageBody>
        <h2>About</h2>
        <h4>
          Sunspell Records is a Salt Lake City based recording studio located in
          the University district. <br />
          Our mission is to provide a friendly and comfortable environment
          conducive to the artist's needs in order to foster creativity and
          achieve the artist's vision.
        </h4>
      </PageBody>
    </>
  );
};

export default About;

const Holder = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${about});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
