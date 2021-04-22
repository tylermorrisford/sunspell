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
text-align: center;
align-content: center; 
padding: 30px 0;
`