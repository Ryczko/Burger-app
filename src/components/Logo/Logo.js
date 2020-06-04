import React from 'react';
import burgerLogo from 'assets/images/logo.png'
import { LogoDiv } from './Logo.css'
function Logo(props) {
    return (
        <LogoDiv style={{ height: props.height }}>
            <img src={burgerLogo} alt="burger logo" />
        </LogoDiv>
    );
}

export default Logo;