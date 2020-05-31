import styled from 'styled-components'

export const BuildControlStyle = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:5px 0;
`

export const Label = styled.div`
padding: 10px;
font-weight: bold;
width: 80px;
`

export const ControlButton = styled.button`

display:block;
font:inherit;
padding:5px;
margin:0 5px;
width:80px;
border:1px solid brown;
cursor:pointer;
outline:none;
color: white;

background-color:${props => props.type === 'less' ? '#D39952' : 'green'};

&:hover, &:active {  
    background-color:${props => props.type === 'less' ? 'red' : 'darkgreen'};
}

&:disabled {
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
}
&:hover:disabled {
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
}
`

