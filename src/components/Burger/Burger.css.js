import styled from 'styled-components'
import breakPoints from 'utilis/breakpoints'

export const BurgerStyle = styled.div`
  width:100%;
  margin:auto;
  height:250px;
  text-align:center;
  font-weight:bold;
  font-size:1.2rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  overflow:auto;


  @media (min-width:${breakPoints.width.medium}px)  { 
    width:350px;
    height:300px;
  }


  @media (min-width:${breakPoints.width.medium}px) and (min-height:${breakPoints.height.medium}px)  { 
    width:450px;
    height:400px;
  }


  @media (min-width: ${breakPoints.width.large}px) and (min-height:${breakPoints.height.large}px)  { 
    width:700px;
    height:600px;
  }

`