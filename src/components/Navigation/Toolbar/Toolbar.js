import React from 'react';
import { Header, Nav, ToggleMenuBtn } from './Toolbar.css'
import Logo from 'components/Logo/Logo'
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems'


function Toolbar(props) {
    return (
        <Header>
            <ToggleMenuBtn onClick={props.click}><i className="icon-menu" /></ToggleMenuBtn>
            <Logo />
            <Nav className="deskopOnly">
                <NavigationItems />
            </Nav>
        </Header>
    );
}

export default Toolbar;