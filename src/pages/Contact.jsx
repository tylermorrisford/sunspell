import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import FadeDiv from '../components/FadeDiv';
import PageBody from '../components/PageBody';
import guys from '../images/SunSpell_Contact.jpg';

const Contact = () => {
  return (
    <>
      <FadeDiv>
        <Holder />
      </FadeDiv>
      <PageBody>
        <div
          style={{
            textAlign: 'center',
            fontSize: '3rem',
            width: '70%',
            margin: '0 auto',
          }}
        >
          <h2>Contact us for a quote</h2>
          <h4>Tell us about your project, We are excited to work with you!</h4>
          <Email href='mailto:sunspellrecords@gmail.com'>
            <Button variant='outline-dark'>
              <h4>Email us</h4>
            </Button>
          </Email>
        </div>
      </PageBody>
    </>
  );
};

export default Contact;

const Holder = styled.div`
  width: 100%;
  height: 80vh;
  // background-color: #d8bc96;
  background-image: url(${guys});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 440px) {
    height: 50vh;
  }
`;

const Email = styled.a`
  display: block;
  padding-top: 30px;
`;
