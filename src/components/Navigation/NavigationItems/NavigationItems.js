import React from 'react';
import { Ul } from './NavigationItems.css'
import NavigationItem from '../NavigationItem/NavigationItem'



function NavigationItems(props) {
    return (
        <Ul>
            < NavigationItem link="/" >
                Burger Builder
            </ NavigationItem >
            < NavigationItem link="/orders" >
                Orders
            </ NavigationItem >

        </Ul>
    );
}

export default NavigationItems;