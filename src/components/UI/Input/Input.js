import React from 'react';
import { DivWithInput } from './input.css'
function Input(props) {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} />

            break;
        case ('textarea'):
            inputElement = <textarea {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case ('select'):
            inputElement = <select value={props.value} onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option value={option.value} key={option.value}>{option.displayValue}</option>
                ))}

            </select>
            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.element} onChange={props.changed} />
    }



    return (


        <DivWithInput validate={props.validate}>
            <label>{props.label}</label>
            {inputElement}
        </DivWithInput>
    );
}

export default Input;