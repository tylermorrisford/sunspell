import React from 'react';
import styled from 'styled-components';

const Services = () => {

    return(
        <Holder>
            <h2>We know how to twist all the knobs <br />and also do actual recording-related stuff to help you make a great record.</h2>
        </Holder>
    );

}

export default Services;

const Holder = styled.div`
width: 100%;
height: 90vh;
background-color: #d8bc96;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`
