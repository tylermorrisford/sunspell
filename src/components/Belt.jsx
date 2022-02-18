import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';

const colStyle = {
    paddingLeft: 0
}

const Belt = () => {
    return(
        <Container fluid style={{padding: 0}}>
            <Background>
                <Row style={{margin: 0, padding: 0}}>
                    <Col s={12} md={6} style={colStyle}>
                            <h1 style={{paddingBottom:'25px', textAlign: 'center'}}>Let's make a recording</h1>
                    </Col>
                    <Col s={12} md={6} style={colStyle}>
                        <div style={{textAlign: 'left'}}>
                            <h1>Sunspell Records</h1>   
                            <p>Salt Lake City, Utah<br />
                            801-952-7283<br />
                            <a style={{color: '#568a39'}} href="mailto:sunspellrecords@gmail.com">sunspellrecords@gmail.com</a></p>
                        </div>
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
font-family: 'Poppins', sans-serif;
padding: 3em 0 2em 3em;
// text-align: center; 
`

export default Belt;