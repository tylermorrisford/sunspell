import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

const FadeDiv = (props) => {

        return (
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            {props.children}
          </CSSTransitionGroup>
        );     
}

export default FadeDiv;