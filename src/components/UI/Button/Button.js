import React from 'react';
import { ButtonStyle } from './Button.css'
function Button(props) {
    return (
        <ButtonStyle success={props.success} onClick={props.clicked}>
            {props.children}
        </ButtonStyle>
    );
}

export default Button;