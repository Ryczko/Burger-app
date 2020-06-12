import React from 'react';
import burgerLogo from 'assets/images/logo.png'
import { LogoDiv } from './Logo.css'
import { Link } from 'react-router-dom'


function Logo(props) {
    return (
        <LogoDiv style={{ height: props.height }}>
            <Link to="/">
                <img src={burgerLogo} alt="burger logo" />
            </Link>
        </LogoDiv>
    );
}

export default Logo;