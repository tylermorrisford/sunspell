import React from 'react';
import { CSSTransition } from 'react-transition-group';

const FadeDiv = (props) => {

        return (
          <CSSTransition
            classNames="example"
            appear={true}
            timeout={500}
            enter={false}
            exit={false}>
            {props.children}
          </CSSTransition>
        );     
}

export default FadeDiv;