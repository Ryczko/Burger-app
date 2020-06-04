import styled from 'styled-components'

const Backdrop = styled.div`
position:fixed;
background:rgba(53, 53, 53, 0.49);
width:100%;
height:100%;
top:0;
left:0;
z-index:100;
display: ${props => props.active ? 'block' : 'none'};
`
export default Backdrop;