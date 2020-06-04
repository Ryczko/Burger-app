import React from 'react';
import { Li } from './NavigationItem.css'
function NavigationItem(props) {
    return (
        <Li><a href={props.link} className={props.active ? 'active' : null}> {props.children}</a></Li>
    );
}

export default NavigationItem;