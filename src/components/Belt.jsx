import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';

const Belt = () => {
    return(
        <Container fluid style={{padding: 0}}>
            <Background>
                <Row>
                    <Col s={12} md={6}>
                        <h2>Let's make a record</h2>
                        <p>Joey can sing falsetto on it</p>
                    </Col>
                    <Col s={12} md={6}>
                        <h1>Sunspell Records</h1>
                        <p>122 7th Avenue<br />
                        Salt Lake City, Utah<br />
                        801-952-7283<br />
                        email@example.com</p>
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
padding: 2em 0 0 3em;
height: 50vh;
`


export default Belt;