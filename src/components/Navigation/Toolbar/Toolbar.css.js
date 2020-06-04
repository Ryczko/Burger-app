import styled from 'styled-components'


export const Header = styled.header`
height:54px;
width:100%;
position:fixed;
top:0;
left:0;
background-color:brown;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 20px;
box-sizing: border-box;
z-index:90;
`
export const Nav = styled.nav`
height:100%;

@media(max-width:499px){
    &.deskopOnly{
        display:none;
    }
}
`

export const ToggleMenuBtn = styled.div`
color:white;
font-size:2rem;
@media(min-width:500px){
        display:none;
}


`
