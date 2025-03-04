import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../App.css';

const FadeDiv = (props) => {
  return (
    <CSSTransition in={true} appear={true} timeout={10} classNames='fade'>
      {props.children}
    </CSSTransition>
  );
};

export default FadeDiv;
