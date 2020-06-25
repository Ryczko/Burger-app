import React from 'react';
import { ButtonStyle } from './Button.css'
function Button(props) {
    return (
        <ButtonStyle success={props.success} onClick={props.clicked} disabled={props.disabled}>
            {props.children}
        </ButtonStyle>
    );
}

export default Button;