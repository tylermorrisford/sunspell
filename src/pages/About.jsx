import React from 'react';
import styled from 'styled-components';
import FadeDiv from '../components/FadeDiv';
import PageBody from '../components/PageBody';
import headphones from '../images/Sunspell_headphones.jpg';

// const headphones = lazy(() => import('../images/Sunspell_headphones.jpg'));

const About = () => {
  return (
    <>
      <FadeDiv>
        <Holder />
      </FadeDiv>
      <PageBody>
        <h2>
          Sunspell Records is a Salt Lake City based recording studio located in
          the University district. <br />
          Our mission is to provide a friendly and comfortable environment
          conducive to the artist's needs in order to foster creativity and
          achieve the artist's vision.
        </h2>
      </PageBody>
    </>
  );
};

export default About;

const Holder = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${headphones});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
