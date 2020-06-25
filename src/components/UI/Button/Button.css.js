import styled from 'styled-components';
export const ButtonStyle = styled.button`


background-color: transparent;
    border: none;
    color: ${props => (props.success && !props.disabled) ? 'green' : 'red'};
    transition:2s;
    background-color: ${props => props.disabled ? 'rgba(209, 209, 224,0.8)' : 'transparent'};
    cursor:${props => props.disabled ? 'not-allowed' : 'pointer'};
    outline: none;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;


`