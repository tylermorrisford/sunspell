import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Contact = () => {

    return(
        <>
        <Holder>
            <Row>
                <Col md={10}>
                <h2>We're probably making a hit <br />*right now* <br />so drop us a line, <br />we'll get right back 'atcha</h2>
                </Col>
                <Col md={2}>
                <div style={{textAlign: 'center', fontSize: '3rem', width: '25px', margin: '0 auto'}}>
                <Email href="mailto:sunspellrecords@gmail.com"><Button variant="outline-dark"><h2>Email us</h2></Button></Email>
                </div>
                </Col>
            </Row>
        </Holder>
        </>
    );

}

export default Contact;

const Holder = styled.div`
width: 100%;
height: 90vh;
background-color: #d8bc96;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`

const Email = styled.a`
display: block;
padding-top: 30px;
`