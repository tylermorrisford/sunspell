import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';

const Belt = () => {
    return(
        <Container fluid style={{padding: 0}}>
            <Background>
                <Row>
                    <Col s={12} md={6}>
                        <h1>Let's make a recording</h1>
                        <small>Joey can sing falsetto on it</small>
                    </Col>
                    <Col s={12} md={6}>
                        <h1>Sunspell Records</h1>
                        <p>Salt Lake City, Utah<br />
                        801-952-7283<br />
                        sunspellrecords@gmail.com</p>
                    </Col>
                </Row>
            </Background>
        </Container>
    );

}

const Background = styled.div`
background-color: #202020;
width: 100%;
color: whitesmoke;
font-family: 'Roboto', sans-serif;
// font-size: 2.5rem;
// font-weight: 'thin';
padding: 3em 0 2em 3em;
// height: 50vh;
`


export default Belt;