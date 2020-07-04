import React from 'react';
import { Ul } from './NavigationItems.css'
import NavigationItem from '../NavigationItem/NavigationItem'



function NavigationItems(props) {
    return (
        <Ul>
            < NavigationItem link="/" >
                Burger Builder
            </ NavigationItem >

            {props.isAuth && < NavigationItem link="/orders" >Orders</ NavigationItem >}

            {props.isAuth ?
                < NavigationItem link="/logout" >Logout</ NavigationItem > :
                < NavigationItem link="/auth" >Sign in</ NavigationItem >
            }


        </Ul>
    );
}




export default NavigationItems;