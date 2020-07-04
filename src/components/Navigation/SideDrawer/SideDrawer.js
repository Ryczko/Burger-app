import React from 'react';
import Logo from 'components/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import { SideDrawerStyle } from './SideDrawer.css.js'
import Backdrop from 'components/UI/Backdrop/Backdrop'


function SideDrawer(props) {

    return (
        <>
            <Backdrop active={props.isOpened} onClick={props.backdropClick} />
            <SideDrawerStyle className={props.isOpened ? "open" : "close"}>
                <Logo height="18%" />
                <nav>
                    <NavigationItems isAuth={props.isAuth} />
                </nav>
            </SideDrawerStyle>
        </>
    );
}

export default SideDrawer;