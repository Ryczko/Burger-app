import styled from 'styled-components';

export const DivWithInput = styled.div`
width:100%;



label{
    font-weight:bold;
    display:block;
    margin-bottom:8px;
}
input{
    outline:none;
    border: 1px solid gray;
    background-color:${props => props.validate ? 'white' : 'red'};
    transition:.3s;
    padding: 5px;
    font-size:1.4rem;
    

    &:focus{
        background-color:green;
        color:white;
    }
}





`