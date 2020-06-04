import styled from 'styled-components'

export const SideDrawerStyle = styled.div`
position:fixed;
width:280px;
max-width:70%;
height:100%;
left:0;
top:0;
z-index:200;
background-color:white;
padding:32px 16px;
transition:transform 0.3s ease-out;

&.open{
    transform:translateX(0);
    }
&.close{
        transform:translateX(-100%);
    }
@media (min-width:500px){
    display:none;
}


`