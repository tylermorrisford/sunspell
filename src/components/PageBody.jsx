import React from 'react';
import styled from 'styled-components';

const PageBody = (props) => {

    return(
        <TextHolder>
            {props.children}
        </TextHolder>
    )
}

export default PageBody;

const TextHolder = styled.div`
align-content: center; 
padding: 45px;
margin: 0 1.5em;
`