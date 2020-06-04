import React from 'react';
import { Ul } from './NavigationItems.css'
import NavigationItem from '../NavigationItem/NavigationItem'
function NavigationItems(props) {
    return (
        <Ul>
            < NavigationItem link="/" active>
                Burger Builder
            </ NavigationItem >
            < NavigationItem link="/" >
                Checkout
            </ NavigationItem >

        </Ul>
    );
}

export default NavigationItems;