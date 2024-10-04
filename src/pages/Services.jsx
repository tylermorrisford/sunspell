import React from 'react';
import styled from 'styled-components';
import FadeDiv from '../components/FadeDiv';
import PageBody from '../components/PageBody';
import services from '../images/SunSpell_Services.jpg';

const Services = () => {
  return (
    <>
      <FadeDiv>
        <Holder />
      </FadeDiv>
      <PageBody>
        <h2>Services</h2>
        <h4>
          Sunspell Records is a multifaceted facility providing multitrack and
          live recording, engineering, producing, mixing, mastering, tape
          bounces, podcasts, reamping, composition, and performance.
        </h4>
      </PageBody>
    </>
  );
};

export default Services;

const Holder = styled.div`
  width: 100%;
  height: 80vh;
  // background-color: #d8bc96;
  background-image: url(${services});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
