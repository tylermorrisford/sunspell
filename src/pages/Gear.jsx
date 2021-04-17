import React from 'react';
import styled from 'styled-components';

const Gear = () => {

    return(
        <Holder>
            <h2>We have a lot of guitars because we're nerds <br />and we even have congas because... we're nerds.</h2>
        </Holder>
    );

}

export default Gear;

const Holder = styled.div`
width: 100%;
height: 90vh;
background-color: #d8bc96;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`
