import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import FadeDiv from '../components/FadeDiv';
import PageBody from '../components/PageBody';
import room from '../images/Sunspell_room.jpg';

// const room = lazy(() => import('../images/Sunspell_room.jpg'));

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
          <h2>
            Tell us about your project!
            <br />
            We are excited to work with you.
          </h2>
          <Email href='mailto:sunspellrecords@gmail.com'>
            <Button variant='outline-dark'>
              <h2>Email us</h2>
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
  background-image: url(${room});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Email = styled.a`
  display: block;
  padding-top: 30px;
`;
