import React from 'react';
import { PageBody, PhotoFrame } from '../components/PageBody';
import about from '../images/SunSpell_About.jpg';

const About = () => {
  return (
    <>
      <PhotoFrame photo={about} />
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
