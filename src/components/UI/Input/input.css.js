import styled from 'styled-components';

export const DivWithInput = styled.div`
width:100%;
text-align:center;


label{
    font-weight:bold;
    display:block;
    margin-bottom:8px;
}
input{
    outline:none;
    border:none;
    border-bottom: 1px solid gray;
    background-color:${props => props.validate ? 'white' : 'red'};
    transition:.3s;
    padding: 5px;
    font-size:1.4rem;
    width: 80%;
    text-align:center;
    max-width: 600px;
    margin:3px;
  
    
    &:focus{
        background-color:#e1e4e8;
    }
}





`