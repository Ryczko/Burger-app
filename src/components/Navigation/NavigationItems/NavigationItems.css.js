import styled from 'styled-components'
import breakpoints from 'utilis/breakpoints'

export const Ul = styled.ul`
    display:flex;
    align-items: center;
    margin:0;
    flex-direction:column;
    margin-top:20px;
  
@media(min-width:${breakpoints.width.medium}px){
    margin-top:0;
    flex-direction:row;
    height:100%;
}


`