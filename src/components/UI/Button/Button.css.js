import styled from 'styled-components';
export const ButtonStyle = styled.button`


background-color: transparent;
    border: none;
    color: ${props => props.success ? 'green' : 'red'};
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;


`