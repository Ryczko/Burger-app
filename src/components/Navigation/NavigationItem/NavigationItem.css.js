import styled from 'styled-components'
import breakpoints from 'utilis/breakpoints'

export const Li = styled.li`

width:100%;
height:100%;
display:flex;
align-items:center;
background-color:brown;

a{
    background-color:white;
    width:100%;
    color:black;
    height:100%;
    padding: 16px 10px;
    border-bottom:4px solid transparent;
    display:flex;
    align-items:center;
    &:hover,
    &:active,
    &.active{
        background-color: rgba(255, 255, 255, 0.4);
        border-bottom:4px solid blue;

    }
}

@media(min-width:${breakpoints.width.medium}px){
    
    width:auto;
    
    a{
        background-color:transparent;
        color:white;
        
    }
}
`