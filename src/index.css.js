import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'


export default createGlobalStyle`
${normalize}
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
 a{
     text-decoration:none
 }
 ul{
    list-style-type:none;
 }
`