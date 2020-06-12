import React from 'react';
import { Li } from './NavigationItem.css'
import { NavLink } from 'react-router-dom'

function NavigationItem(props) {
    return (
        <Li><NavLink to={props.link} exact> {props.children}</NavLink></Li>
    );
}

export default NavigationItem;