import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { PageBody, PhotoFrame } from '../components';
import guys from '../images/SunSpell_Contact.jpg';

const Email = styled.a`
  display: block;
  padding-top: 30px;
`;

const Contact = () => {
  return (
    <>
      <PhotoFrame photo={guys} />
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
